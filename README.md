# Pham Mai Linh — Personal Portfolio Website
**Finance • Analytics • Leadership**

An executive personal portfolio website designed for **Pham Mai Linh**, Banking & International Finance student at Foreign Trade University (FTU) and President of the Future Bankers Network (FBN–FTU).

- **Custom Domain:** `anthasialinh.id.vn`
- **LinkedIn Profile:** [Mai Linh Phạm](https://www.linkedin.com/in/mai-linh-ph%E1%BA%A1m-15ab65359/)

---

## 🌟 Highlights & Features

- **Executive Aesthetic:** Styled with deep navy (`#050811`), champagne gold (`#D4AF37`), and emerald accents tailored for Banking, Corporate Finance, and Financial Analytics.
- **Dark & Light Mode:** Toggle with automatic system preference detection and `localStorage` persistence.
- **Pre-Configured Domain & SEO:** Full OpenGraph tags, canonical URLs, and `CNAME` file configured for `anthasialinh.id.vn`.
- **Integrated LinkedIn:** Direct connections to your verified LinkedIn profile.
- **Structured Sections:**
  1. **Hero Section:** High-impact introduction, credential badge, and instant CTA buttons (Explore Work, Download CV, Connect on LinkedIn).
  2. **Executive Overview Badge:** Domain tags, core analytics stack, and academic leadership summary.
  3. **About Me:** Philosophy ("Understanding Finance Beyond the Numbers") with the 3 pillars: Critical Inquiry, Quantitative Precision, and Execution Leadership.
  4. **Leadership & Professional Experience:** Dedicated coverage of the Future Bankers Network (President & Head of Specialization Department, The Banker 2026, Investment Banking Talkshow).
  5. **Skills & Toolkit:** Interactive categorized grid with real-time filter tabs (All, Financial Analysis, Data & Quantitative, Business & Leadership).
  6. **Selected Projects:** Ready-to-customize case study cards tailored to credit risk, financial modeling, and competition architecture.
  7. **Education & Continuous Learning:** Foreign Trade University (FTU), Data Science in Economics and Business K09, and areas of continuous development.
  8. **Contact & Connect:** Interactive email 1-click copy with toast notifications, social links, and message form.
  9. **CV Preview Modal:** Built-in modal for CV requests and preview downloads.

---

## 🚀 How to Run Locally

Because this project is built with standard HTML5, Tailwind CSS, Lucide Icons, and modern Vanilla JavaScript, **no installation or build steps are required**!

1. Open File Explorer to:
   `c:\Users\antha\Documents\antigravity\joyful-turing`
2. Double click on `index.html` to open it directly in your browser (Google Chrome, Microsoft Edge, etc.).

---

## 🌐 How to Connect Your Domain (`anthasialinh.id.vn`)

A `CNAME` file with `anthasialinh.id.vn` has already been added to your project. Here is how to configure your DNS settings with your domain registrar (e.g., Tenten, Mắt Bão, iNET, PA Việt Nam):

### Option A: Using GitHub Pages (Free & Recommended)

1. **Push your code to GitHub:**
   - Create a repository on GitHub (e.g., `anthasialinh.github.io` or `portfolio`).
   - Push all files from this directory to the repository.
2. **Enable GitHub Pages:**
   - Go to your repository on GitHub -> **Settings** -> **Pages**.
   - Source: Deploy from a branch -> Branch: `main` (or `master`) -> Folder: `/ (root)`.
   - Under **Custom domain**, enter: `anthasialinh.id.vn` and click **Save**.
   - Check **Enforce HTTPS**.
3. **Configure DNS Records at your domain registrar:**
   Log into where you purchased `anthasialinh.id.vn` (e.g. Tenten, iNET, Mat Bao) and add these DNS records:

   | Type | Host / Name | Value / Points to | TTL |
   | :--- | :--- | :--- | :--- |
   | **A** | `@` | `185.199.108.153` | 3600 (or Default) |
   | **A** | `@` | `185.199.109.153` | 3600 |
   | **A** | `@` | `185.199.110.153` | 3600 |
   | **A** | `@` | `185.199.111.153` | 3600 |
   | **CNAME** | `www` | `<your-github-username>.github.io` | 3600 |

---

### Option B: Using Vercel / Netlify (Zero Configuration)

If you prefer a 1-click visual deployment:
1. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
2. Connect your GitHub repository (or simply drag and drop this project folder into Netlify Drop).
3. In **Domain Management**, add `anthasialinh.id.vn`.
4. Follow the 2 DNS records shown on your screen (usually 1 `A` record and 1 `CNAME` record).
5. SSL/HTTPS will be activated automatically for free within 5–10 minutes!
