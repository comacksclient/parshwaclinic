import nodemailer from "nodemailer";

export const sendEmail = async (data: { name: string; email: string; subject: string; message: string }) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASS,
        },
    });

    const { name, email, subject, message } = data;

    await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: "shrenik_shah16@yahoo.com", // Client Email
        cc: "comacksclient@gmail.com", // Agency Copy
        replyTo: email,
        subject: `📩 New Inquiry: ${subject || "No Subject"} - Parshwa Dental Clinic`,
        text: `
You have received a new message from the contact form on the Parshwa Dental Clinic website.

Name: ${name}
Email: ${email}
Subject: ${subject || "Not Provided"}

Message:
${message}
    `,
        html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0EA5E9; padding: 24px; text-align: center;">
          <h2 style="color: white; margin: 0; font-size: 24px;">New Patient Inquiry</h2>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0;">Parshwa Dental Clinic</p>
        </div>
        <div style="padding: 32px; background-color: #fff;">
          <p style="margin-top: 0;"><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0EA5E9; text-decoration: none;">${email}</a></p>
          <p><strong>Subject:</strong> ${subject || "Not Provided"}</p>
          <hr style="margin: 24px 0; border: 0; border-top: 1px solid #f0f0f0;" />
          <p style="color: #666; font-size: 14px; text-transform: uppercase; font-weight: bold; margin-bottom: 8px;">Message:</p>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #f3f4f6; white-space: pre-line;">
            ${message}
          </div>
          <hr style="margin: 24px 0; border: 0; border-top: 1px solid #f0f0f0;" />
          <p style="font-size: 0.85rem; color: #999; text-align: center;">
            This message was sent via the Parshwa Dental Clinic website contact form.
          </p>
        </div>
      </div>
    `,
    });
};