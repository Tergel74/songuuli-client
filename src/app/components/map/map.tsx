"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON, useMapEvents } from "react-leaflet";
import regionsData from "../../../data/mongolia_regions.json";
import countryData from "../../../data/mongolia.json";
import "leaflet/dist/leaflet.css";
import * as geojson from "geojson";
import styles from "./map.module.css";
import { LatLngBoundsExpression } from "leaflet";

export default function Map({ constituencies }: any) {
    const defaultProps = {
        center: {
            lat: 46.8250388,
            lng: 103.8499736,
        },
        zoomSnap: 0.5,
        zoom: 5.5,
        maxBounds: [
            [41.5541, 87.7513],
            [52.1354, 119.7724],
        ],
        minZoom: 5.5,
        maxZoom: 10,
    };

    const [zoomLevel, setZoomLevel] = useState(defaultProps.zoom);

    useEffect(() => {
        console.log(constituencies);
    });

    const handleRegionsClick = (e: {
        layer: {
            [x: string]: any;
            feature: { properties: { name: any } };
        };
    }) => {
        const regionName = e.layer.feature.properties.name;
        alert(regionName);
    };
    const colors = [
        "purple",
        "cyan",
        "brown",
        "navy",
        "olive",
        "crimson",
        "green",
        "red",
        "yellow",
        "gray",
        "blue",
        "maroon",
        "pink",
    ];

    const onEachFeature = (feature: any, layer: any) => {
        for (var i = 0; i < constituencies.length; i++) {
            for (const region of constituencies[i].regions) {
                if (feature.properties.name == region) {
                    if (constituencies[i].type == "outer") {
                        layer.setStyle({ color: colors[i] });
                    }
                } else if (feature.properties.name == "Улаанбаатар") {
                    layer.setStyle({ color: "black" });
                }
            }
        }
    };

    function MapLayer(controls: any) {
        if (controls.zoom < 6) {
            return <GeoJSON data={countryData as geojson.GeoJsonObject} />;
        } else {
            return (
                <GeoJSON
                    data={regionsData as geojson.GeoJsonObject}
                    eventHandlers={{
                        click: handleRegionsClick,
                    }}
                    onEachFeature={onEachFeature}
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
            zoomSnap={defaultProps.zoomSnap}
        >
            <ZoomListener />
            <MapLayer zoom={zoomLevel} />
        </MapContainer>
    );
}
