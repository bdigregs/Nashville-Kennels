import React, { useContext, useEffect, useState } from "react"
import { CustomerContext } from "./CustomerProvider";
import "./Customer.css"
import { useNavigate, useParams } from 'react-router-dom';

export const CustomerForm = () => {
    const { addCustomer, getCustomers, getCustomerById, updateCustomer } = useContext(CustomerContext)

    

    //for edit, hold on to state of animal in this view
    const [customer, setCustomer] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {customerId} = useParams();
	  const navigate = useNavigate();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newCustomer = { ...customer }
      //animal is an object with properties.
      //set the property to the new value
      newCustomer[event.target.name] = event.target.value
      //update state
      setCustomer(newCustomer)
    }

    const handleSaveCustomer = () => {
      if (parseInt(customer.Id) === 0) {
          window.alert("Please fill out the form")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (customerId){
          //PUT - update
          updateCustomer({
              id: customer.id,
              name: customer.name,
              address: customer.address
              
          })
          .then(() => navigate(`/customers/detail${customer.id}`))
        }else {
          //POST - add
          addCustomer({
              name: customer.name,
              address: customer.address
              
          })
          .then(() => navigate("/customers"))
        }
      }
    }

    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
        getCustomers().then(() => {
            if (customerId){
                getCustomerById(customerId)
                .then(customer => {
                    setCustomer(customer)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    }, [])
    

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    return (
      <form className="customerForm">
        <h2 className="customerForm__title">New Customer</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="customerName">Customer name: </label>
            <input type="text" id="CustomerName" name="name" required autoFocus className="form-control"
            placeholder="Customer name"
            onChange={handleControlledInputChange}
            defaultValue={customer.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="customerAddress">Customer address: </label>
            <input type="text" id="CustomerAddress" name="address" required autoFocus className="form-control"
            placeholder="Customer address"
            onChange={handleControlledInputChange}
            defaultValue={customer.address}/>
          </div>
        </fieldset>
    
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveCustomer()
          }}>
        {customerId ? <>Save Customer</> : <>Add Customer</>}</button>
      </form>
    )
}
