import React, { useRef } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Row, Form, ModalTitle } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

export default function SearchG(props) {
    const [payments, setPayment] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const componentRef=useRef();
    const handlePrint= useReactToPrint({
      content:()=>componentRef.current,
    });



    useEffect(() => {
            axios.get("http://localhost:5000/api/payments/grp/" + props.payments).then(response => {
                setPayment(response.data);
                console.log(response.data);

            })
                .catch(err => {
                    console.log(err);
                })

    })



    return (
        <>
            <Modal.Header>
                <div class="col-md-12 text-center">
                    <Modal.Title id="contained-modal-title-vcenter">Report</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>


                <Form>
                     
      <fieldset>
            
            <div ref={componentRef}>
      <div className="row">
       </div>
            
      <center><h2>Report of Payments Of A Specific Month</h2></center>
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
            <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={handlePrint}>
        Print Report
        </Button>
        </div>
       
      
      
        
            </Form>
                
          
              

            </Modal.Body>
            

        </>
    );
}