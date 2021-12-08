
import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { EmployeeCard } from "./EmployeeCard";
import "./Employee.css"
import { useNavigate } from "react-router";


export const EmployeeList = () => {
  
  const { getEmployees, employees} = useContext(EmployeeContext)

  const navigate = useNavigate()
  
  // Initialization effect hook -> Go get employee data
    useEffect(()=>{
      getEmployees()
  }, [])

  return (
      <>
          <h1>Employees</h1>
          <button onClick={() => navigate("/employees/create")}>
                Add Employee
            </button>
          <div className="employees">
              {
                  employees.map(employee => {
                      return <EmployeeCard key={employee.id} employee={employee} />
                  })
              }
          </div>
      </>
  )
}


// import React, { useContext, useEffect } from "react"
// import { EmployeeContext } from "./EmployeeProvider"
// import { EmployeeCard } from "./EmployeeCard"
// import { LocationContext } from "../location/LocationProvider"
// import "./Employee.css"
// import { useNavigate } from "react-router"

// export const EmployeeList = ({history}) => {
//   const { employees, getEmployees } = useContext(EmployeeContext)
//   const {locations, getLocations} = useContext(LocationContext)
//   //useEffect - reach out to the world for something
//   useEffect(() => {
//     // console.log("EmployeeList: useEffect - getEmployees")
//     getEmployees()
//     .then(getLocations)
    

//   }, [])


  
//   const navigate = useNavigate()

//   return (
//   <>
//     <h2>Employees</h2>
//     <button onClick={() => navigate("/employees/create")}>
//                 New Hire
//             </button>
//             <div className="employees">

//     <div className="employees">
//       {console.log("EmmployeeList: Render", employees)}
//       {
//         employees.map(employee => {
//           return <EmployeeCard 
//           key={employee.id} 
//           employee={employee} />
//         })
//       }
//     </div>
//     </>
//   )
// }
