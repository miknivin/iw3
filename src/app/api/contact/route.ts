import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

interface ContactData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  timestamp: string;
}

// Configure your email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Your business email SMTP host
    port: parseInt(process.env.SMTP_PORT || '587'), // SMTP port (usually 587 or 465)
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your business email
      pass: process.env.EMAIL_PASS, // Your business email password
    },
  });
};

// Save to JSON file (you can replace this with your preferred database)
const saveToDatabase = async (data: ContactData) => {
  try {
    const dbPath = path.join(process.cwd(), 'data', 'contacts.json');
    
    // Ensure the data directory exists
    const dataDir = path.dirname(dbPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let contacts: ContactData[] = [];
    
    // Read existing data if file exists
    if (fs.existsSync(dbPath)) {
      const fileContent = fs.readFileSync(dbPath, 'utf-8');
      contacts = JSON.parse(fileContent);
    }
    
    // Add new contact
    contacts.push(data);
    
    // Write back to file
    fs.writeFileSync(dbPath, JSON.stringify(contacts, null, 2));
    
    return true;
  } catch (error) {
    console.error('Error saving to database:', error);
    return false;
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create contact data object
    const contactData: ContactData = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      subject: subject || '',
      message,
      timestamp: new Date().toISOString(),
    };

    // Save to database
    const saved = await saveToDatabase(contactData);
    if (!saved) {
      throw new Error('Failed to save contact to database');
    }

    // Send email notification
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER, // Email where you want to receive notifications
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            <p><strong>Submitted:</strong> ${new Date(contactData.timestamp).toLocaleString()}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <h3 style="color: #007bff; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px;">
            <p style="margin: 0; font-size: 12px; color: #6c757d;">
              This message was sent from the IW3 website contact form.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send auto-reply to the user
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting IW3 - We\'ve received your message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007bff;">Thank you for reaching out!</h2>
          
          <p>Dear ${name},</p>
          
          <p>We have received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you within 24 hours.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Your Message Summary:</h3>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            <p><strong>Message:</strong> ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</p>
          </div>
          
          <p>In the meantime, feel free to explore our services:</p>
          <ul>
            <li><strong>Infrastructure:</strong> Industrial warehousing and logistics infrastructure</li>
            <li><strong>Procurement:</strong> Time-bound project logistics expertise</li>
            <li><strong>Logistics:</strong> Specific product procurement requirements</li>
            <li><strong>Consulting:</strong> Infrastructure projects, planning, procurement and logistics</li>
          </ul>
          
          <p>Best regards,<br>The IW3 Team</p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 5px;">
            <p style="margin: 0; font-size: 12px; color: #6c757d;">
              IW3 Infralog LLC-FZ<br>
              Meydan Free Zone, Nad Al Sheba<br>
              P.O. Box 35195, Dubai, UAE<br>
              Phone: +971 47777222 | +971559353359<br>
              Email: sales@iw3.in
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: contactData.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
