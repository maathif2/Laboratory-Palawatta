import React from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Header from '../Header';

export default function PhysicalPayment() {

  return (

    <div>
        <Header/>
       

         <button type="button" class="btn btn-primary btn-sm-5 float-end" style={{height:"50px", width:"20%", float: 'right' }}>
            Print Slips
        </button>
      <div class="row">
      <div class="col-sm-3"></div>     
      <div class="col-sm-9 ">
        
              
     <Form>
    
            <Col sm={12}>

            <br></br>

            <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="3">
                <h5>Student ID</h5>
            
            </Form.Label>
            <Col sm="7">
                <Form.Control type="text" placeholder="Enter Student ID " />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="3">
           <h5> Student Name</h5>
            </Form.Label>
            <Col sm="7">
                <Form.Control   type="text"  required />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="3">
            <h5>Grade</h5>
            </Form.Label>
            <Col sm="7">
                <Form.Control   type="text"  required />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
           
            <h5> Subject</h5>
            </Form.Label>
            <Col sm={7}>
            <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"100%"}}>
                <option selected>Select Subject</option>
                <option value="1">Science</option>
                <option value="2">Maths</option>
            </select>
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="3">
            
            <h5>Teacher name </h5>
            </Form.Label>
            <Col sm={7}>
            <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"100%"}}>
                <option selected>Select Teacher</option>
                <option value="1">Mr.Perera</option>
                <option value="2">Miss P.P.S/ Ariyasena</option>
            </select>
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
             
            <h5>Month</h5>
            </Form.Label>
            <Col sm={7}>
            <select className="Col-3" aria-label="Default select example" style={{height:"35px", width:"70%"}}>
                <option selected>Select Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
            </select>
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">
            
            <h5>Amount</h5>
            </Form.Label>
            <Col sm="7">
                <Form.Control   type="number" required />
            </Col>
            </Form.Group>

            </Col>
      
        </Form>


        <div class="col-sm-4">
        </div>
        <div class="btn-md-50 text-center">
        <Button class="btn btn-danger btn-sm-5"  type="submit" style={{height:"50px", width:"25%", marginTop:'15px'}}>
            Submit
        </Button>
                    </div>
      
        </div>
        </div> 
    </div>
  )
}
