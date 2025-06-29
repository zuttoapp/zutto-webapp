# GitHub Pages Deployment Guide

## 🚀 Quick Setup

Your Zutto webapp is now configured for GitHub Pages deployment! Follow these steps:

### 1. Update Repository Settings

1. **Update the homepage URL** in `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/zutto-webapp"
   ```
   Replace `YOUR_USERNAME` with your actual GitHub username.

2. **Push your changes** to GitHub:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### 3. Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build and deploy manually
npm run deploy
```

## 📁 What Was Configured

### Files Modified/Created:

- ✅ `package.json` - Added homepage and deploy scripts
- ✅ `vite.config.js` - Configured base path for GitHub Pages
- ✅ `.github/workflows/deploy.yml` - Automated deployment workflow
- ✅ `public/.nojekyll` - Prevents Jekyll processing
- ✅ `DEPLOYMENT.md` - This guide

### Build Configuration:

- **Base Path**: `/zutto-webapp/`
- **Output Directory**: `dist/`
- **Code Splitting**: Vendor and router chunks for better caching
- **Source Maps**: Disabled for production

## 🔧 Deployment Options

### Option 1: Automatic Deployment (Recommended)
- Every push to `main` branch automatically deploys
- Uses GitHub Actions workflow
- No manual intervention needed

### Option 2: Manual Deployment
```bash
npm run deploy
```

## 🌐 Access Your Site

Once deployed, your site will be available at:
```
https://YOUR_USERNAME.github.io/zutto-webapp
```

## 🛠️ Troubleshooting

### Common Issues:

1. **404 Error on refresh**
   - GitHub Pages doesn't support client-side routing by default
   - Consider using hash routing for SPAs if needed

2. **Assets not loading**
   - Ensure the base path in `vite.config.js` matches your repository name
   - Check that `public/.nojekyll` exists

3. **Build fails**
   - Check that all dependencies are properly installed
   - Ensure Node.js version compatibility (18+ recommended)

### Video Files Consideration

⚠️ **Important**: Your current build includes large video files (14MB+). GitHub Pages has some limitations:
- Repository size limit: 1GB
- File size limit: 100MB per file
- Bandwidth limits apply

**Recommendations:**
1. **Optimize videos**: Compress videos or use lower quality versions
2. **External hosting**: Consider hosting videos on:
   - YouTube/Vimeo (embed)
   - AWS S3 + CloudFront
   - Netlify/Vercel (better for large assets)
3. **Lazy loading**: Load videos only when needed

## 🔄 Updating Your Site

1. Make changes to your code
2. Push to the `main` branch
3. GitHub Actions will automatically rebuild and deploy
4. Changes will be live in 2-3 minutes

## 📊 Performance Tips

- Videos are automatically chunked for better loading
- React and React Router are split into separate chunks
- CSS is minified and optimized
- Assets are hashed for cache busting

## 🆘 Need Help?

If you encounter issues:
1. Check the **Actions** tab in your GitHub repository for build logs
2. Ensure your repository is public (or you have GitHub Pro for private repos)
3. Verify the base path matches your repository name exactly

---

**Your site is ready for deployment! 🎉** 