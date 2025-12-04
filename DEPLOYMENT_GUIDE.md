# 🚀 Deployment Guide - Pinatubo Consultancy Website

This guide will help you take your website from your local computer to being live on the internet.

## 📋 What You Need Before Starting

1. **A Domain Name** (e.g., `pinatuboconsultancy.com`)
   - Buy from: Namecheap, GoDaddy, or Google Domains
   - Cost: ~$10-15/year

2. **A Hosting Service** (Choose ONE of these options)

---

## 🎯 Option 1: Netlify (RECOMMENDED - Easiest & Free)

### Why Netlify?
- ✅ **FREE** for basic sites
- ✅ Automatic HTTPS (secure connection)
- ✅ Very easy to use
- ✅ Fast global delivery
- ✅ Perfect for static websites like yours

### Steps:

#### Step 1: Create a Netlify Account
1. Go to [netlify.com](https://www.netlify.com)
2. Click "Sign up" → Use GitHub, GitLab, or Email
3. Verify your email

#### Step 2: Prepare Your Website Files
1. Open File Explorer
2. Go to: `C:\Users\SHAH HARSH\.gemini\antigravity\scratch\pinatubo-consultancy`
3. Create a ZIP file of ALL files:
   - Right-click on the folder
   - Select "Send to" → "Compressed (zipped) folder"
   - Name it: `pinatubo-website.zip`

#### Step 3: Deploy to Netlify
1. Log into Netlify
2. Click "Add new site" → "Deploy manually"
3. Drag and drop your `pinatubo-website.zip` file
4. Wait 30-60 seconds
5. **Done!** Your site is live at: `https://random-name-12345.netlify.app`

#### Step 4: Connect Your Custom Domain (Optional)
1. In Netlify, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `pinatuboconsultancy.com`)
4. Follow the instructions to update your domain's DNS settings
5. Wait 24-48 hours for DNS to propagate

---

## 🎯 Option 2: GitHub Pages (Free, Requires Git)

### Why GitHub Pages?
- ✅ **FREE** forever
- ✅ Good for learning Git
- ✅ Reliable hosting

### Steps:

#### Step 1: Install Git
1. Download Git from: [git-scm.com](https://git-scm.com/download/win)
2. Install with default settings
3. Restart your computer

#### Step 2: Create GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up for free
3. Verify your email

#### Step 3: Create a Repository
1. Click "New repository" (green button)
2. Name: `pinatubo-consultancy`
3. Make it **Public**
4. Click "Create repository"

#### Step 4: Upload Your Files
1. Open PowerShell in your website folder:
   - Navigate to: `C:\Users\SHAH HARSH\.gemini\antigravity\scratch\pinatubo-consultancy`
   - Hold Shift + Right-click → "Open PowerShell window here"

2. Run these commands (replace `YOUR-USERNAME` with your GitHub username):
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/pinatubo-consultancy.git
git push -u origin main
```

3. Enter your GitHub username and password when prompted

#### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" → "Pages" (left sidebar)
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 2-3 minutes
6. Your site will be live at: `https://YOUR-USERNAME.github.io/pinatubo-consultancy`

---

## 🎯 Option 3: Vercel (Free, Modern)

### Why Vercel?
- ✅ **FREE** for personal projects
- ✅ Very fast
- ✅ Easy deployment
- ✅ Automatic HTTPS

### Steps:

#### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub, GitLab, or Email

#### Step 2: Deploy
1. Click "Add New" → "Project"
2. If using GitHub: Connect your repository
3. If manual: Drag and drop your website folder
4. Click "Deploy"
5. Wait 1-2 minutes
6. **Done!** Your site is live at: `https://pinatubo-consultancy.vercel.app`

---

## ⚠️ IMPORTANT: Before Going Live

### 1. Update Contact Information
Make sure these are YOUR real details:

**Files to check:**
- `index.html`
- `about.html`
- `booking.html`
- All service pages in `services/` folder

**What to update:**
- Phone number: Currently `06 16 45 14 30`
- Email: Currently `contact@savoirvivre.fr`
- Address: Currently `98 Boulevard du Montparnasse, 75014 Paris`
- WhatsApp number in the widget

### 2. Set Up Real Payment Processing
Currently, the payment is **SIMULATED** (fake). To accept real payments:

**Option A: Stripe (Recommended)**
1. Sign up at [stripe.com](https://stripe.com)
2. Get your API keys
3. You'll need to hire a developer to integrate Stripe properly
4. Cost: ~$200-500 for integration

**Option B: PayPal**
1. Sign up for PayPal Business
2. Create payment buttons
3. Replace the fake payment form

**Option C: Manual Payment**
- Remove the payment form
- Add text: "Payment details will be sent via email after booking"
- Process payments manually

### 3. Set Up Email Notifications
Currently, bookings don't send real emails. To fix this:

**Option A: EmailJS (Easy, Free tier available)**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Follow their guide to add email sending to your booking form
3. Cost: Free for 200 emails/month

**Option B: FormSubmit (Easiest)**
1. Go to [formsubmit.co](https://formsubmit.co)
2. Update your booking form's action to their endpoint
3. Completely free

**Option C: Hire a developer**
- Set up a proper backend with Node.js/PHP
- Cost: ~$300-800

---

## 📝 Recommended Deployment Path (Easiest)

### For Complete Beginners:

**Phase 1: Get Online Fast (1 hour)**
1. ✅ Use **Netlify** (drag & drop method)
2. ✅ Your site will be live at a free Netlify URL
3. ✅ Test everything works

**Phase 2: Professional Setup (1-2 days)**
1. ✅ Buy your domain name
2. ✅ Connect domain to Netlify
3. ✅ Update all contact information
4. ✅ Set up FormSubmit for email notifications

**Phase 3: Payment Integration (Hire Help)**
1. ❌ Don't try to integrate real payments yourself
2. ✅ Hire a developer on Fiverr or Upwork (~$200-400)
3. ✅ They'll integrate Stripe properly
4. ✅ Or, temporarily accept payments via bank transfer/PayPal manually

---

## 🆘 Need Help?

### Free Resources:
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **YouTube**: Search "deploy website to Netlify"
- **Web.dev**: [web.dev](https://web.dev) - Learn web basics

### Paid Help:
- **Fiverr**: Find developers for $50-200
- **Upwork**: Professional developers $30-100/hour
- **Local web agencies**: $500-2000 for full setup

---

## ✅ Quick Checklist Before Launch

- [ ] All contact info updated (phone, email, address)
- [ ] WhatsApp number updated
- [ ] Tested all pages load correctly
- [ ] Tested booking form works
- [ ] Decided on payment method (manual or integrated)
- [ ] Set up email notifications
- [ ] Bought domain name (optional but recommended)
- [ ] Deployed to hosting service
- [ ] Tested website on mobile phone
- [ ] Tested website on different browsers (Chrome, Firefox, Safari)
- [ ] Added Google Analytics (optional - track visitors)

---

## 💰 Total Cost Estimate

### Minimum (DIY):
- Domain: $12/year
- Hosting: **FREE** (Netlify/Vercel/GitHub Pages)
- **Total: $12/year**

### Recommended (With Help):
- Domain: $12/year
- Hosting: **FREE**
- Payment integration: $200-400 (one-time)
- Email setup: **FREE** (FormSubmit)
- **Total: ~$212-412 first year, then $12/year**

### Professional (Full Service):
- Domain: $12/year
- Hosting: $5-20/month
- Full setup by agency: $500-2000
- **Total: $572-2252 first year**

---

## 🎉 You're Ready!

Start with **Netlify** - it's the easiest. You can have your site live in less than 10 minutes!

Good luck with your consultancy business! 🚀
