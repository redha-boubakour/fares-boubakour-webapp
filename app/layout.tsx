import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/page";
import Transition from "../components/Transition/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Farès BOUBAKOUR",
    description: "Site web de Farès BOUBAKOUR",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                <Transition>{children}</Transition>
            </body>
        </html>
    );
}
