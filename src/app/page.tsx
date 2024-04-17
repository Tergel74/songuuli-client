"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Map from "./components/map/map";
import { getCookie } from "cookies-next";
import { getConstituencies } from "@/api/repositories/map.repository";

export default function Home() {
    const router = useRouter();
    const [constituencies, setConstituencies] = useState([]);

    useEffect(() => {
        const token = getCookie("access_token");
        if (!token) {
            router.push("/auth/signIn");
        }
        if (constituencies.length == 0) {
            getRegions();
        }
    });

    const getRegions = async () => {
        const data = await getConstituencies();
        setConstituencies(data[1]);
    };

    return (
        <main className={styles.main}>
            <Map constituencies={constituencies} />
        </main>
    );
}
