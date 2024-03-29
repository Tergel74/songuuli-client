"use client";

import React, { useState } from "react";
import { MapContainer, GeoJSON, useMapEvents } from "react-leaflet";
import regionsData from "../../data/mongolia_regions.json";
import countryData from "../../data/mongolia.json";
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
        zoom: 6,
        maxBounds: [
            [41.5541, 87.7513],
            [52.1354, 119.7724],
        ],
        minZoom: 6,
        maxZoom: 10,
    };

    const [zoomLevel, setZoomLevel] = useState(defaultProps.zoom);

    const handleRegionsClick = (e: {
        layer: { feature: { properties: { name: any } } };
    }) => {
        const regionName = e.layer.feature.properties.name;
        alert(regionName);
    };

    function MapLayer(controls: any) {
        console.log(controls.zoom);
        if (controls.zoom < 7) {
            return <GeoJSON data={countryData as geojson.GeoJsonObject} />;
        } else {
            return (
                <GeoJSON
                    data={regionsData as geojson.GeoJsonObject}
                    eventHandlers={{ click: handleRegionsClick }}
                />
            );
        }
    }

    function ZoomListener() {
        const mapEvents = useMapEvents({
            zoomend: () => {
                setZoomLevel(mapEvents.getZoom());
            },
        });

        console.log(zoomLevel);

        return null;
    }

    return (
        <MapContainer
            className={styles.map}
            center={defaultProps.center}
            zoom={defaultProps.zoom}
            maxBounds={defaultProps.maxBounds as LatLngBoundsExpression}
            maxZoom={defaultProps.maxZoom}
            minZoom={defaultProps.minZoom}
        >
            <ZoomListener />
            <MapLayer zoom={zoomLevel} />
        </MapContainer>
    );
}
