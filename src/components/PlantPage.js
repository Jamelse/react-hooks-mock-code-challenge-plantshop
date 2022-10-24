import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plant => setPlants(plant))
  },[])

 
 const plantSearch = plants.filter((plant) => {
  return plant.name.toLowerCase().includes(String(search.toLowerCase()))
})

  function onPlantSubmitHandler(newPlant){
    setPlants([...plants, newPlant])
  }

  return (
    <main>
      <NewPlantForm onPlantSubmit={onPlantSubmitHandler}/>
      <Search setSearch={setSearch} currentSearch={search}/>
      <PlantList plants={plantSearch} />
    </main>
  );
}

export default PlantPage;
