import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple email sending function using nodemailer
async function sendEmail(to: string, subject: string, htmlContent: string) {
  // Check if SMTP credentials are provided
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error(
      "SMTP credentials not configured. Please set SMTP_USER and SMTP_PASS environment variables."
    );
  }

  // Create transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    // Add additional options for better compatibility
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.SMTP_FROM || "noreply@tedspace.me",
    to: to,
    subject: subject,
    html: htmlContent,
  };

  // Send email
  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent:", info.messageId);
  return info;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email to support@tedspace.me with contact form information
    const contactHtml = `
      <h2>Contact Form Submission - PickIt</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
        ${message.replace(/\n/g, "<br>")}
      </div>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Source:</strong> PickIt App Contact Form</p>
      <hr>
      <p>Please respond to this inquiry as soon as possible.</p>
    `;

    try {
      await sendEmail(
        "support@tedspace.me",
        `Contact Form: ${subject} - PickIt`,
        contactHtml
      );
    } catch (emailError) {
      console.error("Contact email failed:", emailError);
      return NextResponse.json(
        { error: "Failed to send contact email" },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const confirmationHtml = `
      <h2>Thank You for Contacting PickIt</h2>
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
      
      <h3>Your message details:</h3>
      <ul>
        <li><strong>Subject:</strong> ${subject}</li>
        <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
      </ul>
      
      <h3>What happens next:</h3>
      <ul>
        <li>Our support team will review your message</li>
        <li>You'll receive a response within 24-48 hours</li>
        <li>If urgent, you can also reach us at support@pickit.app</li>
      </ul>
      
      <hr>
      <p><small>This is an automated confirmation. Please do not reply to this email.</small></p>
    `;

    try {
      await sendEmail(
        email,
        "Thank You for Contacting PickIt",
        confirmationHtml
      );
    } catch (emailError) {
      console.error("Confirmation email failed:", emailError);
      // Don't fail the entire request if confirmation email fails, but log it
    }

    // Log the successful contact form submission
    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
