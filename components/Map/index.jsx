import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Polygon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
/* import L from "leaflet"; */
import React, { useEffect, useState } from "react";
import icon from "./constants";
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import axios from "axios";
import { data } from "./cordinates";
import ConfirmAddressButton from "./ConfirmAddressButton";
import { useCallback } from "react";

function Map() {
  const [addres, setAddres] = useState();
  const [lastPosition, setLastPosition] = useState("");

  const getData = async (lat, long) => {
    await axios
      .get(
        `https://api.maptiler.com/geocoding/${lat},${long}.json?key=sskMMl900jLnaHd2iT14`
      )
      .then(function (response) {
        setAddres(response?.data?.features?.[0]?.place_name_ar);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);
    const map = useMap();

    const onMove = useCallback(() => {
      setPosition(map.getCenter());
      /*  setLastPosition(map.getCenter()); */
    }, [map]);

    useEffect(() => {
      map.on("move", onMove);
      return () => {
        map.off("move", onMove);
      };
    }, [map, onMove]);

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);

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
      {/*       <div onClick={() => getData(lastPosition.lat, lastPosition.lng)}> */}
      <ConfirmAddressButton />
      {/*   </div> */}
      <LocationMarker />
    </MapContainer>
  );
}

export default Map;
