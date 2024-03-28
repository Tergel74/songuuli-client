"use client";

import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "../../data/mongolia_regions.json";
import "leaflet/dist/leaflet.css";
import * as geojson from "geojson";
import styles from "./map.module.css";
import { LatLngBoundsExpression } from "leaflet";

export default function Map() {
    const defaultProps = {
        center: {
            lat: 46.8250388,
            lng: 103.8499736,
        },
        zoom: 6.4,
        maxBounds: [
            [41.5541, 87.7513],
            [52.1354, 119.7724],
        ],
        minZoom: 6,
        maxZoom: 10,
    };

    const handleRegionsClick = (e: {
        layer: { feature: { properties: { name: any } } };
    }) => {
        const regionName = e.layer.feature.properties.name;
        alert(regionName);
    };

    return (
        <MapContainer
            className={styles.map}
            center={defaultProps.center}
            zoom={defaultProps.zoom}
            maxBounds={defaultProps.maxBounds as LatLngBoundsExpression}
            maxZoom={defaultProps.maxZoom}
            minZoom={defaultProps.minZoom}
        >
            <GeoJSON
                data={mapData as geojson.GeoJsonObject}
                eventHandlers={{ click: handleRegionsClick }}
            />
        </MapContainer>
    );
}
