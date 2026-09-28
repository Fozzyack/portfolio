import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist_Mono, Syne } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const syne = Syne({
    variable: "--font-syne",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Frasier Sundra | Software Engineer",
    description:
        "The portfolio of Frasier Sundra, a software engineer based in Perth, WA.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistMono.variable} ${syne.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <SmoothScroll>{children}</SmoothScroll>
            </body>
            <Analytics />
        </html>
    );
}
