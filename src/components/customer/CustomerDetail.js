import React, { useContext, useEffect, useState } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"
import { useParams, useNavigate } from "react-router-dom"

export const CustomerDetail = () => {
  const { getCustomerById, deleteCustomer } = useContext(CustomerContext)

  const [customer, setCustomer] = useState({})

  const { customerId } = useParams();

  const navigate = useNavigate()

  const handleRelease = () => {
    deleteCustomer(customer.id)
      .then(() => {
        navigate("/customers")
      })
  }

  useEffect(() => {
    console.log("useEffect", customerId)
    getCustomerById(customerId)
      .then((response) => {
        setCustomer(response)
      })
  }, [])

  return (
    <section className="customers">
      <h3 className="customer__name">{customer.name}</h3>
      <div className="customer__address">Address: {customer.address}</div>
      <button onClick={() => {
        navigate(`/customers/edit/${customer.id}`)
      }}>Edit</button>
      <button onClick={handleRelease}>Delete Customer</button>



    </section>
  )
}
