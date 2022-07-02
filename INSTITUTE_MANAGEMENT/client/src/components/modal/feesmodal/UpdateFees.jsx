import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
// import { MDBCol } from 'mdb-react-ui-kit';
import "../../../style.css";


export default function UpdateFees(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className='btn-dashb me-5' variant="warning" onClick={handleShow}>
        Update Fees Payment
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
      
          <Modal.Title id="contained-modal-title-vcenter">Update Fees Details</Modal.Title>
     
        </Modal.Header>
        <Modal.Body>


        <Form>




<Col sm={12}>

<br></br>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Student ID
  </Form.Label>
  <Col sm="7">
    <Form.Control type="text" readonly/>
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Student Name
  </Form.Label>
  <Col sm="7">
    <Form.Control   type="text" readonly />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Grade
  </Form.Label>
  <Col sm="7">
    <Form.Control   type="text"  readonly />
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Subject
  </Form.Label>
  <Col sm="7">
    <Form.Control   type="text"  readonly />
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 Teacher Name
  </Form.Label>
  <Col sm="7">
    <Form.Control   type="text"  readonly />
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3" >
  <Form.Label column sm="3">
 month
  </Form.Label>
  <Col sm="7">
    <Form.Control   type="text"  readonly />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
  Amount
  </Form.Label>
  <Col sm="7">
    <Form.Control   type="number"  readonly />
  </Col>
</Form.Group>


</Col>
</Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose} style={{width:"20%"}}>
            Update
          </Button>
          <Button variant="secondary" onClick={handleClose}  style={{width:"15%"}}>
            Cancel
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}