import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useNavigate } from "react-router-dom"


export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
	const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <section className="location">
      <h2 className="location__name">{location.name}</h2>
      <div className="location_address">{location.address}</div>

      <h3 className="employees_header">Employees Working Here</h3>
      <div className="employee_names">{location.employees?.map(employeeObj => <p key={employeeObj.id}>{employeeObj.name}</p>)}
      </div>

      <h3 className="animals-header">Animals Present</h3>
      <div className="animal-names">{location.animals?.map(animalObj => <p key={animalObj.id}>{animalObj.name}</p>)}
      </div>
      <button onClick={() => {
    navigate(`/locations/edit/${location.id}`)
}}>Edit</button>

    </section>
  )
}
