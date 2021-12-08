import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useNavigate } from "react-router-dom"

export const EmployeeDetail = () => {
  const { getEmployeeById, deleteEmployee } = useContext(EmployeeContext)

  const [employee, setEmployees] = useState({})

  const { employeeId } = useParams();

  const navigate = useNavigate();

  const handleRelease = () => {
    deleteEmployee(employee.id)
      .then(() => {
        navigate("/employees")
      })
  }

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
      .then((response) => {
        setEmployees(response)
      })
  }, [])

  return (
    <section className="employees">
      <h3 className="employee__name">{employee.name}</h3>
      {/* What's up with the question mark???? See below.*/}
      <div className="employee__address">Location: {employee.location?.name}</div>
      <button onClick={() => {
        navigate(`/employees/edit/${employee.id}`)
      }}>Edit</button>
      <button onClick={handleRelease}>Delete Employee</button>


    </section>
  )
}
