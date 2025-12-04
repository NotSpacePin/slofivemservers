# Vercel Deployment - Complete Step-by-Step Guide

This guide walks you through deploying your FiveM website to Vercel with screenshots descriptions and detailed instructions.

## Prerequisites

Before starting, make sure you have:
- ✅ Your project folder at `C:\Users\rokhl\Desktop\TestTest`
- ✅ Internet connection
- ✅ A free email address (Gmail, Outlook, etc.)

---

## Step 1: Install Node.js

Node.js is required to use Vercel CLI.

### Instructions:
1. Go to: https://nodejs.org/
2. Click on **"LTS"** (Long Term Support) version - it's the stable one
3. Download the Windows installer
4. Run the installer and click **"Next"** through all steps
5. Choose default options and complete installation
6. **Restart your computer** (important!)

### Verify Installation:
Open Command Prompt and type:
```bash
node --version
npm --version
```

You should see version numbers. If not, restart your computer and try again.

---

## Step 2: Create a Vercel Account

### Instructions:
1. Go to: https://vercel.com/signup
2. Choose **"Continue with GitHub"** (easiest) or use email
   - If using GitHub: Create a GitHub account first
   - If using email: Just enter your email
3. Verify your email (check spam folder!)
4. Done! You now have a Vercel account

---

## Step 3: Create a GitHub Repository (Optional but Recommended)

GitHub makes updates easier. Skip this if you want to deploy without GitHub.

### If you want to use GitHub (Recommended):
1. Go to: https://github.com/signup
2. Create an account with email
3. After login, click **"+"** icon (top right) → **"New repository"**
4. Name it: `fivem-slovenian-servers`
5. Choose **"Public"**
6. Click **"Create repository"**
7. You'll see instructions - follow them to upload your files

**Or use Git from Command Prompt:**
```bash
cd C:\Users\rokhl\Desktop\TestTest

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/fivem-slovenian-servers.git
git branch -M main
git push -u origin main
```

---

## Step 4: Install Vercel CLI

The Vercel CLI is a tool that lets you deploy from your computer.

### Instructions:

1. Open **Command Prompt** (Press `Win + R`, type `cmd`, press Enter)

2. Copy and paste this command:
```bash
npm install -g vercel
```

3. Press **Enter** and wait for installation (2-3 minutes)

4. When done, you'll see: `added X packages`

5. Verify installation:
```bash
vercel --version
```

You should see a version number like `v33.0.0` or similar.

---

## Step 5: Deploy Your Website

Now for the exciting part - deploying your site!

### Instructions:

1. Open **Command Prompt**

2. Navigate to your project folder:
```bash
cd C:\Users\rokhl\Desktop\TestTest
```

3. Run the Vercel deploy command:
```bash
vercel
```

4. **First Time Only** - You'll be asked to login:
   - It opens a browser window
   - Click **"Continue"** 
   - Approve access
   - Return to Command Prompt

5. Answer the setup questions:
   ```
   ? Set up and deploy "C:\Users\rokhl\Desktop\TestTest"? (Y/n) 
   → Press Y
   
   ? Which scope should contain your project? 
   → Select your account name
   
   ? Link to existing project? (y/N) 
   → Press N (first deployment)
   
   ? What's your project's name? 
   → Type: fivem-slovenian-servers
   
   ? In which directory is your code located? 
   → Press Enter (uses current directory)
   
   ? Want to modify these settings? (y/N) 
   → Press N
   ```

6. Wait 30-60 seconds for deployment

7. **SUCCESS!** You'll see:
```
✅ Production: https://fivem-slovenian-servers.vercel.app
✅ Inspect: https://vercel.com/...
```

**Copy that URL and open it in your browser!** Your website is now LIVE! 🎉

---

## Step 6: Test Your Live Website

Visit the URL Vercel gave you. You should see:
- ✅ Your FiveM website
- ✅ Demo servers displaying (this is normal!)
- ✅ Navigation working
- ✅ Styles loaded correctly

If something looks broken:
- Clear browser cache (Ctrl + Shift + Delete)
- Try a different browser
- Check the console (F12) for errors

---

## Step 7: Set Up a Custom Domain (Optional)

Want `yourdomainname.com` instead of `vercel.app`? Follow this:

### Buy a Domain:
1. Go to: https://www.namecheap.com (cheapest)
   - Or: Google Domains, GoDaddy, etc.
2. Search for domain you want (e.g., `slovenske-fivem-serverje.com`)
3. Add to cart and checkout (usually $0.88 - $12/year)
4. Note your **nameservers** (usually default is fine)

### Connect Domain to Vercel:
1. Open: https://vercel.com/dashboard
2. Select your project (`fivem-slovenian-servers`)
3. Go to **Settings** → **Domains**
4. Click **"Add Domain"**
5. Enter your domain name
6. Follow the DNS instructions (usually just 1-2 records to add)
7. Wait 5-30 minutes for it to work

**Your custom domain is now live!** 🌐

---

## Step 8: Future Updates

### If using GitHub (Recommended):
```bash
# Make changes to your files locally
# Then:
git add .
git commit -m "Update description"
git push origin main

# Vercel automatically deploys! ✅
```

### If not using GitHub:
```bash
# Make changes locally
# Then run:
vercel --prod

# Vercel updates your live site! ✅
```

---

## ⚠️ Troubleshooting

### "npm not found"
- You didn't install Node.js, or
- You didn't restart after installation
- **Solution:** Restart computer, then try again

### "Vercel command not found"
- CLI didn't install properly
- **Solution:** Run `npm install -g vercel` again

### Website looks broken/styles missing
- Cache issue
- **Solution:** Press `Ctrl + Shift + Delete` → Clear cache
- Try incognito/private window

### "Cannot find module 'vercel'"
- Permissions issue
- **Solution:** Run Command Prompt as Administrator

### Live servers not showing (only demo servers)
- This is **NORMAL** during first deployment!
- FiveM API sometimes blocks requests on new domains
- **Solution:** Wait 24 hours, or try deploying with GitHub integration (more reliable)

### Domain not working after 30 minutes
- DNS propagation takes time
- **Solution:** Wait up to 24 hours, clear browser cache

---

## 📊 What You Now Have

After completing Step 5, you have:

| Feature | Status |
|---------|--------|
| Website Online | ✅ Live 24/7 |
| HTTPS/SSL | ✅ Free & Automatic |
| Custom Domain | ⏳ Optional (Step 7) |
| Email | ❌ (Requires separate setup) |
| Live Server Data | ✅ Works on production |
| Auto-Deploys | ✅ If using GitHub |
| Cost | ✅ FREE |
| Bandwidth | ✅ Unlimited |

---

## 🚀 Advanced: GitHub Integration (Easier Updates)

If you set up GitHub in Step 3, Vercel can auto-deploy:

1. Go to: https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Git**
4. Connect your GitHub account
5. Select your repository

Now every time you push to GitHub, Vercel automatically updates your site!

```bash
# Easy workflow:
git push origin main  # Update goes live automatically!
```

---

## 🎯 Summary

**You've successfully:**
1. ✅ Created Vercel account
2. ✅ Installed Node.js & Vercel CLI
3. ✅ Deployed your website to the internet
4. ✅ Got a free `vercel.app` domain
5. ✅ Website is LIVE with HTTPS security

**Optional:**
- Set up custom domain (Step 7)
- Add GitHub integration (Advanced section)
- Add Google Analytics

---

## 💡 Next Steps

1. **Share your URL** with friends:
   - `https://fivem-slovenian-servers.vercel.app`

2. **Add to Google Search Console** for SEO:
   - Go to: https://search.google.com/search-console
   - Add your domain to get found on Google

3. **Monitor traffic** with Google Analytics:
   - Go to: https://analytics.google.com
   - Add your domain
   - Track visitor stats

4. **Update regularly** with new servers/news to keep people coming back!

---

## ✉️ Need Help?

- **Vercel docs:** https://vercel.com/docs
- **Vercel support:** https://vercel.com/support
- **Node.js issues:** https://nodejs.org/en/docs/

**Congratulations! Your FiveM website is now LIVE! 🎉**
