import React from 'react';
import "../../style.css";
import Header from '../Header';
import FeesPaymentTable from './FeesPaymentTable';
import SelectGrade from './SelectGrade';
import Sidenav from './Sidenav';



export default function AdminViewFees(props) {
 
  return (
    <>
      <h1>Fees Payment List</h1>
     <div>
                <Header/>
               
                <Sidenav/>
          <br />
      <br />
      <br />
      <br />

      <button type="button" class="btn btn-primary btn-sm-4 float-end" style={{height:"50px", width:"10%", float: 'right' }}>
                  Print Report
              </button>
    
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-2">
        

        <SelectGrade/>
      </div>

        <div class="col-sm-7">
          <FeesPaymentTable/>
        

<br/><br/>
 
        </div>
      </div>
    </div>

    
    </>
  )

}