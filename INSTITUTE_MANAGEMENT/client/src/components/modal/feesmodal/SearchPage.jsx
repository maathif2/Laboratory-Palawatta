import React from "react";
import { MDBInput, MDBCol } from "mdbreact";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "../../../style.css";
import StudentFeesFormView from "../../StudentFeesFormView";



const SearchPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <MDBCol md="12">
      <div className="input-group justify-content-end pr-1">
      <MDBInput hint="Search" type="text" containerClass="mt-0" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button"  onClick={handleShow}><i class="fa fa-search"></i></button>
      </div>
      </div>
    </MDBCol>
     <Modal show={show}  
      onHide={handleClose}      
        size="lg"
        centered
        width="700px"
      >

      
        <Modal.Header closeButton>
       
          <Modal.Title id="contained-modal-title-vcenter">Student Payment Details</Modal.Title>
     
        </Modal.Header>


        <Modal.Body>


               <StudentFeesFormView/>

      </Modal.Body>
      <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
      </>
  );
}

export default SearchPage;
