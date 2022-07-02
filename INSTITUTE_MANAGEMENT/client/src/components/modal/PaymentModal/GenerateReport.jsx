import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Form } from "react-bootstrap";
import '../../../style.css'
import axios from 'axios';
import SearchMonth from './SearchMonth';
import { useReactToPrint } from 'react-to-print';





export default function GenerateReport(props) {
  const [payments, setPayment] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
    const componentRef=useRef();
    const handlePrint= useReactToPrint({
      content:()=>componentRef.current,
    });
 


    useEffect(() => {
        axios.get(`http://localhost:5000/api/payments/`).then(res=> {
          setPayment(res.data);

        })
            .catch(err => {
                console.log(err);
            })
          
    
    })

   
        return (
          <>
             <Button className='btn-dashbc me-5' onClick={handleShow}>
        Genarate Report
      </Button>
      
            <Modal show={show}        
              size="xl"
              centered
            >
              <Modal.Header>
            
              <div className="">
<SearchMonth/>
  </div>
                 
              </Modal.Header>
              <Modal.Body>
      
      
   
                
      
      <fieldset>
            
      <div ref={componentRef} >
<div className="row">

</div>
      
<center><h2>Report Of All Payments </h2></center>
<table className="table table-striped styled-table ">
    <thead className="thead-dark" >
        <tr>
         
            <th scope="col">Payment ID</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee Type</th>
            <th scope="col">Name</th>
            <th scope="col">Month</th>
            <th scope="col">Salary</th> 
    
        </tr>
    </thead>
  
    <tbody>
  

  
        {
            payments.map(payments => <tr key={payments.paymentid}>
          

                <td>{payments.paymentid}</td>
                <td>{payments.employee_ID}</td>
                <td>{payments.employment_type}</td>
                <td>{payments.name}</td>
                <td>{payments.month}</td>
                <td>{payments.salary}</td>
                              
            </tr>
            
            )
            
        }

    </tbody>
   
</table>
</div>



      </fieldset>
    
        </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick={handlePrint}>
        Print Report
        </Button>
      
      <Button variant="danger" onClick={handleClose}>
        Cancel
      </Button>
           
          </Modal.Footer>
        </Modal>
      </>
      );  
}
