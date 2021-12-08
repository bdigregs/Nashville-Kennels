import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({ location, employees, animals }) => (
    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/detail/${location.id}`}>
            { location.name }
          </Link></h3>
        <address className="location__address">{location.address}</address>
        <div className="number-of-animals">{animals.length} animals</div>
        <div className="number-of-employees">{employees.length} employees</div>
    </section>
)