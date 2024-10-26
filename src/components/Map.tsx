import type { Place } from "../Api/Place";
import 'leaflet/dist/leaflet.css';
import { Map as LeafletMap } from 'leaflet';
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useEffect, useRef } from "react";
 

interface MapProps {
    place: Place | null
}


export default function Map({ place } : MapProps) {
    const mapref = useRef<LeafletMap | null>(null);

    useEffect(() =>{
        if (mapref.current && place){
            mapref.current.flyTo([place.latitude, place.longitude])
        }
    },[place])

    return <MapContainer ref={mapref} center={[40.7, -74]} zoom={12} scrollWheelZoom className="h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {place && <Marker position={[place.latitude, place.longitude]}/>}
    </MapContainer>
}