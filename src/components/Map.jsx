import { createSignal, onMount } from 'solid-js';

import MapGL from "solid-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

import './Map.css';

export default (props) => {
  const [viewport, setViewport] = createSignal({
    center: [172.78, -40.59],
    zoom: 5.2,
  });

  onMount(() => {
    console.log(props)
    setViewport({
      zoom: props.zoom,
      center: JSON.parse(props.center),
    });
  });

  return (
    <>
      <MapGL
        options={{ style: "mb:outdoor", accessToken: "pk.eyJ1IjoiamFtZXN3aWxtb3QiLCJhIjoiY2x5ZTQ1MnpiMGRoNjJrcHYxZzB3MjM5MCJ9.WEI3PEtucKnNpV-kZtnqgw" }}
        viewport={viewport()}
        onViewportChange={(evt) => setViewport(evt)}
      >
      </MapGL>
    </>
  );
}
