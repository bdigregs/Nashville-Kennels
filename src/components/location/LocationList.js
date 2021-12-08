import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import { AnimalContext } from "../animal/AnimalProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { useNavigate } from "react-router"
import "./Location.css"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)
  const { animals, getAnimals } = useContext(AnimalContext)
  const { employees, getEmployees } = useContext(EmployeeContext)

  const navigate = useNavigate()
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
      .then(getEmployees)
      .then(getAnimals)

  }, [])


  return (
    <>
      <h2>Locations</h2>
      <button onClick={() => navigate("/locations/create")}>
        Add Location
      </button>
      <div className="locations">
        {console.log("LocationList: Render", locations)}
        {
          locations.map(location => {
            const allAnimals = animals.filter(a => a.locationId === location.id)
            const allEmployees = employees.filter(e => e.locationId === location.id)
            return <LocationCard
              key={location.id}
              location={location}
              animals={allAnimals}
              employees={allEmployees} />
          })
        }
      </div>
    </>
  )
}
