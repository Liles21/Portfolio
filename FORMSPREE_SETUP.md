# 📧 Formspree Email Integration Setup

This guide will walk you through setting up Formspree for email integration in your portfolio.

## What is Formspree?

Formspree is a simple, free service that allows you to send emails directly from your website forms without needing a backend server. It's perfect for portfolio websites and contact forms.

## Setup Steps

### 1. Create a Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Click **Sign Up** (or **Get Started**)
3. Sign up with your email address (or use GitHub/Google)
4. Verify your email

### 2. Create a New Form

1. After signing in, click **New Project** or **Create Form**
2. Give your form a name (e.g., "Portfolio Contact")
3. Click **Create**
4. You'll be given a **Form ID** that looks like: `f_xxxxxxxxxx`
5. Copy this Form ID

### 3. Update Contact Component

The Contact.tsx file already has Formspree integration ready. You just need to:

1. Find this line in [src/components/Contact.tsx](src/components/Contact.tsx):
   ```typescript
   const response = await fetch('https://formspree.io/f/xyzabc', {
   ```

2. Replace `xyzabc` with your actual Form ID from step 2:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### 4. (Optional) Configure Email Settings in Formspree

In your Formspree dashboard:

1. Go to your form settings
2. Under **Email Notifications**, configure:
   - **Redirect page** after submission (optional)
   - **Email notifications** to receive contact submissions
   - **Autoresponder** to send auto-reply to users (optional)

## How It Works

The contact form now:

1. User fills out the form (Name, Email, Message)
2. Form is submitted to Formspree's endpoint
3. Formspree receives the submission and sends you an email
4. Optionally sends an auto-reply to the user
5. Shows success/error message on the website

## Features Included

✅ **Form Validation** - Required fields must be filled  
✅ **Loading State** - Button shows "Sending..." during submission  
✅ **Error Handling** - Displays error messages if submission fails  
✅ **Success Feedback** - Shows confirmation message after successful submission  
✅ **Form Reset** - Clears form after successful submission  
✅ **Responsive Design** - Works on all devices  

## Environment Variables (Alternative Method)

If you want to keep your Form ID in an environment variable instead of hardcoding it:

1. Create a `.env.local` file in your project root (or update if it exists):
   ```
   VITE_FORMSPREE_FORM_ID=YOUR_FORM_ID
   ```

2. Update [src/components/Contact.tsx](src/components/Contact.tsx):
   ```typescript
   const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID
   const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
   ```

3. Note: The `.env.local` file should NOT be committed to git (already in .gitignore)

## Testing

1. Run your dev server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and submit
4. You should receive an email from Formspree with the submission
5. Check your spam folder if you don't see it

## Troubleshooting

**Problem: Form doesn't submit**
- Check the Form ID is correct
- Check browser console for error messages
- Verify you've confirmed your email on Formspree

**Problem: Not receiving emails**
- Check Formspree spam settings
- Make sure the email address is verified on Formspree
- Check the form logs on your Formspree dashboard

**Problem: CORS errors**
- Formspree handles CORS automatically, no additional setup needed
- If still getting errors, try clearing browser cache

## Upgrading Formspree (Optional)

Formspree has a free tier perfect for personal projects. You can upgrade for:
- More submissions per month
- Custom email templates
- Team collaboration
- API access

## Need Help?

- Formspree Documentation: https://formspree.io/help/
- GitHub Issues: Check Formspree's support options
- Community: Formspree has excellent documentation and support

## Next Steps

1. ✅ Create Formspree account and form
2. ✅ Update your Form ID in Contact.tsx
3. ✅ Test the form submission
4. ✅ Deploy to production
5. ✅ Monitor submissions in Formspree dashboard

---

**Note**: The current setup uses Formspree for form submission, but you also have SendGrid configured in your backend (server.js). You can choose to use either:
- **Formspree** (recommended for simplicity): No backend needed, works anywhere
- **Backend API** (server.js): More control, supports multiple email services
