"use client" // we need this because we are using react hooks (useState)

import clsx from "classnames"
import { useEffect, useState } from "react"
import { MY_EMAIL } from "@/app/globals"
import styles from "./page.module.css"
import Image from "next/image"
import { useWindowWidth } from "./useWindowWidth"

export default function Home() {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < 768 // Adjust the breakpoint as needed

    const [clicked, setClicked] = useState(false)

    const copyEmailToClipboard = () => {
        // Directly within the user-initiated event
        navigator.clipboard
            .writeText(MY_EMAIL)
            .then(() => {
                setClicked(true)
                setTimeout(() => setClicked(false), 1000) // Reset after 1 second
            })
            .catch((err) => {
                console.error("Failed to copy: ", err)
            })
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/hello")
                const data = await response.text()
                console.log(data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
    }, [])

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>
                {isMobile ? "Bobby's website" : "Welcome to Bobby's website!"}
            </h1>
            <p className={styles.text}>
                My journey with computers started in the late-80s/early-90s and
                was inspired by my father, an ophthalmologist with a passion for
                technology. With him, I witnessed the birth of the internet and
                have been fascinated by programming and technology ever since.
            </p>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/dad-and-me.png"
                    alt="Picture of me and my dad"
                    layout="responsive"
                    width={456} // Original aspect ratio width
                    height={300} // Original aspect ratio height
                    objectFit="contain" // Optional, maintains aspect ratio
                />
                <p className={styles.imageCaption}>
                    A young Bobby with his dad in front of the computer.
                </p>
            </div>
            <p className={styles.text}>
                My father&apos;s venture, Systèmes Santé ACL, revolutionized
                medical billing in Quebec with software he developed. Following
                in his footsteps, I reprogrammed his software using VB .NET in
                the mid-2000s, a version still in use today!
            </p>
            <p className={styles.text}>
                As a current Computer Science teacher at LaSalle College, I have embraced generative AI. My approach
                involves utilizing generative AI to craft comprehensive and
                dynamic assignments, which are then rendered into PDFs for my
                students. These assignments are meticulously designed to provide
                a structured learning path, while also offering ample
                opportunities for creative problem-solving.
            </p>
            <p className={styles.text}>
                This integration of technology in education allows me to present
                complex concepts in an accessible manner, fostering a deeper
                understanding among students. It also encourages them to explore
                and apply these concepts independently, nurturing their critical
                thinking and innovation skills.
            </p>
            <p className={styles.text}>
                My goal is to create a learning environment where structure and
                creativity coexist, empowering students to excel in both
                theoretical knowledge and practical application. A blend of
                active learning with AI tools improves student engagement 
                and prepares them for the evolving technological landscape.
            </p>
            <p
                className={clsx(styles.email, { [styles.clicked]: clicked })}
                onClick={copyEmailToClipboard}
            >
                Click to copy my email to your clipboard
            </p>
        </section>
    )
}
