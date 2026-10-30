# Growth Guild Labs — Official Website

> **"The future is built. Not waited for."**
>
> Official website for **Growth Guild Labs** — an independent technology lab building five working AI assistants and companion applications, founded by **Zaid Uddin** and co-founded by **Idrees Uddin**.

---

## 🚀 Deployment — Netlify

This project is deployed exclusively on **Netlify** as a static export.

### Option A — Recommended: GitHub → Netlify (Auto-Deploy)

1. Push this repository to GitHub.
2. Log in to [Netlify](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Connect your GitHub account and select this repository.
4. Configure the build settings:
   - **Build command**: `npm run export`
   - **Publish directory**: `out`
5. Under **Environment variables**, add:
   - `NEXT_PUBLIC_SITE_URL` → your production domain (e.g. `https://growthguildlabs.netlify.app`)
6. Click **Deploy site**. Netlify will build and publish automatically on every push.

> Node.js version `20` is configured automatically via `netlify.toml`.

---

### Option B — Manual: Netlify Drop (Drag & Drop)

1. In your terminal, generate the production export:
   ```powershell
   npm run export
   ```
2. Open File Explorer and navigate to the project folder:
   ```
   c:\Users\Admin\Downloads\growth-guild-labs\
   ```
3. Locate the **`out`** folder inside the project.
4. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
5. Drag and drop the **`out`** folder directly onto the Netlify Drop page.

> ⚠️ Upload **only the `out` folder**. Do **not** upload `.next`, `public`, `src`, or the root project folder.

---

## 📦 Verified Application Releases

All 5 applications have confirmed, functional releases compiled by Growth Guild Labs. The Download Centre (`/downloads`) provides direct download cards, verified SHA-256 checksums, and installation guides.

| Application | Platform | Package File | Size | Verified SHA-256 Checksum |
|---|---|---|---|---|
| **ULTRON 2.0** | Windows x64 | `ULTRON_2.0_Windows_x64.zip` | 400.3 MB | `CF3314C87126BE06096AAF7FAEA91D7DEB54B664F7F9007D4EFFF14271F91137` |
| **ULTRON 2.0 Connector** | Android | `ULTRON_2.0_Connect.apk` | 26.87 MB | `079C0632E8900CC4AC059C5DE9D67ED7705481C2F113945BC3BA444A49D62499` |
| **JARVIS 2.0** | Windows x64 | `JARVIS-2.0-Windows-x64.zip` | 228.7 MB | `22B9E290946A0EB8D862F065404541664DF27B19B038C42FF4AA6AA5BAF0CB6C` |
| **JARVIS 2.0 Phone** | Android | `JARVIS-release.apk` | 94.82 MB | `55EBF0D2A2D3B1F0E48F42754FF98443D66F76F67CC6BC2936A6985D6981E001` |
| **F.R.I.D.A.Y. AI** | Windows x64 | `FRIDAY_AI_v1.0_Windows.zip` | 253.0 MB | `DD3FFFC791D0D0FDFC371D365AA7167D26D7B918443AA9683BB61DD2EAE4C78B` |

### 🔍 Verify a Checksum

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

- **Android APKs** (`ULTRON_2.0_Connect.apk` — 26.87 MB, `JARVIS-release.apk` — 94.82 MB) are included in `public/releases/` and exported to `out/releases/`. These are directly downloadable from the live site.
- **Windows ZIP archives** (228 MB – 400 MB) exceed Netlify's 25 MB per-file limit for static hosting. They must be hosted externally:
  - Upload the 3 Windows ZIPs to **GitHub Releases**, **Cloudflare R2**, or **Google Drive**.
  - Update their `downloadUrl` values in [`src/lib/releases.ts`](./src/lib/releases.ts).
  - Change `hostingStatus` from `"mirror_pending"` to `"available"` in the same file.
- Until external hosting is configured, the Download Centre shows an honest **"Public Mirror Pending"** state for those 3 packages — no fake buttons.

---

## 🛠️ Local Development & Scripts

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:3000)
npm run dev

# Static export — generates the out/ folder for Netlify deployment
npm run export

# TypeScript type checking
npm run typecheck

# ESLint
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

### All Generated Routes (19 total)

| Route | File in `out/` |
|---|---|
| `/` | `out/index.html` |
| `/about` | `out/about/index.html` |
| `/downloads` | `out/downloads/index.html` |
| `/ecosystem` | `out/ecosystem/index.html` |
| `/lab-notes` | `out/lab-notes/index.html` |
| `/feedback` | `out/feedback/index.html` |
| `/privacy` | `out/privacy/index.html` |
| `/products/ultron-2` | `out/products/ultron-2/index.html` |
| `/products/ultron-connector` | `out/products/ultron-connector/index.html` |
| `/products/jarvis-2` | `out/products/jarvis-2/index.html` |
| `/products/jarvis-phone` | `out/products/jarvis-phone/index.html` |
| `/products/friday-ai` | `out/products/friday-ai/index.html` |
| `/404` | `out/404/index.html` |
| (+ manifests, sitemap, robots, icons) | Static files at root of `out/` |

---

## ⚙️ Netlify Configuration (`netlify.toml`)

```toml
[build]
  command = "npm run export"
  publish = "out"

[build.environment]
  NODE_VERSION = "20"
```

Security headers, cache rules, and redirect fallbacks are pre-configured in `netlify.toml`.

---

## 👥 Leadership & Identity

- **Zaid Uddin** — CEO & Founder
- **Idrees Uddin** — Co-founder
- **Tagline**: *Build More. Grow Together.*
- **Hero Headline**: *THE FUTURE IS BUILT. NOT WAITED FOR.*
- **Official Socials**:
  - Instagram: [@growthguild_189](https://www.instagram.com/growthguild_189/)
  - YouTube: [@growthguildlabs189](https://youtube.com/@growthguildlabs189)
  - Threads: [@growthguild_189](https://www.threads.com/@growthguild_189/)
  - Facebook: [Growth Guild Labs Page](https://www.facebook.com/share/19MHYoVmAh/)

---

## 🛡️ Brand Palette

| Token | Hex | Usage |
|---|---|---|
| Background | `#03090D` | Page background |
| Cyan | `#00E5FF` | Primary accent, ULTRON brand |
| Green | `#39FF65` | JARVIS brand, success states |
| Foreground | `#F3FAFC` | Body text |

**Fonts:** Sora (display), Inter (body), JetBrains Mono (monospace)
