# Growth Guild Labs — Official Website

> **"The future is built. Not waited for."**
>
> Official website for **Growth Guild Labs** — an independent technology lab building five working AI assistants and companion applications, founded by **Zaid Uddin** and co-founded by **Idrees Uddin**.

---

## ⚡ Deployment — Vercel

Growth Guild Labs is built with **Next.js 16 (App Router)** and is natively optimized for **Vercel**.

### 📁 Which Folder to Upload to Vercel?

Unlike simple static hosts that take a drag-and-dropped HTML folder, **Vercel is the creator and native platform of Next.js**. It deploys from your **repository root**:

> ### **👉 DEPLOY THE ENTIRE PROJECT ROOT FOLDER**
> ```
> c:\Users\Admin\Downloads\growth-guild-labs\
> ```
> *(Do not upload `.next` or individual subfolders manually. Vercel automatically builds `.next` on its high-speed edge cloud from the root repository files.)*

---

### Method 1 — Recommended: GitHub → Vercel (One-Click Auto-Deploy)

1. Push this project to your GitHub repository:
   ```powershell
   git add .
   git commit -m "feat: next-level cybernetic UI, 3D shaders, live audio & interactive terminal"
   git push origin main
   ```
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..." → "Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects **Next.js** with:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./` (project root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Under **Environment Variables**, optionally add:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-domain.vercel.app`
6. Click **Deploy**. Your site will be live on Vercel's edge network within seconds. Every future push to GitHub will automatically trigger a production deployment.

---

### Method 2 — Direct CLI Deploy: `vercel`

If you have the Vercel CLI installed:

1. Open PowerShell in the project directory:
   ```powershell
   cd "c:\Users\Admin\Downloads\growth-guild-labs"
   ```
2. Run the deployment command:
   ```powershell
   npx vercel
   ```
3. Follow the two prompts:
   - Set up and deploy? `Y`
   - Which scope? Select your personal or team account
   - Link to existing project? `N`
   - Project name? `growth-guild-labs`
   - In which directory is your code located? `./`
4. For production release:
   ```powershell
   npx vercel --prod
   ```

---

## 🚀 Key Interactive Systems

1. **Space & Orbit 3D Shader Journey**: WebGL-powered 5-scene camera journey built with Three.js, procedural atmosphere rims, resonance halos, and particle dust.
2. **Interactive Audio Engine (Web Audio API)**: Real-time procedural audio synthesis for button hovers, command clicks, and soundwave equalizer. Toggle on/off anytime from the header. Zero external MP3/WAV dependencies.
3. **Command Palette (`Ctrl + K` / `Cmd + K`)**: Universal instant search palette to search products, downloads, release manifests, founder bios, and documentation.
4. **Interactive Telemetry Sandbox**: Live typable and clickable console shell on the homepage. Query real-time diagnostics (`status`, `ultron`, `jarvis`, `friday`, `checksums`, `founders`).
5. **Continuous Cyber Tech Ticker**: GPU-accelerated marquee showcasing our real core tech stack (PyQt6, Vosk, Gemini, FastMCP, Jetpack Compose, Three.js).
6. **Verified Social Media Broadcast Hubs**: Interactive cards linking directly to Growth Guild Labs on Instagram, YouTube, Threads, and Facebook.

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

- **Android APKs** (`ULTRON_2.0_Connect.apk` — 26.87 MB, `JARVIS-release.apk` — 94.82 MB) are included inside `public/releases/` and can be downloaded directly from the live site.
- **Windows ZIP archives** (228 MB – 400 MB) are large executable packages with runtime Python/PyQt6 environments. For public mirror distribution, upload them to GitHub Releases, Google Drive, or Cloudflare R2, then update the mirror links in `src/lib/releases.ts`. The UI honestly indicates "Mirror Pending" until a public mirror CDN link is provided.

---

## 🛠️ Local Development & Scripts

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:3000)
npm run dev

# Full production build (Next.js App Router for Vercel)
npm run build

# Static export (generates out/ folder if static files are needed)
npm run export

# TypeScript type checking
npm run typecheck

# ESLint code verification
npm run lint
```

---

## 👥 Leadership & Identity

- **Zaid Uddin** — CEO & Founder (Lead Systems Architect)
- **Idrees Uddin** — Co-founder (Hardware & Gateway Engineering)
- **Tagline**: *Build More. Grow Together.*
- **Hero Headline**: *THE FUTURE IS BUILT. NOT WAITED FOR.*
- **Official Socials**:
  - Instagram: [@growthguild_189](https://www.instagram.com/growthguild_189/)
  - YouTube: [@growthguildlabs189](https://youtube.com/@growthguildlabs189)
  - Threads: [@growthguild_189](https://www.threads.com/@growthguild_189/)
  - Facebook: [Growth Guild Labs Page](https://www.facebook.com/share/19MHYoVmAh/)
