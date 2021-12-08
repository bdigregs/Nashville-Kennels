import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { CustomerForm } from "./customer/CustomerForm"
import { CustomerDetail } from "./customer/CustomerDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"

export const ApplicationViews = () => {
    return (

        <CustomerProvider>
            <LocationProvider>
                <EmployeeProvider>
                    <AnimalProvider>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="animals/*" element={<AnimalList />} />
                            <Route path="animals/create/*" element={<AnimalForm />} />
                            <Route path="animals/detail/:animalId/*" element={<AnimalDetail />} />
                            <Route path="animals/edit/:animalId/*" element={<AnimalForm />} />
                            <Route path="customers/*" element={<CustomerList />} />
                            <Route path="customers/create/*" element={<CustomerForm />} />
                            <Route path="customers/detail/:customerId/*" element={<CustomerDetail />} />
                            <Route path="customers/edit/:customerId/*" element={<CustomerForm />} />
                            <Route path="locations/*" element={<LocationList />} />
                            <Route path="locations/create/*" element={<LocationForm />} />
                            <Route path="locations/detail/:locationId/*" element={<LocationDetail />} />
                            <Route path="locations/edit/:locationId/*" element={<LocationForm />} />
                            <Route path="employees/*" element={<EmployeeList />} />
                            <Route path="employees/detail/:employeeId/*" element={<EmployeeDetail />} />
                            <Route path="employees/create/*" element={<EmployeeForm />} />
                            <Route path="employees/edit/:employeeId/*" element={<EmployeeForm />} />



                        </Routes>
                    </AnimalProvider>
                </EmployeeProvider>
            </LocationProvider>
        </CustomerProvider>

    )
}

