# API Setup Documentation

## Account Deletion API

The account deletion functionality requires the following environment variables to be set in your `.env.local` file:

### Required Environment Variables

```bash
# SMTP Configuration for sending emails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=noreply@pickit.app
```

### Example with Gmail

```bash
# For Gmail, you'll need to use an App Password
# Go to Google Account settings > Security > 2-Step Verification > App passwords
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_16_character_app_password
SMTP_FROM=noreply@tedspace.me
```

## Troubleshooting SMTP Issues

### Common Error: "Missing credentials for PLAIN"

This error usually occurs when:

1. **Environment variables not set**: Make sure your `.env.local` file exists and contains all required variables
2. **Gmail App Password**: If using Gmail, you must use an App Password, not your regular password
3. **2-Factor Authentication**: Gmail requires 2FA to be enabled to generate App Passwords

### Testing Your SMTP Configuration

Use the test endpoint to verify your setup:

```bash
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"testEmail": "your-test-email@example.com"}'
```

Or test via browser console:

```javascript
fetch("/api/test-email", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ testEmail: "your-test-email@example.com" }),
})
  .then((res) => res.json())
  .then(console.log);
```

### Gmail Setup Steps

1. **Enable 2-Factor Authentication**:

   - Go to Google Account settings
   - Security → 2-Step Verification → Turn on

2. **Generate App Password**:

   - Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Name it "PickIt App"
   - Copy the 16-character password

3. **Update .env.local**:
   ```bash
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_16_character_app_password
   SMTP_FROM=noreply@tedspace.me
   ```

## API Endpoints

### POST /api/account-deletion

Handles account deletion requests by:

1. Validating the email address
2. Sending an email notification to accounts@tedspace.me with the deletion request
3. Sending a confirmation email to the user

#### Request Body

```json
{
  "email": "user@example.com",
  "reason": "Optional reason for deletion"
}
```

#### Response

```json
{
  "message": "Account deletion request submitted successfully",
  "email": "user@example.com",
  "requestId": "del_1234567890_abc123def"
}
```

## Email Content

The API sends two emails:

1. **Notification Email** - Sent to accounts@tedspace.me
   - Contains user email, reason, and request details
   - HTML formatted with clear information
2. **Confirmation Email** - Sent to the user
   - Contains confirmation message and next steps
   - Includes contact information for cancellation
   - HTML formatted with professional styling

## Error Handling

The API returns appropriate HTTP status codes:

- `400` - Bad Request (missing email or invalid email format)
- `500` - Internal Server Error (Failed to send notification email)

## Security Notes

- SMTP credentials should be kept secure and never committed to version control
- Email validation is performed on both client and server side
- Failed confirmation emails don't fail the entire request (logged for debugging)
- Uses nodemailer for reliable email delivery
