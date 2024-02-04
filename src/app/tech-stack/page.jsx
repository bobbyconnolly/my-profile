import Image from "next/image"
import styles from "./page.module.css"

const techStack = [
    {
        key: "react",
        name: "React",
        description: "A JavaScript library for building user interfaces",
        url: "https://reactjs.org/",
        svg: "react.svg",
    },
    {
        key: "next-js",
        name: "Next.js",
        description:
            "A React framework for building production-ready websites and applications",
        url: "https://nextjs.org/",
        svg: "next.svg",
    },
    {
        key: "github",
        name: "GitHub Codespaces",
        description: "A cloud-based development environment",
        url: "https://github.com/features/codespaces",
        svg: "github.svg",
    },
]

export default function MyTechStack() {
    return (
        <section className={styles.section}>
            {/* <ul className={styles.list}>
                {techStack.map((tech) => (
                    <a
                        key={tech.key}
                        href={tech.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <li className={styles["list-item"]} key={tech.name}>
                            <p className={styles.link}>{tech.name}</p>
                            <p className={styles.description}>
                                {tech.description}
                            </p>
                            <div className={styles["image-wrapper"]}>
                                <Image
                                    className={styles.logo}
                                    src={`/${tech.svg}`}
                                    alt={`${tech.name} Logo`}
                                    width={100}
                                    height={50}
                                    priority
                                />
                            </div>
                        </li>
                    </a>
                ))}
            </ul> */}
        </section>
    )
}
