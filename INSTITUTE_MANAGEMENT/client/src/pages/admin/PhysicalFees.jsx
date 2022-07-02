import React from 'react'
import "../../style.css"
import PhysicalPayment from '../../components/admin/PhysicalPayment';
import ReceptionistSideMenu from '../../components/admin/ReceptionistSideMenu';
import Header from '../../components/Header';



export default function PhysicalFees() {
    return (
        <div>
            <Header/>
            <br/><br/><br/><br/>
          
            <ReceptionistSideMenu/>
            <br/><br/>
          
                <div className="container" style={{float:'right'}}>
               
                <div className="container" style={{height: '700px', width: '75%', background:'#90A4AE' , padding:'10px 10px 10px 10px'}}> 
                <div class="col-md-12 text-center">
                <h1 style={{alignContent:'right'}} >Student Fees Payment Details</h1>
              
                    </div>
                <PhysicalPayment/>
                </div>    
                </div>
            </div>
       
    )
}
