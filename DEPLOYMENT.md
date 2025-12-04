# FiveM Slovenian Servers Website - Deployment Guide

This guide explains how to publish your FiveM server listing website to the internet.

## 📋 What You Have

Your website consists of:
- **Static HTML files** (`domov.html`, `novice.html`)
- **CSS styling** (`css/styles.css`)
- **JavaScript** (`js/servers.js`) - Fetches live server data
- **Assets** (`slike/` - images/logos)

**No backend/database needed** - Everything runs in the browser!

---

## 🚀 Hosting Options (Easiest to Most Control)

### **Option 1: Vercel (Recommended - FREE, Easiest)**

**Why Vercel?**
- ✅ Free hosting with custom domain support
- ✅ Automatic HTTPS (security)
- ✅ Fast CDN worldwide
- ✅ Perfect for static sites like yours
- ✅ GitHub integration (auto-deploy on push)

**Steps:**
1. Create free account: https://vercel.com/signup
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. From your project folder, run:
   ```bash
   vercel
   ```
4. Follow the prompts (choose your project name, etc.)
5. Your site goes live instantly at: `yourname.vercel.app`

**Getting a Custom Domain:**
- Buy domain from: Namecheap, GoDaddy, or Google Domains
- In Vercel dashboard → Add Domain → Follow DNS instructions

---

### **Option 2: GitHub Pages (FREE, Very Simple)**

**Why GitHub Pages?**
- ✅ Completely free
- ✅ Easy if you already use GitHub
- ✅ Works great for static sites
- ⚠️ URL is: `yourusername.github.io/fivem-servers`

**Steps:**
1. Create GitHub account: https://github.com/signup
2. Create new repository called `fivem-servers`
3. Upload your files (drag & drop in browser)
4. Go to Settings → Pages → Enable GitHub Pages
5. Your site is live at: `yourusername.github.io/fivem-servers`

**Getting a Custom Domain:**
- Buy domain, point to GitHub Pages via DNS
- In repo Settings → Pages → Add custom domain

---

### **Option 3: Netlify (FREE, Very User-Friendly)**

**Why Netlify?**
- ✅ Free tier is excellent
- ✅ Drag & drop deployment
- ✅ Great for static sites
- ✅ Built-in form handling (if you add forms)

**Steps:**
1. Go to: https://app.netlify.com/signup
2. Create account (free)
3. Drag & drop your project folder
4. Site goes live in seconds at: `randomname.netlify.app`
5. Add custom domain in Site Settings

---

### **Option 4: Traditional Web Host (Paid, Most Control)**

**Popular hosts with cheap static hosting:**
- Bluehost ($2.95/mo) - https://www.bluehost.com
- Hostinger ($2.99/mo) - https://www.hostinger.com
- SiteGround ($3/mo) - https://www.siteground.com

**Steps:**
1. Register account and buy hosting
2. Use FTP or File Manager to upload files
3. Set `domov.html` as home/index page
4. Your domain is ready

---

## 🔧 Before Deploying

### **1. Rename home page (Optional but recommended)**

Most hosts expect `index.html`. Either:
- Rename `domov.html` → `index.html`, OR
- Keep both files, but tell hosting to use `domov.html` as home

### **2. Test locally first**

Open `domov.html` in your browser to verify:
- Navigation works
- Styles load correctly
- Server list displays (will show demo servers during dev)

### **3. Check all links are relative**

Your current links are good:
```html
<link rel="stylesheet" href="css/styles.css">  ✅ Correct
<script src="js/servers.js"></script>          ✅ Correct
```

---

## 🌐 Step-by-Step: Deploy with Vercel (Easiest)

**Most Recommended for Beginners:**

```bash
# 1. Install Node.js if you don't have it
# Download from: https://nodejs.org/

# 2. Install Vercel CLI
npm install -g vercel

# 3. Navigate to your project folder
cd C:\Users\rokhl\Desktop\TestTest

# 4. Deploy!
vercel

# 5. Choose:
#    - Project name: fivem-slovenian-servers
#    - Set as production: Yes
#    - Your site is live! 🎉
```

**That's it!** Your site is now on the internet with HTTPS and a free domain.

---

## 📱 For Domain + Email

**Buy a domain:**
- Namecheap.com (cheap, $0.88 first year)
- Google Domains ($12/year)
- Your hosting provider

**Connect to Vercel/Netlify:**
- Add domain in dashboard
- Update DNS records (instructions provided)
- Wait 5-30 minutes for propagation

---

## 🔄 Future Updates

### **With Vercel (Git-based):**
```bash
# Make changes locally
# Commit & push to GitHub
git push origin main

# Vercel auto-deploys!
```

### **With Netlify (Git-based):**
- Push to GitHub, Netlify deploys automatically

### **With Traditional Host:**
- Upload new files via FTP/File Manager
- Changes live immediately

---

## 🚨 CORS Fix for Live Server Data

**Important:** When deployed on a server, the live FiveM API will work automatically!

Currently you see demo servers because of CORS restrictions during development. Once deployed:
- Direct API calls work ✅
- Real server data displays ✅
- Auto-refresh works ✅

No code changes needed.

---

## 💡 Pro Tips

1. **SEO**: Update `<title>` and add meta description:
   ```html
   <meta name="description" content="Biggest Slovenian FiveM servers list">
   ```

2. **Analytics**: Add Google Analytics to track visitors:
   - Sign up: https://analytics.google.com
   - Add tracking code to `<head>`

3. **Custom domain email**: Use:
   - Vercel + Sendgrid (free tier)
   - Netlify + FormSubmit (free)
   - Hosting provider email

4. **Maintenance**: Add news/server updates to `novice.html` regularly for engagement

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| "Cannot find file" | Check all file paths are relative (`./`, not `C:/...`) |
| Styles not loading | Check file permissions and URL paths in HTML |
| Demo servers showing | This is normal! Live API works when deployed on server |
| Custom domain not working | Wait 24 hours for DNS propagation |

---

## 📞 Support

- **Vercel Support**: https://vercel.com/support
- **Netlify Support**: https://docs.netlify.com/
- **GitHub Pages Help**: https://docs.github.com/en/pages

---

**You're ready to go live!** Choose Option 1 (Vercel) if unsure - it's the easiest. 🚀
