# Contact Form Setup Guide

This guide explains how to set up the contact form with email notifications and database storage.

## 📧 Email Configuration

### 1. Environment Variables

Update the `.env.local` file with your email credentials:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=info@iw3.in
```

### 2. Gmail Setup (Recommended)

If using Gmail:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password as `EMAIL_PASS` (not your regular password)

### 3. Alternative Email Providers

For other email providers, modify the transporter configuration in `/src/app/api/contact/route.ts`:

**Outlook/Hotmail:**
```javascript
service: 'hotmail'
```

**Yahoo:**
```javascript
service: 'yahoo'
```

**Custom SMTP:**
```javascript
host: 'smtp.yourdomain.com',
port: 587,
secure: false, // true for 465, false for other ports
```

## 💾 Database Storage

Currently, the system uses a JSON file for storage (`/data/contacts.json`). This file is automatically created when the first contact is submitted.

### Upgrading to a Real Database

To use a proper database instead of JSON files:

1. **Install database dependencies** (example for MongoDB):
```bash
npm install mongodb
```

2. **Update the API route** (`/src/app/api/contact/route.ts`):
   - Replace the `saveToDatabase` function with your database logic
   - Add database connection and model creation

3. **Example MongoDB integration**:
```javascript
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('your-database-name');
const collection = db.collection('contacts');

const saveToDatabase = async (data) => {
  await collection.insertOne(data);
};
```

## 🔧 Features

### Current Features

1. **Email Notifications**:
   - Sends notification to admin email
   - Sends auto-reply to user
   - Professional HTML email templates

2. **Form Validation**:
   - Client-side validation with Yup
   - Server-side validation
   - Real-time error messages

3. **Data Storage**:
   - Automatic JSON file storage
   - Unique ID generation
   - Timestamp tracking

4. **Admin Interface**:
   - View all contact messages at `/admin/contacts`
   - Search and filter capabilities
   - Delete unwanted messages

### Admin Panel

Access the admin panel at: `http://localhost:3000/admin/contacts`

Features:
- View all contact submissions
- Search and filter messages
- View detailed message content
- Delete messages
- Statistics dashboard

## 🚀 Testing

### 1. Test the Contact Form

1. Go to your contact page
2. Fill out the form with test data
3. Submit the form
4. Check for success message

### 2. Verify Email Delivery

1. Check the admin email (`NOTIFICATION_EMAIL`) for new message notification
2. Check the user's email for auto-reply confirmation

### 3. Check Data Storage

1. Look for `/data/contacts.json` file in your project root
2. Visit `/admin/contacts` to see the admin interface

### 4. Test API Endpoints

```bash
# Test contact submission
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'

# Test admin contacts API
curl http://localhost:3000/api/admin/contacts
```

## 🛠 Troubleshooting

### Common Issues

1. **Email not sending**:
   - Check environment variables
   - Verify email credentials
   - Check app password (for Gmail)
   - Review console logs for errors

2. **Database errors**:
   - Ensure `/data` directory has write permissions
   - Check disk space
   - Verify JSON file structure

3. **Form validation errors**:
   - Check required fields
   - Verify email format
   - Review browser console for JavaScript errors

### Debug Mode

Enable debug logging by adding to your environment:
```env
NODE_ENV=development
```

### Log Files

Check these locations for error logs:
- Browser console (client-side errors)
- Terminal/command prompt (server-side errors)
- `/data/contacts.json` (stored messages)

## 📱 Mobile Compatibility

The contact form is fully responsive and works on:
- Desktop browsers
- Mobile devices
- Tablets
- All modern browsers

## 🔒 Security Considerations

1. **Rate Limiting**: Consider adding rate limiting to prevent spam
2. **CAPTCHA**: Add CAPTCHA for additional security
3. **Input Sanitization**: Form inputs are validated but consider additional sanitization
4. **Email Security**: Use app passwords, not regular passwords
5. **Admin Access**: Secure the admin panel with authentication

## 📈 Future Enhancements

Planned improvements:
1. Database integration (MongoDB, PostgreSQL, etc.)
2. Advanced search and filtering
3. Email templates customization
4. Attachment support
5. Automated responses
6. Analytics and reporting
7. Export functionality
8. Multi-language support

## 🆘 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review environment variables
3. Test email configuration
4. Check browser console for errors
5. Verify API endpoints are accessible

For additional help, contact the development team.
