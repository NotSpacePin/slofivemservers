# 🇸🇮 Slovenian FiveM Servers Website

A modern, clean website showcasing live Slovenian FiveM servers and news.

## Features

✨ **Live Server Listing** - Real-time data from FiveM server network
📱 **Responsive Design** - Works on desktop, tablet, and mobile
🎨 **Modern UI** - Dark theme with orange accents
⚡ **Fast Loading** - No backend needed, pure client-side
🔄 **Auto-Refresh** - Server list updates every 60 seconds
📋 **News Section** - Share important server updates

## 📂 Project Structure

```
├── domov.html          # Home page (server listing)
├── novice.html         # News page
├── css/
│   └── styles.css      # All styling
├── js/
│   └── servers.js      # Fetch and display live servers
├── slike/              # Images and logos
│   ├── fivem_logo.png
│   └── fivem_logo.ico
├── DEPLOYMENT.md       # How to publish this website
└── README.md           # This file
```

## 🚀 Quick Start

### Local Development
1. Open `domov.html` in your web browser
2. Site shows demo servers (live API restricted during local development)
3. Navigate to `novice.html` for news section

### Deploy Online
See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete hosting instructions.

**Quickest option: Vercel**
```bash
npm install -g vercel
vercel
```
Your site is live in 2 minutes with HTTPS and custom domain support!

## 🔌 How Live Server Data Works

`js/servers.js` automatically:
1. Fetches server list from FiveM API when deployed
2. Filters for Slovenian servers (by name/description keywords)
3. Sorts by player count (most popular first)
4. Displays with player counts and connection info
5. Refreshes every 60 seconds

**Demo servers** display during local development.  
**Real servers** display when deployed to production.

## 📝 Customization

### Change Navigation Links
Edit both HTML files:
```html
<a href="domov.html">Domov</a>
<a href="novice.html">Novice</a>
```

### Update Slovenian Keywords
Edit `js/servers.js`:
```javascript
const SLOVENIAN_KEYWORDS = ['slovenia', 'slovenija', ...];
```

### Modify Colors
Edit `css/styles.css`:
```css
/* Primary orange color */
color: #ff6b35;

/* Dark background */
background-color: #0f0f0f;
```

### Add More News Items
Edit `novice.html` and add more `<article class="news-item">` blocks.

## 🎯 SEO Tips

For better Google rankings:
1. Add meta description to `<head>`:
   ```html
   <meta name="description" content="Find the best Slovenian FiveM servers">
   ```

2. Add Google Analytics (DEPLOYMENT.md has instructions)

3. Update regularly with fresh news

4. Include Slovenian keywords in descriptions

## 📊 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📄 License

Free to use and modify. Created for Slovenian FiveM community.

## 🤝 Contributing

Want to improve this? You can:
- Add new features (search, filters, favorites)
- Improve styling
- Translate to other languages
- Add more Slovenian server sources

## 📞 Support

For deployment help: See [DEPLOYMENT.md](./DEPLOYMENT.md)

For code questions: Check comments in source files

---

**Made for the Slovenian FiveM Community** 🎮🇸🇮
