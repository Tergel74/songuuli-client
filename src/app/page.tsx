"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Map from "./components/map";
import { getCookie } from "cookies-next";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const token = getCookie("access_token");
        if (!token) {
            router.push("/auth/signIn");
        }
    });

    return (
        <main className={styles.main}>
            <Map />
        </main>
    );
}
