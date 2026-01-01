import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Codevo Studio <info@codevostudio.com>', // Update with your verified domain
      to: ['mc1986.99@gmail.com'], // Update with your email
      subject: `New Contact Form - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .container {
                background: #f9f9f9;
                border-radius: 12px;
                padding: 30px;
                border: 1px solid #e0e0e0;
              }
              .header {
                background: #0a0a0a;
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                margin: -30px -30px 30px -30px;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: 600;
                color: #555;
                margin-bottom: 5px;
                display: block;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 0.5px;
              }
              .value {
                background: white;
                padding: 12px;
                border-radius: 6px;
                border: 1px solid #ddd;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 6px;
                border: 1px solid #ddd;
                white-space: pre-wrap;
                line-height: 1.8;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                color: #999;
                font-size: 12px;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📧 New Contact Form Submission</h1>
              </div>
              
              <div class="field">
                <span class="label">Name</span>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <span class="label">Email</span>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <span class="label">Phone</span>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              
              <div class="field">
                <span class="label">Message</span>
                <div class="message-box">${message}</div>
              </div>
              
              <div class="footer">
                Sent from Codevo Studio Contact Form
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}