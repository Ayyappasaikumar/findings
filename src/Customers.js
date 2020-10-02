// import React, {Component} from 'react';
import React, {useState, useEffect } from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'
import axios from 'axios'

export default  function Customers () {
  const [state,setState]=useState({"selectedCustomer":1,"customerList":null})

  
  useEffect (() => {
    getCustomerData =()=>{
      axios.get("assets/samplejson/customerlist.json").then(response => {
        setState({customerList: response})
      })
    };
   
    getCustomerData();
    console.log(customerList)
  },[])


  //Function to get the Customer Data from json
  
    if (!state.customerList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {

          state.customerList.data.map(customer => <Panel bsStyle="info" key={customer.name} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{customer.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{customer.email}</p>
              <p>{customer.phone}</p>
              <Button bsStyle="info" onClick={() => setState({selectedCustomer: customer.id})}>

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-6">
        <CustomerDetails val={state.selectedCustomer}/>
      </div>
    </div>)
  }


