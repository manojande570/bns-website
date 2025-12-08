import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "BNS International Inc - Inspired Performance",
    description: "Hire Better, Faster! Leading IT staffing and Software Development Company.",
    icons: {
        icon: "https://www.bnsinc.us/assets/images/logo-white.png",
        apple: "https://www.bnsinc.us/assets/images/logo-white.png",
    },
    openGraph: {
        title: "BNS International Inc - Inspired Performance",
        description: "Hire Better, Faster! Leading IT staffing and Software Development Company.",
        url: "https://bnsinc.us",
        siteName: "BNS International Inc",
        images: [
            {
                url: "https://www.bnsinc.us/assets/images/logo-white.png",
                width: 1200,
                height: 630,
                alt: "BNS International Inc Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "BNS International Inc - Inspired Performance",
        description: "Hire Better, Faster! Leading IT staffing and Software Development Company.",
        images: ["https://www.bnsinc.us/assets/images/logo-white.png"],
        creator: "@bnsincus",
    },
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
