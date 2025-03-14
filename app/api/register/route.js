import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import Mailgun from "mailgun.js";
const MAILGUN_DOMAIN = "YOUR_MAINLGUN_DOMAIN";
const MAILGUN_API_KEY = "YOUR_MAILGUN_API_KEY";

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }
    // Load email template
    const templatePath = path.join(process.cwd(), "/app/templates", "welcome-template.html");
    let emailTemplate = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders in the template
    emailTemplate = emailTemplate.replace("{{name}}", name).replace("{{cta_link}}", "https://signup.mailgun.com/new/signup");

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({username: 'api', key: MAILGUN_API_KEY});

    const emailData = {
      from: `Your Company <no-reply@${MAILGUN_DOMAIN}>`,
      to: email,
      subject: "Welcome to Our Platform!",
      html: emailTemplate,
    };

    mg.messages.create(MAILGUN_DOMAIN, emailData)
    .then(msg =>  NextResponse.json({ message: msg }, { status: 200 })) // logs response data
    .catch(err => console.error(err));

    return NextResponse.json({ message: "Welcome email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Mailgun error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}

