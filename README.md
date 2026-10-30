# Growth Guild Labs — Next-Level Website & Application Releases

> **“The future is built. Not waited for.”**
>
> Official website for **Growth Guild Labs** — an independent technology lab building five working AI assistants and companion applications, founded by **Zaid Uddin** and co-founded by **Idrees Uddin**.

---

## 🚀 Quick Deployment Guide: Which Folder to Upload?

### 📁 Uploading to Netlify (Drag & Drop)

If you are uploading manually to Netlify via the [Netlify Drop](https://app.netlify.com/drop) dashboard:

> ### **👉 UPLOAD THE `out` FOLDER**
>
> 1. Run the static export command in your terminal:
>    ```bash
>    npm run export
>    ```
> 2. Open the project folder in File Explorer:
>    `c:\Users\Admin\Downloads\growth-guild-labs\`
> 3. Locate the **`out`** folder.
> 4. Drag and drop the **`out`** folder directly into the Netlify Drop box.
>
> *(Do **not** upload `.next`, `public`, or the root workspace folder. Only upload `out`.)*

---

### 🌐 Deploying to Netlify (via Git Repository)

If your project is connected to a GitHub/GitLab repository on Netlify:
* **Build command**: `npm run export`
* **Publish directory**: `out`
* **Node.js version**: `20` (configured automatically via `netlify.toml`)
* **Environment variables**:
  * `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com`

---

### ⚡ Deploying to Vercel (Recommended Primary Target)

Vercel provides native Next.js server features and edge routing:
1. Connect this repository to Vercel.
2. Settings:
   * **Framework Preset**: Next.js
   * **Root Directory**: `./` (default)
   * **Build Command**: `npm run build`
   * **Output Directory**: `.next` (default)
3. Add Environment Variable:
   * `NEXT_PUBLIC_SITE_URL`: `https://your-production-domain.com`

> ⚠️ **Important Boundary Rule**: Do not deploy directly to or overwrite the old legacy site at `https://growthguildlabs.netlify.app/` without explicit authorization. That reference deployment remains untouched.

---

## 📦 Verified Application Releases (The 5 Applications)

All 5 applications have confirmed, functional releases compiled by Growth Guild Labs. The Download Centre (`/downloads`) provides direct download cards, verified SHA-256 checksums, and step-by-step installation guides:

| Application | Platform | Package File | Size | Verified SHA-256 Checksum |
|---|---|---|---|---|
| **ULTRON 2.0** | Windows (x64) | `ULTRON_2.0_Windows_x64.zip` | 400.3 MB | `CF3314C87126BE06096AAF7FAEA91D7DEB54B664F7F9007D4EFFF14271F91137` |
| **ULTRON 2.0 Connector** | Android | `ULTRON_2.0_Connect.apk` | 26.87 MB | `079C0632E8900CC4AC059C5DE9D67ED7705481C2F113945BC3BA444A49D62499` |
| **JARVIS 2.0** | Windows (x64) | `JARVIS-2.0-Windows-x64.zip` | 228.7 MB | `22B9E290946A0EB8D862F065404541664DF27B19B038C42FF4AA6AA5BAF0CB6C` |
| **JARVIS 2.0 Phone** | Android | `JARVIS-release.apk` | 94.82 MB | `55EBF0D2A2D3B1F0E48F42754FF98443D66F76F67CC6BC2936A6985D6981E001` |
| **F.R.I.D.A.Y. AI** | Windows (x64) | `FRIDAY_AI_v1.0_Windows.zip` | 253.0 MB | `DD3FFFC791D0D0FDFC371D365AA7167D26D7B918443AA9683BB61DD2EAE4C78B` |

### 🔍 How to Verify Download Checksums

**Windows (PowerShell):**
```powershell
Get-FileHash -Path ".\ULTRON_2.0_Windows_x64.zip" -Algorithm SHA256
```

**macOS / Linux:**
```bash
sha256sum ULTRON_2.0_Windows_x64.zip
```

---

## 🗄️ Large Binary Hosting Advisory

* **Android APKs** (`ULTRON_2.0_Connect.apk` at 26.87 MB and `JARVIS-release.apk` at 94.82 MB) are included inside `public/releases/` and exported to `out/releases/`.
* **Windows ZIP archives** (228 MB – 400 MB) exceed the standard 25 MB/file limit of static hosts and 100 MB Git/Vercel thresholds.
* For production web hosting, upload the 3 Windows ZIPs to **GitHub Releases**, **Cloudflare R2**, or **Google Drive**, and update their `downloadUrl` properties in `src/lib/releases.ts`.

---

## 🛠️ Local Development & Scripts

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:3000)
npm run dev

# Full production build (Next.js App Router for Vercel / Node)
npm run build

# Static export build (generates out/ folder for Netlify)
npm run export

# Type checking
npm run typecheck

# Linting
npm run lint
```

---

## 🗺️ Website Architecture & Routes

```
src/
├── app/
│   ├── page.tsx                  # Cinematic interactive journey with canvas FX & HUD
│   ├── downloads/page.tsx        # Official Download Centre with platform filters & checksums
│   ├── ecosystem/page.tsx        # 5-app directory & architecture pairing maps
│   ├── products/[slug]/page.tsx  # Dedicated pages for each app + download widgets
│   ├── about/page.tsx            # Founders, mission statement & official brand badge
│   ├── lab-notes/page.tsx        # Technical research logs & engineering notes
│   ├── feedback/page.tsx         # Direct founder contact & social channels
│   ├── privacy/page.tsx          # Honest privacy policy & data practices
│   ├── not-found.tsx             # Cinematic 404 with HUD error telemetry
│   ├── layout.tsx                # Root layout with page transition shaders
│   ├── sitemap.ts                # Dynamic XML sitemap generator
│   ├── robots.ts                 # Production robots.txt
│   └── manifest.ts               # Progressive Web App manifest
├── components/
│   ├── downloads/                # DownloadCenter interactive filter & hash verification
│   ├── fx/                       # Canvas particle field, ArcReactorCanvas, DataStreamCanvas, PageTransition
│   ├── journey/                  # Three.js WebGL orbit journey & static fallback
│   ├── seo/                      # JSON-LD structured data (SoftwareApplication, Organization)
│   └── ui/                       # Neon badges, HUD frames, interactive cards, magnetic CTA buttons
└── lib/
    ├── releases.ts               # Single verified release manifest with SHA-256 hashes
    ├── products.ts               # Single source of truth for all 5 product specifications
    ├── site.ts                   # Brand constants, navigation links & verified socials
    └── seo.ts                    # Dynamic OpenGraph, Twitter card & metadata helpers
```

---

## 👥 Leadership & Identity

* **Zaid Uddin** — CEO & Founder
* **Idrees Uddin** — Co-founder
* **Tagline**: *Build More. Grow Together.*
* **Hero Headline**: *THE FUTURE IS BUILT. NOT WAITED FOR.*
* **Official Socials**:
  * Instagram: [@growthguild_189](https://www.instagram.com/growthguild_189/)
  * YouTube: [@growthguildlabs189](https://youtube.com/@growthguildlabs189)
  * Threads: [@growthguild_189](https://www.threads.com/@growthguild_189/)
  * Facebook: [Growth Guild Labs Page](https://www.facebook.com/share/19MHYoVmAh/)
