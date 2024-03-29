"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Map from "./components/map";
import { getCookie } from "cookies-next";
import {
    GoogleMap,
    StreetViewPanorama,
    useLoadScript,
} from "@react-google-maps/api";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const token = getCookie("access_token");
        if (!token) {
            router.push("/auth/signIn");
        }
    });

    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    // });

    // if (!isLoaded) {
    //     return <div>Loading...</div>;
    // }

    // return <Map />;

    return (
        <main className={styles.main}>
            <Map />
        </main>
    );
}

// function Map() {
//     return (
//         <GoogleMap
//             zoom={6}
//             center={{ lat: 46.8250388, lng: 103.8499736 }}
//             mapContainerClassName="map-container"
//             options={{
//                 streetViewControl: false,
//                 disableDefaultUI: true,
//                 minZoom: 6,
//             }}
//         ></GoogleMap>
//     );
// }
