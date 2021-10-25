import React from "react";
import { useDispatch, useSelector } from "react-redux";

export function Favorites() {
  const { favoritesLocations } = useSelector((state) => state.weatherModule);
  const locations = favoritesLocations;
  // console.log(location);

  return (
    <div>
      <div>{locations.map((location) => <div>{location.LocalizedName}</div>)}</div>
    </div>
  );
}
