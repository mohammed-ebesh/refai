"use client";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Polygon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import React, { useEffect, useState } from "react";
import icon from "./constants";
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import { data } from "./cordinates";
import ConfirmAddressButton from "./ConfirmAddressButton";
import { useCallback } from "react";
import { MdOutlineMyLocation } from "react-icons/md";
var pointInPolygon = require("point-in-polygon");
function Map() {
  const [canAllowedArea, setAllowedArea] = useState(false);
  const [getMyLocation, setGetMyLocation] = useState(true);
  const checkIfAdreesIsInAllowedArea = (cordinates) => {
    if (pointInPolygon(cordinates, data) === true) {
      setAllowedArea(true);
    } else {
      setAllowedArea(false);
    }
  };

  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMap();
    const onMove = useCallback(() => {
      setPosition(map.getCenter());
      checkIfAdreesIsInAllowedArea([map.getCenter().lat, map.getCenter().lng]);
    }, [map]);

    useEffect(() => {
      map.on("move", onMove);
      return () => {
        map.off("move", onMove);
      };
    }, [map, onMove]);

    useEffect(() => {
      if (getMyLocation === true) {
        map.locate().on("locationfound", function (e) {
          setPosition(e.latlng);
          map.flyTo(e.latlng, map.getZoom());
        });
      }

      setGetMyLocation(false);
    }, [getMyLocation === true]);

    return position === null ? null : (
      <Marker position={position} icon={icon}></Marker>
    );
  }

  return (
    <MapContainer
      style={{ height: "75vh" }}
      center={[31.205753, 29.924526]}
      zoom={18}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polygon positions={data} />

      <ConfirmAddressButton canAllowedArea={canAllowedArea} />
      <div
        onClick={() => setGetMyLocation(true)}
        className="absolute z-[1000] bg-white bottom-[4rem] border right-2 hover:bg-[#f8f7f7] cursor-pointer w-[30px] h-[30px] flex items-center justify-center text-xl rounded-sm"
      >
        <MdOutlineMyLocation />
      </div>
      <LocationMarker />
    </MapContainer>
  );
}

export default Map;
