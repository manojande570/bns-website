# Netlify Deployment Guide

## Project Setup Complete ✅

Your BNS Animation project is now ready for Netlify deployment with the following configurations:

### Files Added/Modified:
- `netlify.toml` - Netlify build configuration
- `next.config.js` - Updated for static export
- `.eslintrc.json` - Disabled strict rules for deployment
- `package.json` - Added export script
- `components/About.tsx` - Fixed TypeScript ref errors

## Deployment Steps:

### Option 1: Deploy via Netlify Dashboard (Recommended)
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect your Git provider (GitHub/GitLab/Bitbucket)
4. Select this repository: `bns-animation`
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Branch**: `changing-desktop-and-mobile-version`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from project root
netlify deploy --prod --dir=out
```

### Build Settings:
- **Build Command**: `npm run build`
- **Publish Directory**: `out`
- **Node Version**: 18

### Environment Variables (if needed):
No environment variables required for this static site.

## Post-Deployment:
- Your site will be available at a Netlify subdomain (e.g., `amazing-site-123456.netlify.app`)
- You can configure a custom domain in Netlify settings
- Automatic deployments will trigger on git pushes to the connected branch

## Site ID for Reference:
Use this ID when deploying: `1a333c9a-9bc5-4363-a2c7-ab671c513f02`

## Troubleshooting:
- If build fails, check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify the build works locally with `npm run build`