import { useState } from "react";
import type { Place } from "./Api/Place";
import LocationSearch from "./components/LocationSearch"
import Map from "./components/Map"



function App() {
  const [ place, setPlace] = useState<Place | null>(null);

  return <div className="h-screen w-screen grid grid-cols-12">
    <div className="col-span-3 p-2">
      <LocationSearch onPlaceClick={(p) => setPlace(p)} />
    </div>
    <div className="col-span-6">
      <Map place={place}/>
    </div>
    </div>
}

export default App
