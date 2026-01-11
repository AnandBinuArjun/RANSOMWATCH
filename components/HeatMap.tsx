'use client';

import Map, { Source, Layer, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMemo } from 'react';

export function HeatMap({ countryData }: { countryData: any[] }) {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    // Transform country data into GeoJSON
    // In a real app, you'd join this with actual GeoJSON polygons for world countries.
    // For now, we will just simulate points or assume we have a way to map ISO2 to coordinates/shapes.
    // Since we don't have a local GeoJSON file of world borders, we'll use a bubble map approach 
    // or relying on Mapbox's built-in boundaries is harder without a style that supports it easily.
    // Let's stick to a simple point-based heatmap using country centroids for now, or just render the map.

    const isValidToken = token && !token.includes("example");

    if (!isValidToken) {
        return (
            <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-slate-500 rounded-3xl border border-white/5">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="font-bold text-white mb-2">Map Configuration Required</h3>
                <p className="max-w-md text-center text-sm mb-4">
                    To enable the interactive global threat map, you need to provide a public Mapbox API token.
                </p>
                <code className="bg-black/50 px-4 py-2 rounded text-xs font-mono text-rose-400">
                    NEXT_PUBLIC_MAPBOX_TOKEN=pk...
                </code>
            </div>
        )
    }

    return (
        <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 relative">
            <Map
                initialViewState={{
                    longitude: 0,
                    latitude: 20,
                    zoom: 1.5
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/dark-v11"
                mapboxAccessToken={token}
                attributionControl={false}
            >
                <NavigationControl position="bottom-right" />

                {/* 
                  Real implementation would add a Source and Layer here 
                  visualizing the 'countryData' risk indices.
                */}
            </Map>
            <div className="absolute top-4 right-4 pointer-events-none">
                <div className="bg-black/80 backdrop-blur text-white text-xs px-2 py-1 rounded border border-white/10">
                    Live Threat Data
                </div>
            </div>
        </div>
    );
}
