import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

// export const EmployeeCard = () => (
//     <section className="employee">
//         <h3 className="employee__name">Emma Beaton</h3>
//         <div className="employee__address">Nashville Kennels North</div>
//     </section>
// )

//Ch11 update
export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">
        <Link to={`/employees/detail/${employee.id}`}>
            { employee.name }
          </Link>
          </h3>
        <address className="employee__address">{employee.location.name}</address>
    </section>
)
