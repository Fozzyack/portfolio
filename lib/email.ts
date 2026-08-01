import { getSMTPVariables } from "./envVars";
import nodemailer from "nodemailer";

const setupTransport = () => {
    const smtp = getSMTPVariables();
    let transport = nodemailer.createTransport({
        host: smtp.host,
        port: smtp.port,
        secure: smtp.secure,
    });
    if (smtp.require_auth) {
        transport = nodemailer.createTransport({
            host: smtp.host,
            port: smtp.port,
            secure: smtp.secure,
            auth: {
                user: smtp.user,
                pass: smtp.pass,
            },
        });
    }

    return transport;
};

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");

const sendContactMessage = async (
    name: string,
    email: string,
    message: string,
) => {
    const smtp = getSMTPVariables();
    const transport = setupTransport();
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transport.sendMail({
        from: "portfolio@frasier.dev",
        to: smtp.to,
        replyTo: email,
        subject: `Portfolio contact form: ${name} <${email}>`,
        text: message,
        html: `
            <div style="margin:0;background:#0a0b0d;color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;padding:40px 20px">
                <div style="max-width:640px;margin:0 auto">
                    <div style="border-bottom:1px solid #292d32;padding-bottom:16px;color:#71777f;font-family:monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase">
                        04 / Contact
                    </div>
                    <div style="padding:40px 0 32px">
                        <div style="color:#a5f3fc;font-family:monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase">
                            New project enquiry
                        </div>
                        <h1 style="margin:20px 0 0;color:#f4f4f5;font-size:42px;font-weight:500;letter-spacing:-2px;line-height:1">
                            Let&apos;s make something useful.
                        </h1>
                    </div>
                    <div style="border-top:1px solid #292d32;border-bottom:1px solid #292d32;padding:24px 0">
                        <div style="padding-bottom:20px">
                            <div style="color:#71777f;font-family:monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase">From</div>
                            <div style="padding-top:8px;color:#f4f4f5;font-size:16px">${safeName}</div>
                        </div>
                        <div style="padding-bottom:20px">
                            <div style="color:#71777f;font-family:monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase">Email</div>
                            <a href="mailto:${safeEmail}" style="display:inline-block;padding-top:8px;color:#a5f3fc;font-size:16px">${safeEmail}</a>
                        </div>
                        <div>
                            <div style="color:#71777f;font-family:monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase">Message</div>
                            <div style="padding-top:8px;color:#d4d4d8;font-size:16px;line-height:1.6">${safeMessage}</div>
                        </div>
                    </div>
                    <div style="padding-top:24px;color:#71777f;font-family:monospace;font-size:10px;letter-spacing:1px;text-transform:uppercase">
                        Sent from fsundra.dev contact form
                    </div>
                </div>
            </div>
        `,
    });
};

export { sendContactMessage };
