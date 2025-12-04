# GitHub + Vercel Quick Reference

## 🚀 Quick Setup (5 minutes)

### 1. Create GitHub Account
https://github.com/signup → Verify email

### 2. Create Repository
- Click "+" → "New repository"
- Name: `fivem-slovenian-servers`
- Click "Create repository"

### 3. Upload Files
- Click "Add file" → "Upload files"
- Drag your project folder
- Click "Commit changes"

### 4. Connect to Vercel
- Go to https://vercel.com/dashboard
- Click "Add New" → "Project"
- Click "Import Git Repository"
- Select your GitHub repo
- Click "Deploy"

**Done!** Site updates automatically when you push to GitHub ✅

---

## 📝 Daily Workflow

Every time you update your website:

```bash
# 1. Open Command Prompt
# 2. Go to project folder
cd C:\Users\rokhl\Desktop\TestTest

# 3. Push changes to GitHub
git add .
git commit -m "Your description here"
git push origin main

# 4. Watch deployment on:
# https://vercel.com/dashboard
```

---

## 📊 Commands You'll Use

| Command | Purpose |
|---------|---------|
| `git status` | See what changed |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save changes locally |
| `git push origin main` | Upload to GitHub & deploy |
| `git pull origin main` | Download latest changes |
| `git log` | See commit history |

---

## ✅ What's Automatic Now

- ✅ Every `git push` triggers deployment
- ✅ Website updates in 2-3 minutes
- ✅ No need to run `vercel --prod` anymore
- ✅ All changes tracked in Git history
- ✅ Easy to revert if something breaks

---

## 🎯 Example: Update News

### You Want To: Add a new news item

```bash
# 1. Edit novice.html in VS Code
#    (add new <article> section)

# 2. Save file

# 3. Open Command Prompt
cd C:\Users\rokhl\Desktop\TestTest

# 4. Check changes
git status
# Shows: novice.html modified

# 5. Commit and push
git add .
git commit -m "Add news about new server opening"
git push origin main

# 6. Website updates automatically! 🎉
```

---

## 🔗 Important Links

- **Your GitHub:** https://github.com (login required)
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Your Deployed Site:** https://fivem-slovenian-servers.vercel.app
- **Deployment History:** https://vercel.com/dashboard → Click project → Deployments

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---------|-----|
| Forget to commit | `git add .` then `git commit -m "..."` |
| Don't push to GitHub | `git push origin main` |
| Wrong folder | `cd C:\Users\rokhl\Desktop\TestTest` |
| Typo in message | Doesn't matter - message only shows in history |
| Want to undo last commit | `git revert HEAD` |

---

## 📞 Need Help?

- Check Git status: `git status`
- See what you changed: `git diff`
- View commit history: `git log`
- Read error message carefully - usually tells you what's wrong!

---

**You're all set! Push with confidence!** 🚀
