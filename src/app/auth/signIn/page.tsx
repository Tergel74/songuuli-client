"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { User } from "../../../api/models/user.model";
import { signIn } from "@/api/repositories/auth.repository";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const [nationalId, setNationalId] = useState<String>();
    const [password, setPassword] = useState<String>();
    const router = useRouter();
    const logIn = async () => {
        const data = await signIn(nationalId!, password!);
        console.log(data);
        if (data) {
            router.push("/");
        }
    };

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.heading}>Sign In</div>
                <input
                    type="text"
                    id="national_id"
                    onChange={(event) => setNationalId(event.target.value)}
                />
                <input
                    type="text"
                    id="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button className={styles.btn} onClick={logIn} id="sign_in_btn">
                    Нэвтрэх
                </button>
            </div>
        </main>
    );
}
