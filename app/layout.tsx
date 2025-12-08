import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "BNS International Inc - Inspired Performance",
    description: "Hire Better, Faster! Leading IT staffing and Software Development Company.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
