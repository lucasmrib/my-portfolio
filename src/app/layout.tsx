import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '500', '600']
});

export const metadata: Metadata = {
    title: "Lucas Ribeiro",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body className={` ${poppins.className} max-w-screen min-h-screen bg-zinc-800`}>{children}</body>
        </html>
    );
}