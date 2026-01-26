# Email Integration Setup Guide

## Overview
This project now has email functionality integrated into the contact form. When users submit the form, an email is sent to your personal email address, and a confirmation email is sent back to the user.

## Prerequisites
- Node.js 16+ installed
- A Gmail account
- Git (optional)

## Step-by-Step Setup

### 1. Install Dependencies
```bash
npm install
```

This installs all required packages including:
- `express` - Backend server
- `nodemailer` - Email service
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management
- `concurrently` - Run multiple scripts

### 2. Configure Gmail for App Passwords

Gmail requires special app passwords for third-party applications. Follow these steps:

1. **Enable 2-Step Verification:**
   - Go to https://myaccount.google.com/security
   - Click "2-Step Verification" and follow the prompts
   - You'll need to verify your phone number

2. **Generate App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Windows Computer" (or your device)
   - Click "Generate"
   - Copy the 16-character password shown (it will have spaces, remove them)

### 3. Configure Environment Variables

Edit `.env.local` in the project root and add:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx-xxxx-xxxx-xxxx
PERSONAL_EMAIL=your-email@gmail.com
PORT=5000
VITE_API_URL=http://localhost:5000
```

**Important:**
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASSWORD`: The 16-character app password you generated (without spaces)
- `PERSONAL_EMAIL`: The email where you want to receive contact messages (can be the same as EMAIL_USER)
- `PORT`: Backend server port (default 5000)
- `VITE_API_URL`: Frontend API URL for local development

**DO NOT commit the `.env.local` file to version control!**

### 4. Run the Application

#### Option A: Run Frontend and Backend Together
```bash
npm run dev:all
```

This starts both:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

#### Option B: Run Separately (Two Terminal Windows)

**Terminal 1 - Backend:**
```bash
npm run dev:backend
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### 5. Test the Email Integration

1. Open http://localhost:3000 in your browser
2. Scroll to the "Get In Touch" section
3. Fill out the contact form with:
   - Your Name
   - Your Email
   - A Message
4. Click "Send Message"
5. Check your personal email for the message
6. Check the user's email for a confirmation message

## Troubleshooting

### Email Not Sending?

1. **Check 2-Step Verification is Enabled:**
   - Go to https://myaccount.google.com/security
   - Ensure 2-Step Verification shows as ON

2. **Verify App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Check if your app password is listed
   - Generate a new one if needed

3. **Check Console Errors:**
   - Open browser DevTools (F12)
   - Look for network errors in the Network tab
   - Check server logs for detailed error messages

4. **Verify Environment Variables:**
   - Ensure `.env.local` has correct email and password
   - Restart the development server after changing `.env.local`
   - Try accessing `http://localhost:5000/api/send-email` directly to test backend

### CORS Errors?

Make sure the backend is running on http://localhost:5000 and `VITE_API_URL` in `.env.local` matches exactly.

### "Less secure app access" Error?

App passwords should work. If you still get this error:
1. Generate a new app password
2. Remove spaces from the password
3. Update `.env.local` and restart the server

## Production Deployment

For production:

1. **Use a proper email service provider:**
   - SendGrid
   - AWS SES
   - Mailgun
   - Or update `server.js` to use your email provider

2. **Update environment variables** on your hosting platform

3. **Update API URL:**
   - Set `VITE_API_URL` to your production backend URL

4. **Deploy both frontend and backend**

## File Structure

```
project-root/
├── .env.local                 # Environment variables (DO NOT commit)
├── .env.example               # Template for environment variables
├── server.js                  # Express backend server
├── EMAIL_SETUP.md             # This file
├── src/
│   ├── components/
│   │   ├── Contact.tsx        # Updated with form
│   │   └── Contact.css        # Updated styles
│   └── ...
├── package.json               # Updated with new dependencies
└── ...
```

## Security Notes

- Never commit `.env.local` to git
- App passwords are specific to your app; generate new ones for different projects
- Sanitize user input on the backend (already done in `server.js`)
- Use HTTPS in production
- Consider rate limiting for production

## Support

For issues:
1. Check the browser console (F12)
2. Check the server logs in the terminal
3. Verify all environment variables are set correctly
4. Ensure backend and frontend are both running

---

Happy coding! 🚀
