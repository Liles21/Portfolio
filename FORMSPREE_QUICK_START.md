# Quick Start: Formspree Integration ⚡

## 3 Simple Steps to Get Email Working

### Step 1: Create Formspree Form (2 minutes)
1. Go to [formspree.io](https://formspree.io)
2. Sign up (free account)
3. Create a new form
4. **Copy your Form ID** (looks like: `f_a1b2c3d4e5f6`)

### Step 2: Add Form ID to Your Project
1. Open or create `.env.local` in your project root
2. Add this line:
   ```
   VITE_FORMSPREE_FORM_ID=f_your_form_id_here
   ```
3. Save the file (`.env.local` is already in `.gitignore` - don't commit it)

### Step 3: Test It! 🧪
1. Start your dev server: `npm run dev`
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email for the submission

## That's It! 

Your contact form is now live and will send emails to you.

---

## Optional: Enable Auto-Reply to Users

In your Formspree dashboard:
1. Go to your form settings
2. Enable "Autoresponder"
3. Set a custom message for users

---

## Need to Change Your Form ID Later?

Just update `.env.local` with your new Formspree Form ID. The Contact component automatically uses whatever ID is in your environment variable.

---

## Troubleshooting Quick Check

| Issue | Solution |
|-------|----------|
| Form won't submit | Check `.env.local` has correct Formspree ID |
| No email received | Verify email in Formspree account settings |
| See error message in contact form | Check browser console (F12) for details |
| Get CORS error | Formspree handles this - try refreshing |

---

## Want to Keep Current SendGrid Setup?

You have **two options** for email:

**Option A: Formspree (Recommended)** ✅
- No backend needed
- Simple and free
- Works immediately
- Follow steps above

**Option B: SendGrid Backend** 
- More control
- Run: `npm run dev:backend`
- Edit `server.js` to use your own email backend
- Requires SendGrid API key

Choose one or use both!

---

💡 **Tip**: Formspree Form IDs in `.env.local` are specific to your project. If you share code, others will need their own Formspree account and Form ID.
