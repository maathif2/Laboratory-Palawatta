import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import axios from'axios';
import swal from 'sweetalert';

import '../../../style.css'


export default function AddPayment(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [employee_ID, setEmployeeID] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth ]= useState("");
  const [salary, setSalary] = useState("");
  const [employment_type, setEmploymentType] = useState("");
  const [optstaff, setStaff] = useState([]);


  const paymentData ={
    employee_ID,
    employment_type,
    name,
    month ,
    salary,
    staffID: employee_ID,

  }
  useEffect(function(){ 
    axios.get(`http://localhost:5000/api/staff`)
     .then((response) =>setStaff(response.data))
     .then((error) =>console.log(error));
  },[]);


  function submitForm(e){
    e.preventDefault();
    console.log(paymentData);

       // Validation 

       if(employee_ID.length === 0 || employment_type.length === 0 || name.length === 0 || month.length === 0 || salary.length === 0  ){
        swal(" Fields Cannot empty !","Please enter all data !", "error");
       }else{
    
    axios.post(`http://localhost:5000/api/payments`,paymentData)
    .then(function (response) {
     console.log(response);
      setEmployeeID('');
      setEmploymentType('');
      setName('');
      setMonth('');
      setSalary('');
    })
    .catch(function (error) {
      console.log(error);
      
    });
    swal({ text: "Successfully Added", icon: "success", button: "Okay!"})
    .then((value) => {
      window.location = '/vpayment'; 
   });}
  }

  const Staffget = async (e)=> {
    console.log(e)
  await axios.get(`http://localhost:5000/api/staff/${e.target.value}`)
  .then(function (response) {
    if(response.data != null){
      setEmploymentType(response.data['employment_type'])
      setName(response.data['name'])
    }else{
      alert('invalid StaffID')
    }
    })
  .catch(function (error) {
      console.log(error);
      alert(" details not added " );      
    })
  }

  return (
    <>
      <Button className='btn-dashb me-5' onClick={handleShow}>
        Add Salary Payment
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
      
          <Modal.Title id="contained-modal-title-vcenter">Add Salary Payment</Modal.Title>
           
        </Modal.Header>
        
  <Form onSubmit={submitForm}>
        <Modal.Body>

  
  <fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Col sm={2}>
      <Form.Label>
      Employee ID:
      </Form.Label>
    </Col>
    <Col sm={10}>
    <select className="Col-3" aria-label="Default select example" onChangeCapture={Staffget} onChange={(e)=>{setEmployeeID(e.target.value)}}  style={{height:"35px", width:"40%"}}>
    <option defaultValue="Select Employee ID">Select Employee ID</option>
       {optstaff.map(staff=>{
      return <option key={staff.staffID} value={staff.staffID}>{staff.staffID}</option>
    })}

    </select>
    </Col>
    
    </Form.Group>
  </fieldset>

  <fieldset>
  <Form.Group as={Row} className="mb-3 " controlId="formPlaintextEmail">
    <Col sm={2}>
      <Form.Label>
      Employee Type:
      </Form.Label>
    </Col>
    <Col sm={10}>
      <Form.Control type="text" value={employment_type}  readOnly/>
    </Col>
    
    </Form.Group>
  </fieldset>

  <fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Col sm={2}>
      <Form.Label>
       Name:
      </Form.Label>
    </Col>
    <Col sm={10}>
      <Form.Control type="text"  value={name} readOnly />
    </Col>
    
    </Form.Group>
  </fieldset>


  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
  <Form.Label column sm="2">
 Month
  </Form.Label>
  <Col sm={7}>
  <select className="Col-3" aria-label="Default select example" onChange={(e) => setMonth(e.target.value)} style={{height:"35px", width:"70%"}} required>
    <option selected>Select Month</option>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>
  </Col>
</Form.Group>
 

  {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Month
    </Form.Label>
    
    <Col sm="5">
      <Form.Control type="month"  onChange={(e)=>{setMonth(e.target.value)}}/>
    </Col>
  </Form.Group> */}
    
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
     Salary
    </Form.Label>
    <Col sm="5">
      <Form.Control type="text" onChange={(e)=>{setSalary(e.target.value)}}/>
    </Col>
  </Form.Group>

      </Modal.Body>
  
        <Modal.Footer>
        <Button variant="success"  type ="submit" onClick={handleClose}>
            Add Payment
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
         
        </Modal.Footer>
        </Form>
      </Modal>  
    </>
  );
}