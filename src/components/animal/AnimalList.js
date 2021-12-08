import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useNavigate } from "react-router"


export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: Initial render before data")
    getLocations()
    .then(getCustomers)
    .then(getAnimals)

  }, [])



const navigate = useNavigate()

    return (
        
        <>
            <h2>Animals</h2>
            <button onClick={() => navigate("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
    
      {
        animals.map(animal => {
            const owner = customers.find(c => c.id === animal.customerId)
            const clinic = locations.find(l => l.id === animal.locationId)

          return <AnimalCard key={animal.id} 
                    location={clinic}
                    customer={owner}
                    animal={animal} />
        })
      }
    </div>
        </>
    )}