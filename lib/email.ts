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
