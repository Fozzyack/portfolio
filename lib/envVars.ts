const getSMTPVariables = () => {
    let port = process.env.SMTP_PORT;
    let numberPort: number;
    try {
        numberPort = Number(port);
    } catch (error) {
        throw new Error("SMTP_PORT is not a valid number");
    }
    if (!process.env.SMTP_HOST) {
        throw new Error("SMTP_HOST is not defined");
    }
    if (!process.env.SMTP_PORT || isNaN(numberPort)) {
        throw new Error("SMTP_PORT is not defined");
    }
    if (!process.env.SMTP_REQUIRE_AUTH) {
        throw new Error("SMTP_REQUIRE_AUTH is not defined");
    }
    if (!process.env.SMTP_SECURE) {
        throw new Error("SMTP_SECURE is not defined");
    }
    if (!process.env.SMTP_USER) {
        throw new Error("SMTP_USER is not defined");
    }
    if (!process.env.SMTP_PASS) {
        throw new Error("SMTP_PASS is not defined");
    }
    const smtp = {
        host: process.env.SMTP_HOST,
        port: numberPort,
        require_auth: process.env.SMTP_REQUIRE_AUTH === "true",
        secure: process.env.SMTP_SECURE === "true",
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    };
    return smtp;
};

export { getSMTPVariables };
