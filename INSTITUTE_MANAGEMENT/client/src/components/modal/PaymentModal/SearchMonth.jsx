import React, { useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import { MDBCol, MDBIcon } from "mdbreact";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SearchG from "../SearchG";



const SearchMonth = (props) => {

  const [show, setShow] = useState(false);
  const [payments, setPayment] = useState([])
  const handleClose = () => setShow(false);


  function searchId(e) {
    if (e.keyCode == 13) {
      setShow(true);
    }
  }
  return (
   
    <div>
      
      <div class="row">
        <div class="col-sm-10"></div>
        <div class="col-sm-5"></div>
        <MDBCol md="4">

          
          <input className="" type="text" placeholder="       Enter A Month " aria-label="Search" onChange={(e) => { setPayment(e.target.value) }} onKeyDown={(e) => searchId(e)} />

        </MDBCol>
      </div>
      <Modal show={show}
        size="lg"
        centered
      >
   
      <SearchG payments={payments}/>
      <Modal.Footer>
      <Button variant="danger" onClick={handleClose}>
        Cancel
      </Button>
      </Modal.Footer>
      </Modal>

    </div>

  );
}

export default SearchMonth;