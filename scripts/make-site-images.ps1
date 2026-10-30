# Generates the site's derived image assets from sources that already exist:
#   - src/app/icon.png + src/app/apple-icon.png  (resized brand emblem)
#   - public/products/social-card.png            (1200x630 OG/social card)
# Run: powershell -ExecutionPolicy Bypass -File scripts\make-site-images.ps1
# All artwork drawn here is original programmatic composition - no borrowed assets.

Add-Type -AssemblyName System.Drawing

$scriptsDir = Split-Path -Parent $PSCommandPath
$root = Split-Path -Parent $scriptsDir
$emblemPath = Join-Path $root "public\brand\growth-guild-labs-logo.png"

function New-Error { throw "Brand emblem not found at $emblemPath" }
if (-not (Test-Path $emblemPath)) { New-Error }

function Resize-Icon {
    param([string]$Target, [int]$Size)
    $src = [System.Drawing.Image]::FromFile($emblemPath)
    $bmp = New-Object System.Drawing.Bitmap -ArgumentList $Size, $Size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($src, 0, 0, $Size, $Size)
    $g.Dispose()
    $bmp.Save($Target, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $src.Dispose()
    Write-Output "icon written: $Target ($Size x $Size)"
}

function Draw-Glow {
    param($g, [int]$cx, [int]$cy, [int]$maxRadius, [int]$steps)
    for ($i = 1; $i -le $steps; $i++) {
        $t = $i / [double]$steps
        $r = [int](50 + $maxRadius * $t)
        $alpha = [int](16 * (1 - $t))
        if ($alpha -le 0) { continue }
        $brush = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb($alpha, 0, 229, 255))
        $rect = New-Object System.Drawing.Rectangle -ArgumentList ([int]($cx - $r)), ([int]($cy - $r)), ($r * 2), ($r * 2)
        $g.FillEllipse($brush, $rect)
        $brush.Dispose()
    }
}

function New-SocialCard {
    $w = 1200
    $h = 630
    $bmp = New-Object System.Drawing.Bitmap -ArgumentList $w, $h
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

    # Background: vertical gradient (abyss top -> void bottom)
    $bg = New-Object System.Drawing.Rectangle -ArgumentList 0, 0, $w, $h
    $bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush -ArgumentList $bg, ([System.Drawing.Color]::FromArgb(255, 7, 29, 36)), ([System.Drawing.Color]::FromArgb(255, 3, 9, 13)), 90
    $g.FillRectangle($bgBrush, $bg)
    $bgBrush.Dispose()

    # Cyan glow, upper right
    Draw-Glow $g 1060 -40 400 30

    # Top cyan hairline
    $lineBrush = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb(140, 0, 229, 255))
    $g.FillRectangle($lineBrush, 0, 0, $w, 3)
    $lineBrush.Dispose()

    # Emblem
    $emblem = [System.Drawing.Image]::FromFile($emblemPath)
    $g.DrawImage($emblem, 88, 60, 92, 92)
    $emblem.Dispose()

    # Fonts (enum values resolved first - New-Object argument lists treat
    # [Type]::Member expressions as string literals)
    $fsBold = [System.Drawing.FontStyle]::Bold
    $fsRegular = [System.Drawing.FontStyle]::Regular
    $guPixel = [System.Drawing.GraphicsUnit]::Pixel
    $brandFont = New-Object System.Drawing.Font -ArgumentList "Consolas", 34, $fsBold, $guPixel
    $tagFont = New-Object System.Drawing.Font -ArgumentList "Consolas", 20, $fsRegular, $guPixel
    $headFont = New-Object System.Drawing.Font -ArgumentList "Segoe UI", 68, $fsBold, $guPixel
    $rowFont = New-Object System.Drawing.Font -ArgumentList "Consolas", 18, $fsRegular, $guPixel
    $smallFont = New-Object System.Drawing.Font -ArgumentList "Consolas", 16, $fsRegular, $guPixel

    $cyan = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb(255, 0, 229, 255))
    $white = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb(255, 243, 250, 252))
    $grey = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb(255, 155, 174, 181))

    # Brand + tagline
    $g.DrawString("GROWTH GUILD LABS", $brandFont, $cyan, 196, 66)
    $g.DrawString("Build More. Grow Together.", $tagFont, $grey, 198, 116)

    # Accent bar above headline
    $g.FillRectangle($cyan, 92, 262, 120, 5)

    # Headline
    $g.DrawString("THE FUTURE IS BUILT.", $headFont, $white, 88, 288)
    $g.DrawString("NOT WAITED FOR.", $headFont, $cyan, 88, 376)

    # Separator above product row
    $sepBrush = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb(60, 155, 174, 181))
    $g.FillRectangle($sepBrush, 92, 492, 1016, 1)
    $sepBrush.Dispose()

    # Product row (verbatim names)
    $g.DrawString("ULTRON 2.0 | ULTRON 2.0 Connector | JARVIS 2.0 | JARVIS 2.0 Phone | F.R.I.D.A.Y. AI", $rowFont, $grey, 92, 512)

    # Founders line
    $g.DrawString("An independent project by Zaid Uddin and Idrees Uddin", $smallFont, $grey, 92, 548)

    # Top-right status chip
    $g.DrawString("WORKING PRIVATE BUILDS", $smallFont, $grey, 900, 66)

    foreach ($f in @($brandFont, $tagFont, $headFont, $rowFont, $smallFont)) { $f.Dispose() }
    foreach ($b in @($cyan, $white, $grey)) { $b.Dispose() }
    $g.Dispose()

    $target = Join-Path $root "public\products\social-card.png"
    $bmp.Save($target, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "social card written: $target (1200 x 630)"
}

# 1) Favicons / app icons from the brand emblem
Resize-Icon (Join-Path $root "src\app\icon.png") 256
Resize-Icon (Join-Path $root "src\app\apple-icon.png") 180

# 2) Social card
New-SocialCard
