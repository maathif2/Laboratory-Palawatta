import React from 'react'
import "../../style.css"
import Sidenav from '../../components/admin/Sidenav'
import AddPayment from '../../components/modal/PaymentModal/AddPayment'
import ViewAllPayment from '../../components/modal/PaymentModal/ViewAllPayment'
import GenerateReport from '../../components/modal/PaymentModal/GenerateReport'
import SearchViewPayment from '../../components/modal/PaymentModal/SearchViewPayment'

export default function SalaryPayment() {
    return (
        <div>
            <br></br>
            <br></br>
            <Sidenav />
            <div className="row text-center inline">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                
                    <br></br>
                    <br></br>
                    <AddPayment />
                    <SearchViewPayment/>

                    <br></br>
                    <br></br>
                    <ViewAllPayment/>
                    {/* <br></br>
                    <br></br> */}
                    <GenerateReport/>
                    <br></br>
                  


                    
                </div>
            </div>
        </div>
    )
}
