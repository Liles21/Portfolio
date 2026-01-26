# Email Integration Setup

## Environment Variables
Create a `.env` file in the root directory with the following:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password
PERSONAL_EMAIL=your-personal-email@gmail.com
PORT=5000
VITE_API_URL=http://localhost:5000
```

## Gmail Setup

1. Enable 2-Step Verification on your Gmail account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the generated 16-character password
   - Use this as `EMAIL_PASSWORD` in .env

## Installation

```bash
npm install
npm install express nodemailer cors dotenv
npm install -D @types/node @types/express
```

## Running the Application

### Development (Concurrently)
```bash
npm run dev:all
```

This runs both:
- Frontend: http://localhost:3000 (Vite)
- Backend: http://localhost:5000 (Express)

### Separately

Terminal 1 (Backend):
```bash
node server.js
```

Terminal 2 (Frontend):
```bash
npm run dev
```

## Testing the Email

1. Fill out the contact form on the frontend
2. The email will be sent to your personal email address
3. A confirmation email will be sent to the user

## Notes

- The form includes client-side and server-side validation
- Email addresses are sanitized to prevent injection attacks
- Errors are handled gracefully with user-friendly messages
