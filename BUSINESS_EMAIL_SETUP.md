# Business Email Configuration Guide

This guide will help you configure the contact form with your business email SMTP settings.

## 📧 **Business Email SMTP Configuration**

### **Step 1: Get SMTP Settings from Your Email Provider**

Contact your email provider or check your hosting control panel for these details:

- **SMTP Host** (e.g., `mail.yourdomain.com`)
- **SMTP Port** (usually `587` or `465`)
- **Security Type** (STARTTLS or SSL/TLS)
- **Username** (your email address)
- **Password** (your email password)

### **Step 2: Common Business Email SMTP Settings**

#### **Google Workspace (G Suite)**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password-or-app-password
```

#### **Microsoft 365 / Outlook Business**
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
```

#### **cPanel / Shared Hosting**
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-email-password
```

#### **Zoho Mail**
```env
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
```

### **Step 3: Update Your .env.local File**

Replace the values in your `.env.local` file:

```env
# Your Business Email SMTP Settings
SMTP_HOST=mail.iw3.in
SMTP_PORT=587
SMTP_SECURE=false

# Your Email Credentials
EMAIL_USER=info@iw3.in
EMAIL_PASS=your-actual-password
NOTIFICATION_EMAIL=info@iw3.in
```

## 🔍 **How to Find Your SMTP Settings**

### **Method 1: Check Your Hosting Control Panel**
1. Log into your hosting control panel (cPanel, Plesk, etc.)
2. Look for "Email" or "Mail" section
3. Find "Email Accounts" or "Mail Configuration"
4. Look for SMTP/Outgoing mail settings

### **Method 2: Check Your Email Client**
1. Open your email client (Outlook, Thunderbird, etc.)
2. Go to Account Settings
3. Look for "Outgoing Mail Server" or "SMTP" settings
4. Copy the host, port, and security settings

### **Method 3: Contact Your Email Provider**
Ask your email provider for:
- SMTP server hostname
- SMTP port number
- Security type (STARTTLS/SSL)
- Authentication requirements

## ⚙️ **Port and Security Settings**

### **Port 587 (Recommended)**
```env
SMTP_PORT=587
SMTP_SECURE=false
```
- Uses STARTTLS encryption
- Most commonly supported
- Recommended for business use

### **Port 465**
```env
SMTP_PORT=465
SMTP_SECURE=true
```
- Uses SSL/TLS encryption
- Alternative if 587 doesn't work

### **Port 25**
```env
SMTP_PORT=25
SMTP_SECURE=false
```
- Often blocked by ISPs
- Not recommended for external use

## 🧪 **Testing Your Configuration**

### **Step 1: Update Environment Variables**
Make sure your `.env.local` has the correct values.

### **Step 2: Restart Development Server**
```bash
npm run dev
```

### **Step 3: Test the Contact Form**
1. Go to your contact page
2. Fill out and submit the form
3. Check the browser console for any errors
4. Check your email for notifications

### **Step 4: Check Logs**
Look at the terminal where you're running `npm run dev` for any error messages.

## 🛠 **Troubleshooting Common Issues**

### **Authentication Failed**
- ✅ Double-check username and password
- ✅ Ensure the email account exists
- ✅ Try using the full email address as username

### **Connection Refused**
- ✅ Verify SMTP host is correct
- ✅ Check if port is correct
- ✅ Ensure firewall isn't blocking the port

### **SSL/TLS Errors**
- ✅ Try switching between `SMTP_SECURE=true` and `SMTP_SECURE=false`
- ✅ Try different ports (587 vs 465)

### **Timeout Errors**
- ✅ Check if your hosting provider blocks outgoing emails
- ✅ Contact your hosting provider about SMTP restrictions

## 🔒 **Security Best Practices**

### **Email Security**
- Use a dedicated email account for sending (like `noreply@iw3.in`)
- Consider using an app-specific password if available
- Enable 2FA on your email account

### **Environment Variables**
- Never commit `.env.local` to version control
- Use different credentials for development and production
- Regularly rotate email passwords

## 🚀 **Production Deployment**

When deploying to production:

1. **Set Environment Variables** on your hosting platform
2. **Use Production Email Settings** (not development ones)
3. **Test Email Delivery** in production environment
4. **Monitor Email Logs** for delivery issues

### **Vercel Deployment**
```bash
# Add environment variables to Vercel
vercel env add SMTP_HOST
vercel env add SMTP_PORT
vercel env add SMTP_SECURE
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
vercel env add NOTIFICATION_EMAIL
```

### **Netlify Deployment**
Add environment variables in your Netlify dashboard under:
Site Settings → Environment Variables

## 📞 **Need Help?**

If you're still having issues:

1. **Check your email provider's documentation**
2. **Contact your hosting provider's support**
3. **Test with a simple email client first** (like Outlook or Thunderbird)
4. **Review the error messages** in the browser console and server logs

## ✉️ **Email Templates**

The system sends two types of emails:

1. **Admin Notification** - Sent to `NOTIFICATION_EMAIL`
2. **User Confirmation** - Sent to the person who submitted the form

Both emails use professional HTML templates with your company branding.

---

**Next Steps:**
1. Get your SMTP settings from your email provider
2. Update the `.env.local` file
3. Restart your development server
4. Test the contact form
5. Check your email for notifications
