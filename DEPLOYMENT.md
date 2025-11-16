# GitHub Pages Deployment Guide

## Quick Setup

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Verify Homepage URL
The `package.json` already has the homepage set to:
```json
"homepage": "https://shreyasmalvadkar.github.io/portfolio"
```

**Important:** Make sure your GitHub repository name matches:
- If repo is `portfolio` → URL: `https://shreyasmalvadkar.github.io/portfolio`
- If repo is `new` → Change homepage to: `https://shreyasmalvadkar.github.io/new`

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
1. Build your React app (`npm run build`)
2. Deploy the `build` folder to the `gh-pages` branch
3. Make your site live at the homepage URL

## First Time Setup

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio` (or update homepage in package.json if different)
3. **Don't** initialize with README (if you already have one)

### 2. Push Your Code
```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
git branch -M main
git remote add origin https://github.com/shreyasmalvadkar/portfolio.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select branch: **gh-pages**
5. Select folder: **/ (root)**
6. Click **Save**

### 4. Deploy
```bash
npm run deploy
```

## Updating Your Site

After making changes:

```bash
# Make your changes, then:
git add .
git commit -m "Update portfolio"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### Issue: 404 Error
- **Solution:** Check that homepage URL in `package.json` matches your repo name
- Wait 5-10 minutes after first deployment for DNS propagation

### Issue: Assets Not Loading
- **Solution:** Make sure `homepage` in package.json is correct
- Clear browser cache
- Check that all paths use relative URLs (React handles this automatically)

### Issue: Build Fails
- **Solution:** Run `npm run build` locally first to check for errors
- Fix any build errors before deploying

### Issue: Changes Not Showing
- **Solution:** 
  - Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
  - Check GitHub Pages settings
  - Wait a few minutes for updates to propagate

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in `public/` folder with your domain:
   ```
   yourdomain.com
   ```

2. Update DNS settings with your domain provider:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `shreyasmalvadkar.github.io`

3. Update `homepage` in package.json to your custom domain

## Repository Structure After Deployment

```
your-repo/
├── main branch (source code)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
└── gh-pages branch (deployed site)
    ├── index.html
    ├── static/
    └── ...
```

## Important Notes

- ✅ The `gh-pages` branch is created automatically
- ✅ Don't edit files in the `gh-pages` branch manually
- ✅ Always deploy from the `main` branch
- ✅ The build folder is automatically added to `.gitignore`
- ✅ Your site will be live at: `https://shreyasmalvadkar.github.io/portfolio`

## Verification

After deployment, visit:
- `https://shreyasmalvadkar.github.io/portfolio`

Your portfolio should be live! 🎉

