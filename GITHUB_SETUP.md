# GitHub + Vercel Integration Guide

This guide shows you how to set up GitHub with Vercel for **automatic website updates**.

## Why Use GitHub + Vercel Together?

**Without GitHub:**
```bash
# Every change requires:
vercel --prod
# (Manual command each time)
```

**With GitHub Integration:**
```bash
# Just push to GitHub:
git push origin main
# Vercel automatically deploys! ✅
```

---

## Part 1: Create GitHub Account

### Step 1: Sign Up

1. Go to: https://github.com/signup
2. Enter your **email address**
3. Create a **password** (make it strong)
4. Choose a **username** (e.g., `fivem-admin-sl`)
5. Click **"Create account"**
6. Verify email (check your inbox!)
7. Choose **"Free"** plan
8. Click **"Skip"** for optional setup

**You now have a GitHub account!** ✅

---

## Part 2: Create a Repository

A repository is like a folder on GitHub where you store your code.

### Step 1: Create New Repository

1. Log in to GitHub: https://github.com
2. Click **"+"** icon (top right)
3. Click **"New repository"**

### Step 2: Fill in Details

Fill in these fields:

```
Repository name: fivem-slovenian-servers
Description: Slovenian FiveM server listing website
Visibility: Public (anyone can see, but only you can change)
```

### Step 3: Initialize Repository

Check these boxes:
- ☑️ **Add a README file**
- ☐ (Skip .gitignore - we already have one)
- ☐ (Skip license for now)

### Step 4: Create

Click **"Create repository"** button

**Your GitHub repository is created!** ✅

---

## Part 3: Upload Your Project to GitHub

### Option A: Using GitHub Website (Easiest)

1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop your project folder contents:
   ```
   domov.html
   novice.html
   css/
   js/
   slike/
   .gitignore
   DEPLOYMENT.md
   VERCEL_GUIDE.md
   README.md
   ```
3. Click **"Commit changes"**
4. Done! ✅

### Option B: Using Git Command Line (More Control)

1. Open **Command Prompt**

2. Navigate to your project:
```bash
cd C:\Users\rokhl\Desktop\TestTest
```

3. Initialize Git:
```bash
git init
```

4. Add all your files:
```bash
git add .
```

5. Create your first commit:
```bash
git commit -m "Initial commit - FiveM website"
```

6. Connect to your GitHub repository (copy from GitHub website):
```bash
git remote add origin https://github.com/YOUR_USERNAME/fivem-slovenian-servers.git
```

7. Rename branch to `main`:
```bash
git branch -M main
```

8. Push to GitHub:
```bash
git push -u origin main
```

**Your project is now on GitHub!** ✅

---

## Part 4: Connect GitHub to Vercel

Now we tell Vercel to watch your GitHub repository and auto-deploy!

### Step 1: Go to Vercel Dashboard

1. Open: https://vercel.com/dashboard
2. Log in if needed

### Step 2: Import Your Project

1. Click **"Add New..."** button
2. Click **"Project"**
3. Click **"Import Git Repository"** (not "Clone Template")

### Step 3: Connect GitHub

1. Click **"GitHub"** button
2. GitHub opens in a new window
3. Click **"Authorize Vercel"**
4. Click **"Install"** (allows Vercel to access your repos)

### Step 4: Select Your Repository

1. Back in Vercel, you'll see your repos
2. Find **"fivem-slovenian-servers"**
3. Click **"Import"**

### Step 5: Configure Project

Leave all settings default:
- **Framework Preset:** Other
- **Root Directory:** ./
- **Build Command:** (leave blank)
- **Output Directory:** (leave blank)

Click **"Deploy"**

**Wait 2-3 minutes...** Your site deploys automatically! ✅

---

## Part 5: Test the Integration

### Make a Small Change

1. Edit `domov.html` in your code editor
2. Change the hero text slightly:
```html
<p>Odkrijte najboljše Slovenske FiveM Strežnike - Igraj zdaj!</p>
```

3. Save the file

### Push to GitHub

Open **Command Prompt**:
```bash
cd C:\Users\rokhl\Desktop\TestTest

git add .
git commit -m "Update hero text"
git push origin main
```

### Watch Vercel Auto-Deploy

1. Go to: https://vercel.com/dashboard
2. Click your project
3. Watch the **"Deployments"** section
4. You'll see:
   - 🟡 Building... (yellow)
   - 🟢 Ready (green) - DONE!

**Your change is LIVE!** ✅

---

## Workflow: Making Updates Going Forward

Now that everything is set up, here's the simple workflow:

### Every Time You Update Your Website:

```bash
# 1. Make changes to your files in VS Code

# 2. Open Command Prompt
# 3. Navigate to project
cd C:\Users\rokhl\Desktop\TestTest

# 4. Check what changed
git status

# 5. Stage changes
git add .

# 6. Commit with a message
git commit -m "Updated server list styling"

# 7. Push to GitHub
git push origin main

# 8. Vercel automatically deploys! 🚀
# Check: https://vercel.com/dashboard
```

---

## Common Commands Reference

### Check status
```bash
git status
```
Shows which files changed

### View recent commits
```bash
git log
```
Shows your commit history

### Undo last commit (if you made a mistake)
```bash
git revert HEAD
```

### Pull latest from GitHub
```bash
git pull origin main
```
(useful if editing from multiple computers)

### Delete a file and commit
```bash
git rm filename.html
git commit -m "Remove old file"
git push origin main
```

---

## 🔐 Git Best Practices

### Good Commit Messages:
```bash
✅ git commit -m "Add news item about server maintenance"
✅ git commit -m "Fix styling bug in server cards"
✅ git commit -m "Update Slovenian keywords for filtering"

❌ git commit -m "stuff"
❌ git commit -m "update"
❌ git commit -m "test"
```

### Commit Frequency:
- Make commits for **each feature or fix**
- Don't wait to commit 10 changes at once
- Makes it easy to undo if something breaks

### Example Good Workflow:
```bash
# Monday: Add news feature
git add .
git commit -m "Add news feed to novice.html"
git push origin main

# Wednesday: Fix styling
git add .
git commit -m "Fix mobile responsive design on news cards"
git push origin main

# Friday: Update server keywords
git add .
git commit -m "Add more Slovenian keywords for server filtering"
git push origin main
```

---

## Deployment Status Page

### Check Your Deployments:
1. Go to: https://vercel.com/dashboard
2. Click your project name
3. See all deployments with:
   - 🟢 Status (Success/Failed)
   - ⏱️ When deployed
   - 📝 Commit message
   - 🔗 Live URL

### If Deployment Fails:
1. Click the failed deployment
2. Click **"Logs"** tab
3. Read error message
4. Fix the issue locally
5. Push again

---

## Multiple Computers

If you work on your website from different computers:

### Before Starting Work:
```bash
git pull origin main
```
This downloads latest changes from GitHub

### After Your Changes:
```bash
git add .
git commit -m "Your message"
git push origin main
```

---

## 🎯 Summary

You now have:

| Feature | Status |
|---------|--------|
| GitHub Account | ✅ |
| GitHub Repository | ✅ |
| Files on GitHub | ✅ |
| Vercel Connected | ✅ |
| Auto-Deploy Setup | ✅ |
| Workflow Learned | ✅ |

### Every push = Automatic deployment! 🚀

---

## 🆘 Troubleshooting

### "fatal: not a git repository"
**Problem:** You're not in a git folder
**Solution:**
```bash
cd C:\Users\rokhl\Desktop\TestTest
git init
```

### "error: src refspec main does not match any"
**Problem:** You haven't made any commits
**Solution:**
```bash
git add .
git commit -m "Initial commit"
```

### "remote origin already exists"
**Problem:** Already set up once
**Solution:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/fivem-slovenian-servers.git
```

### Changes not appearing on website
**Problem:** Vercel deployment still running
**Solution:** Wait 2-3 minutes and refresh browser

### "Authentication failed"
**Problem:** Wrong GitHub password or username
**Solution:** 
- Check your GitHub username: https://github.com/settings/profile
- Use Personal Access Token instead of password (more secure)

---

## Next Steps

1. ✅ Set up GitHub account
2. ✅ Create repository
3. ✅ Upload your project
4. ✅ Connect to Vercel
5. ✅ Make a test update
6. 📝 **Start adding features!**
   - Add more news items
   - Improve styling
   - Add filters to server list
   - Add search functionality

Every change you push will automatically go live! 🎉

---

## 📚 Learn More

- **Git Tutorial:** https://git-scm.com/doc
- **GitHub Guides:** https://guides.github.com/
- **Vercel Deployments:** https://vercel.com/docs/deployments/overview
