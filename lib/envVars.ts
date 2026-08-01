const getSMTPVariables = () => {
    const numberPort = Number(process.env.SMTP_PORT);
    if (!process.env.SMTP_HOST) {
        throw new Error("SMTP_HOST is not defined");
    }
    if (!process.env.SMTP_PORT || !Number.isInteger(numberPort)) {
        throw new Error("SMTP_PORT must be a valid port number");
    }
    if (!process.env.SMTP_REQUIRE_AUTH) {
        throw new Error("SMTP_REQUIRE_AUTH is not defined");
    }
    if (!process.env.SMTP_SECURE) {
        throw new Error("SMTP_SECURE is not defined");
    }
    if (!process.env.SMTP_TO) {
        throw new Error("SMTP_TO is not defined");
    }
    const requireAuth = process.env.SMTP_REQUIRE_AUTH === "true";

    if (requireAuth && !process.env.SMTP_USER) {
        throw new Error("SMTP_USER is not defined");
    }
    if (requireAuth && !process.env.SMTP_PASS) {
        throw new Error("SMTP_PASS is not defined");
    }
    const smtp = {
        host: process.env.SMTP_HOST,
        port: numberPort,
        require_auth: requireAuth,
        to: process.env.SMTP_TO,
        secure: process.env.SMTP_SECURE === "true",
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
        recipient: process.env.CONTACT_EMAIL || "fsundra@gmail.com",
    };
    return smtp;
};

export { getSMTPVariables };
