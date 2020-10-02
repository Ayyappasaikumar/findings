
import React, { useState, useEffect } from 'react'
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default function CustomerDetails (props) {
  const [state,setState]=useState({"selectedCustomer":1,"customerList":null})

 

  useEffect((props) =>{
    // getCustomerDetails(props.val)
    // getCustomerDetails=(id) =>{
    // axios.get('assets/samplejson/customer' + id + '.json').then(response => {
        setState({customerDetails: [{
          "id": 1,
          "name": "John Smith",
          "email": "jsmith@test.com",
          "phone": "123456789"
        }, {
          "id": 2,
          "name": "ABCD",
          "email": "abcd@test.com",
          "phone": "987654321"
        }, {
          "id": 3,
          "name": "Tyrion",
          "email": "tyrion@test.com",
          "phone": "123412345"
        }]})
     
    
    getCustomerDetails(props.val)
    
  },[])


 
    if (!state.customerDetails)
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{state.customerDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {state.customerDetails.data.name}</p>
          <p>Email : {state.customerDetails.data.email}</p>
          <p>Phone : {state.customerDetails.data.phone}</p>
          <p>City : {state.customerDetails.data.city}</p>
          <p>State : {state.customerDetails.data.state}</p>
          <p>Country : {state.customerDetails.data.country}</p>
          <p>Organization : {state.customerDetails.data.organization}</p>
          <p>Job Profile : {state.customerDetails.data.jobProfile}</p>
          <p>Additional Info : {state.customerDetails.data.additionalInfo}</p>
        </Panel.Body>
      </Panel>
    </div>)
  }
