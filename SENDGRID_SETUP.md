# SendGrid Email Setup Guide

## Overview
This project now uses **SendGrid** for email delivery, which supports custom domain emails like `alexander.liles@urios.edu.ph`.

## Quick Setup (5 minutes)

### Step 1: Create a SendGrid Account
1. Go to https://sendgrid.com/
2. Sign up for a free account
3. Verify your email address

### Step 2: Create an API Key
1. Log in to SendGrid
2. Go to **Settings** → **API Keys**
3. Click **"Create API Key"**
4. Name it: `Portfolio Contact Form`
5. Give it **Mail Send** permission
6. Click **Create & Copy**
7. Copy the API key (it looks like: `SG.XXXXXXXXX...`)

### Step 3: Verify Your Sender Email
1. Go to **Settings** → **Sender Authentication**
2. Click **"Verify a Single Sender"** (easier option)
3. Enter your email: `alexander.liles@urios.edu.ph`
4. Confirm the verification email sent to your inbox
5. Once verified, you can use this email to send emails

### Step 4: Update `.env.local`
Replace `your-sendgrid-api-key` with your actual API key:

```env
SENDGRID_API_KEY=SG.XXXXXXXXX...
EMAIL_USER=alexander.liles@urios.edu.ph
PERSONAL_EMAIL=alexander.liles@urios.edu.ph
PORT=5000
VITE_API_URL=http://localhost:5000
```

### Step 5: Restart the Server
```bash
npm run dev:all
```

## Testing

1. Open http://localhost:3000
2. Fill out the contact form
3. Click "Send Message"
4. Check your email for the message submission

## Troubleshooting

### "Invalid API Key" Error?
- Make sure you copied the entire API key
- Check that you don't have extra spaces
- Regenerate the API key and try again

### Emails not arriving?
1. Check the [SendGrid Dashboard](https://app.sendgrid.com/email_activity) for delivery logs
2. Verify the sender email is verified in SendGrid
3. Check spam/junk folder
4. Ensure `PERSONAL_EMAIL` is correct

### "Email not verified"?
- Go to SendGrid **Settings** → **Sender Authentication**
- Verify your sender email address
- Wait for verification email and confirm it

## Free Tier Limits
- 100 emails/day free
- Perfect for a contact form
- Upgrade anytime for higher limits

## Production Notes
- Keep your API key secret (never commit it)
- Store API key in environment variables on production
- Monitor usage in SendGrid Dashboard
- Consider upgrading for higher email limits if needed

## Support
For SendGrid issues: https://support.sendgrid.com/
