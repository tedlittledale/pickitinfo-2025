import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
console.log(process.env.SMTP_USER);
console.log(process.env.SMTP_PASS);
console.log(process.env.SMTP_HOST);
console.log(process.env.SMTP_PORT);
console.log(process.env.SMTP_FROM);
export async function POST(request: NextRequest) {
  try {
    // Check if SMTP credentials are provided
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        {
          error: "SMTP credentials not configured",
          message:
            "Please set SMTP_USER and SMTP_PASS environment variables in your .env.local file",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { testEmail } = body;

    if (!testEmail) {
      return NextResponse.json(
        { error: "testEmail is required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify SMTP connection
    console.log("Testing SMTP connection...");
    await transporter.verify();
    console.log("SMTP connection verified successfully");

    // Send test email
    const mailOptions = {
      from: process.env.SMTP_FROM || "noreply@tedspace.me",
      to: testEmail,
      subject: "SMTP Test Email - PickIt",
      html: `
        <h2>SMTP Configuration Test</h2>
        <p>This is a test email to verify your SMTP configuration is working correctly.</p>
        <p><strong>SMTP Host:</strong> ${
          process.env.SMTP_HOST || "smtp.gmail.com"
        }</p>
        <p><strong>SMTP Port:</strong> ${process.env.SMTP_PORT || "587"}</p>
        <p><strong>SMTP User:</strong> ${process.env.SMTP_USER}</p>
        <p><strong>From Address:</strong> ${
          process.env.SMTP_FROM || "noreply@tedspace.me"
        }</p>
        <hr>
        <p><small>If you received this email, your SMTP configuration is working correctly!</small></p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Test email sent:", info.messageId);

    return NextResponse.json(
      {
        message: "Test email sent successfully",
        messageId: info.messageId,
        smtpConfig: {
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: process.env.SMTP_PORT || "587",
          user: process.env.SMTP_USER,
          from: process.env.SMTP_FROM || "noreply@tedspace.me",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("SMTP test error:", error);
    return NextResponse.json(
      {
        error: "SMTP test failed",
        details: error instanceof Error ? error.message : "Unknown error",
        smtpConfig: {
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: process.env.SMTP_PORT || "587",
          user: process.env.SMTP_USER ? "Set" : "Not set",
          pass: process.env.SMTP_PASS ? "Set" : "Not set",
          from: process.env.SMTP_FROM || "noreply@tedspace.me",
        },
      },
      { status: 500 }
    );
  }
}
