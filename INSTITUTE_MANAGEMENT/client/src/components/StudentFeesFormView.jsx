import React from 'react';
import { Col, Row, Form } from "react-bootstrap";

export default function StudentFeesFormView() {


    return (
        <>

               
               <div className="container shadow" style={{ background:'#90A4AE' , padding:'10px 10px 10px 10px'}}> 
              
               <h1 style={{textAlign:'center'}} >Student Payment Details</h1>

<div class="row">
<div class="col-sm-8 "  style={{margin:"auto"}}>


<Form>

<Col sm={12}>

<br></br>

<Form.Group as={Row} className="mb-3" >

<Form.Label column sm="3">
Student ID
</Form.Label>
<Col sm="9">
  <Form.Control type="text" placeholder="Enter Student ID " />
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
<Form.Label column sm="3">
Student Name

</Form.Label>
<Col sm="9">
  <Form.Control   type="text"  required />
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >
<Form.Label column sm="3">
Grade

</Form.Label>
<Col sm="9">
  <Form.Control   type="text"  required />
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm="3">
  Month
  
  </Form.Label>
  <Col sm={9}>
  <Form.Control   type="text"  required />
  </Col>
  </Form.Group>

  </Col>
</Form>
  </div>
  </div>
  <div>
      <div class="row">

          <div class="col-sm-8 d-flex justify-content-around"  style={{margin:"auto"}}>
              <div class="card m-2" style={{ width: "30rem", height:"18rem", padding:'15px 5px 5px 5px'}}>
                  <div class="card-body">
                  <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="5">
                    Subject
                  
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="text"  />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                      <Form.Label column sm="5">
                       Teacher's name
                   
                      </Form.Label>
                      <Col sm="7">
                          <Form.Control   type="text"  required />
                      </Col>
                      </Form.Group>

                      
                      <Form.Group as={Row} className="mb-3" >
                      <Form.Label column sm="5">
                       Amount
                      
                      </Form.Label>
                      <Col sm="7">
                          <Form.Control   type="text"  required />
                      </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="5">
                          Payment Status
                       
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control   type="text"  required />
                        </Col>
                    </Form.Group>

                  </div>
              </div>
              <div class="card m-2" style={{ width: "30rem", height:"18rem", padding:'20px 5px 5px 5px'}}>
                  <div class="card-body">
                  <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="5">
                    Subject
                  
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="text"  />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                      <Form.Label column sm="5">
                       Teacher's name
                   
                      </Form.Label>
                      <Col sm="7">
                          <Form.Control   type="text"  required />
                      </Col>
                      </Form.Group>

                      
                      <Form.Group as={Row} className="mb-3" >
                      <Form.Label column sm="5">
                       Amount
                      
                      </Form.Label>
                      <Col sm="7">
                          <Form.Control   type="text"  required />
                      </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3 ">
                        <Form.Label column sm="5">
                          Payment Status
                       
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control   type="text"  required />
                        </Col>
                    </Form.Group>

                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>    
  </>
)
}