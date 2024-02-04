"use client" // we need this because we are using react hooks (useState)

import clsx from "classnames"
import { useEffect, useState } from "react"
import { MY_EMAIL } from "@/app/globals"
import styles from "./page.module.css"
import Image from "next/image"

export default function Home() {
    const [clicked, setClicked] = useState(false)

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(MY_EMAIL)
        setClicked(true)
        setTimeout(() => setClicked(false), 1000) // remove the 'clicked' class after 1 seconds
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
            <h1 className={styles.title}>Welcome to Bobby's World!</h1>
            <p className={styles.text}>
                Hi there! I'm Bobby Connolly. My journey with computers started
                in the mid-80s, inspired by my father, an ophthalmologist with a
                passion for technology. I witnessed the birth of the internet in
                the 90s and have been fascinated by programming and
                technological innovations ever since.
            </p>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/dad-and-me.png"
                    alt="Picture of me and my dad"
                    width={456}
                    height={300}
                />
                <p className={styles.imageCaption}>
                    A young Bobby with his dad in front of the computer.
                </p>
            </div>
            <p className={styles.text}>
                My father's venture, Systèmes Santé ACL, revolutionized medical
                billing in Quebec with software he developed. Following in his
                footsteps, I reprogrammed his software using VB .NET in the
                mid-2000s, a version still in use today!
            </p>
            <p className={styles.text}>
                As a current Computer Science teacher at Champlain College
                Saint-Lambert, I have embraced generative AI. My approach
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
                theoretical knowledge and practical application. This blend of
                traditional teaching with advanced AI tools not only enhances
                the overall educational experience but also prepares students
                for the evolving technological landscape they will encounter in
                their future careers.
            </p>
            <p className={styles.text}>
                On my website, you'll find a portfolio showcasing my work, a
                blog with my thoughts and insights, and ways to connect with me.
                Whether you're interested in programming, AI, or just want to
                say hi, feel free to explore and reach out!
            </p>
            <p
                className={clsx(styles.email, { [styles.clicked]: clicked })}
                onClick={copyEmailToClipboard}
                style={{ marginBottom: "10rem", marginLeft: "5rem" }}
            >
                Click to copy my email to your clipboard
            </p>
        </section>
    )
}
