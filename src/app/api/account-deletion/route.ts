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
    const { email, reason } = body;

    // Basic validation
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email to accounts@tedspace.me with deletion request
    const notificationHtml = `
      <h2>Account Deletion Request - PickIt</h2>
      <p><strong>User Email:</strong> ${email}</p>
      <p><strong>Reason:</strong> ${reason || "No reason provided"}</p>
      <p><strong>Request Date:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Source:</strong> PickIt App</p>
      <hr>
      <p>Please process this account deletion request according to your standard procedures.</p>
    `;

    try {
      await sendEmail(
        "accounts@tedspace.me",
        "Account Deletion Request - PickIt",
        notificationHtml
      );
    } catch (emailError) {
      console.error("Notification email failed:", emailError);
      return NextResponse.json(
        { error: "Failed to send notification email" },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const confirmationHtml = `
      <h2>Account Deletion Request Confirmation</h2>
      <p>Dear User,</p>
      <p>We have received your request to delete your PickIt account associated with the email address: <strong>${email}</strong></p>
      
      <h3>What happens next:</h3>
      <ul>
        <li>Your account will be deactivated within 7 days</li>
        <li>All personal data will be permanently deleted within 30 days</li>
        <li>You will receive a final confirmation email once deletion is complete</li>
      </ul>
      
      <p><strong>Reason provided:</strong> ${reason || "No reason provided"}</p>
      
      <h3>Changed your mind?</h3>
      <p>If you wish to cancel this request, please contact us within 7 days at:</p>
      <ul>
        <li>Support: <a href="mailto:support@pickit.app">support@pickit.app</a></li>
      </ul>
      
      <hr>
      <p><small>This is an automated message. Please do not reply to this email.</small></p>
    `;

    try {
      await sendEmail(
        email,
        "Account Deletion Request Confirmation - PickIt",
        confirmationHtml
      );
    } catch (emailError) {
      console.error("Confirmation email failed:", emailError);
      // Don't fail the entire request if confirmation email fails, but log it
    }

    // Log the successful deletion request
    console.log("Account deletion requested:", {
      email,
      reason: reason || "No reason provided",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: "Account deletion request submitted successfully",
        email: email,
        requestId: `del_${Date.now()}_${Math.random()
          .toString(36)
          .substr(2, 9)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Account deletion error:", error);
    return NextResponse.json(
      { error: "Failed to process account deletion request" },
      { status: 500 }
    );
  }
}
