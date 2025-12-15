// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message }: ContactRequestBody = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email address' 
      });
    }

    // Log the contact form submission (in production, you would send an email here)
    // For example, using a service like SendGrid, Resend, or Nodemailer
    console.log('Contact Form Submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (e.g., SendGrid, Resend, Nodemailer)
    // Example with environment variables:
    // const emailService = process.env.EMAIL_SERVICE;
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   from: email,
    //   subject: `Portfolio Contact: ${name}`,
    //   text: message,
    // });

    // For now, we'll just return success
    // In production, you should:
    // 1. Store in a database (e.g., MongoDB, PostgreSQL)
    // 2. Send email notification
    // 3. Set up rate limiting to prevent spam

    return res.status(200).json({ 
      success: true,
      message: 'Message received successfully' 
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ 
      message: 'Internal server error. Please try again later.' 
    });
  }
}
