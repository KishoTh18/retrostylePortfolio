# Portfolio Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages and other hosting platforms.

## Option 1: Deploy to GitHub Pages (Recommended)

### Step 1: Prepare Your Repository

1. **Create a GitHub Repository:**
   - Go to [GitHub.com](https://github.com) and sign in
   - Click "New Repository"
   - Name it: `your-username.github.io` (for user pages) or `portfolio` (for project pages)
   - Make it public
   - Don't add README, .gitignore, or license (we already have them)

### Step 2: Upload Your Code

1. **Initialize Git and Push:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio upload"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```

### Step 3: Configure GitHub Pages

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **The GitHub Action will automatically:**
   - Build your portfolio
   - Deploy it to GitHub Pages
   - Your site will be available at: `https://YOUR_USERNAME.github.io/REPOSITORY_NAME`

## Option 2: Manual GitHub Pages Setup

If you prefer manual deployment:

### Step 1: Build Your Project Locally

```bash
# Build the frontend only
npx vite build --outDir dist-static

# The built files will be in dist-static/
```

### Step 2: Deploy to gh-pages Branch

```bash
# Install gh-pages package
npm install -g gh-pages

# Deploy to gh-pages branch
gh-pages -d dist-static
```

## Option 3: Alternative Hosting Platforms

### Netlify (Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Build settings:
   - Build command: `npx vite build`
   - Publish directory: `dist/public`

### Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Import your repository
4. Vercel will auto-detect it's a Vite project
5. Deploy!

### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run: `firebase login`
3. Run: `firebase init hosting`
4. Build command: `npx vite build`
5. Public directory: `dist/public`
6. Deploy: `firebase deploy`

## Important Notes

### For Static Deployment:

Since this portfolio has both frontend and backend, but the backend is mainly for development, you'll deploy only the frontend as a static site.

### Update the Build Process:

The current project is set up to build both frontend and backend. For static hosting, you only need the frontend.

### Environment Variables:

If you need API keys or other secrets:
1. For GitHub Pages: Add them in Repository Settings > Secrets
2. For Netlify/Vercel: Add them in their respective dashboards

## Troubleshooting

### Build Issues:
- Make sure all dependencies are installed: `npm install`
- Try building locally first: `npx vite build`

### Asset Loading Issues:
- If images don't load, check the `@assets` path in your components
- Make sure all image files are in the `attached_assets` folder

### GitHub Pages Not Working:
- Check the Actions tab for build errors
- Ensure your repository is public
- Wait a few minutes after enabling Pages

## Quick Start Commands

```bash
# 1. Initialize git and connect to GitHub
git init
git add .
git commit -m "Portfolio deployment"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# 2. Your site will automatically build and deploy via GitHub Actions
# 3. Visit: https://YOUR_USERNAME.github.io/YOUR_REPO
```

## Custom Domain (Optional)

To use your own domain:
1. Add a `CNAME` file to your repository with your domain
2. Configure DNS with your domain provider
3. Enable custom domain in GitHub Pages settings

---

**Your portfolio will be live and accessible to anyone once deployed!**