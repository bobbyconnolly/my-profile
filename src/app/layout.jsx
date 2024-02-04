import clsx from "classnames"
import localFont from "@next/font/local"

import Logo from "@/components/logo"
import Navbar from "@/components/navbar"
import "./globals.css"

import styles from "./layout.module.css"
import { MY_NAME } from "./globals"

const kaisei = localFont({
    src: "../../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
    weight: "700",
    variable: "--font-kaisei",
    display: "swap",
})

export const metadata = {
    title: "Bobby Connolly",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1.0",
    description: "Bobby's personal website.",
    keywords: "personal, website",
    author: MY_NAME,
    icons: {
        icon: "/favicons/favicon-16x16.png",
        shortcut: "/favicons/favicon.ico",
        apple: "/favicons/apple-touch-icon.png",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={kaisei.className}>
            <body>
                <div className={styles["grid-container"]}>
                    <div className={clsx(styles.logo, styles["grid-item"])}>
                        <Logo />
                    </div>
                    <div className={clsx(styles.navbar, styles["grid-item"])}>
                        <Navbar />
                    </div>
                    <main className={clsx(styles.main, styles["grid-item"])}>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}
