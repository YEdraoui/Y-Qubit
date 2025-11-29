# Y-Qubit Website Deployment Guide

## Option 1: Vercel (Recommended)

### Steps:
1. Push code to GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Connect your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"
7. Get your live URL (e.g., yqubit.vercel.app)

### Custom Domain:
1. Go to Project Settings > Domains
2. Add your custom domain (yqubit.ma)
3. Update DNS records at your domain registrar:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

## Option 2: Netlify

### Steps:
1. Build the project: `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Configure custom domain

## Option 3: Self-Hosted (VPS)

### Requirements:
- Ubuntu 22.04 server
- Node.js 18+
- Nginx
- PM2 process manager

### Installation:
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Clone repository
git clone <your-repo-url>
cd yqubitwebsite

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "yqubit" -- start
pm2 save
pm2 startup
```

### Nginx Configuration:
```nginx
server {
    listen 80;
    server_name yqubit.ma www.yqubit.ma;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://yqubit.ma
```

## Performance Checklist

- [ ] Enable compression
- [ ] Configure caching headers
- [ ] Optimize images (WebP/AVIF)
- [ ] Enable CDN
- [ ] Setup SSL certificate
- [ ] Configure analytics (Google Analytics)

## Post-Deployment

1. Test all pages and links
2. Verify mobile responsiveness
3. Check page load speed (Google PageSpeed)
4. Submit sitemap to Google Search Console
5. Setup email forwarding (@yqubit.ma)
6. Configure contact form backend

## Monitoring

- Use Vercel Analytics (if on Vercel)
- Setup Google Analytics
- Monitor with Lighthouse scores
- Track Core Web Vitals
