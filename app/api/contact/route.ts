import { sendContactMessage } from "@/lib/email";
import { NextResponse } from "next/server";

type ContactPayload = {
    name?: unknown;
    email?: unknown;
    message?: unknown;
};

export async function POST(request: Request) {
    let payload: ContactPayload;

    try {
        payload = await request.json();
    } catch {
        return NextResponse.json(
            { error: "Please send a valid form submission." },
            { status: 400 },
        );
    }

    const name = typeof payload.name === "string" ? payload.name.trim() : "";
    const email = typeof payload.email === "string" ? payload.email.trim() : "";
    const message =
        typeof payload.message === "string" ? payload.message.trim() : "";

    if (!name || !email || !message) {
        return NextResponse.json(
            { error: "Name, email, and message are required." },
            { status: 400 },
        );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return NextResponse.json(
            { error: "Please enter a valid email address." },
            { status: 400 },
        );
    }

    try {
        await sendContactMessage(name, email, message);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Unable to send contact message", error);
        return NextResponse.json(
            {
                error: "The message could not be sent. Please email me directly.",
            },
            { status: 500 },
        );
    }
}
