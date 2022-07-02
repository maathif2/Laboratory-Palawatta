import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import "../../../style.css";
import axios from "axios";
// import { Component } from "react";  



export default function AddFees(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [student_id, setStudentID] = useState("");
  const [name, setStudentName] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [ teacher_name, setTeacherName] = useState("");
  const [month, setMonth] = useState("");
  const [amount, setAmount] = useState("");
  const [payment_slip, setPaymentSlip] = useState("ads");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPaymment = {
      student_id,
      name,
      grade,
      subject,
      teacher_name,
      month,
      amount,
      payment_slip
    };
    // if (file) {
    //   const data =new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   newSlip.payment_slip = filename;
    //   try {
    //     await axios.post("/upload", data);
    //   } catch (err) {}
    // }
    // try {
    //  await axios.post("http://localhost:5000/api/OnlineFeeses", newPaymment);
    //   alert("details added " );
    // } catch (err) {
    //   alert(" details not added " );
    // }
    
    axios.post('http://localhost:5000/api/OnlineFeeses', 
      newPaymment
   )
    .then(function (response) {
      
      alert("details added " );
    })
    .catch(function (error) {
      console.log(error);
      alert(" details not added " );
    });
  };

  return (
    <>

      <Button className='btn-dashb me-5' variant="warning" onClick={handleShow}>
        Add Fees Payment
      </Button>

    
      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
      
          <Modal.Title id="contained-modal-title-vcenter">Student Fees Payment Details</Modal.Title>
       
           
      <Button variant="primary" className="float-left" style={{height:"50px", width:"25%"}}>Payment Slips</Button> 
              {/* {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" /> 
      )}  */}
      
          {/* <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setPaymentSlip(e.target.files[0])}
          />
            */} 
     
        </Modal.Header>
        <Modal.Body>


        <Form onSubmit={handleSubmit}>

<Col sm={12}>

<br></br>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Student ID
  </Form.Label>
  <Col sm="7">
    <Form.Control type="text" placeholder="Enter Student ID "  onChange={(e) => setStudentID(e.target.value)}/>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Student Name
  </Form.Label>
  <Col sm="7">
    <Form.Control   type="text" onChange={(e) => setStudentName(e.target.value)} required />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Grade
  </Form.Label>
  <Col sm="7">
    <Form.Control   type="text" onChange={(e) => setGrade(e.target.value)}   required />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
 Subject
  </Form.Label>
  <Col sm={7}>
  <select className="Col-3" aria-label="Default select example" onChange={(e) => setSubject(e.target.value)} style={{height:"35px", width:"100%"}}>
    <option selected>Select Subject</option>
    <option value="1">Science</option>
    <option value="2">Maths</option>
  </select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
  Teacher name 
  </Form.Label>
  <Col sm={7}>
  <select className="Col-3" aria-label="Default select example" onChange={(e) => setTeacherName(e.target.value)} style={{height:"35px", width:"100%"}}>
    <option selected>Select Teacher</option>
    <option value="1">Miss.Perera</option>
    <option value="2">Miss P.P.S Ariyasena</option>
  </select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
 Month
  </Form.Label>
  <Col sm={7}>
  <select className="Col-3" aria-label="Default select example" onChange={(e) => setMonth(e.target.value)} style={{height:"35px", width:"70%"}}>
    <option selected>Select Month</option>
    <option value="1">January</option>
    <option value="2">February</option>
  </select>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
  Amount
  </Form.Label>
  <Col sm="7">
    <Form.Control   type="number" onChange={(e) => setAmount(e.target.value)} required />
  </Col>
</Form.Group>


</Col>
</Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger"  className="writeSubmit" type = "submit"  onClick={handleSubmit} style={{width:"20%"}}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}  style={{width:"15%"}}>
            Cancel
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

