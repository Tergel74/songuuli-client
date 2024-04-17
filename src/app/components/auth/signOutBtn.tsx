"use client";

import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function SignOutBtn() {
    const router = useRouter();

    const signOut = async () => {
        await deleteCookie("access_token");
        const token = await getCookie("access_token");
        if (!token) {
            router.push("/auth/signIn");
        }
    };

    return <button onClick={signOut}>Sign Out</button>;
}
