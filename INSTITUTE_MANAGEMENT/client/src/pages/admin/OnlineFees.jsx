import React from 'react'
import "../../style.css"
import Sidenav from '../../components/admin/Sidenav'
import AddFees from '../../components/modal/feesmodal/AddFees'
import DeleteFees from '../../components/modal/feesmodal/DeleteFees'
import UpdateFees from '../../components/modal/feesmodal/UpdateFees'
import { Link } from "react-router-dom";
import SearchPage from '../../components/modal/feesmodal/SearchPage'

export default function OnlineFees() {
   
    return (
        <div>       

        <Sidenav />

        <div className="row text-right inline">
            <div className="col-md-2"></div>
            <div className="col-md-10">       
            <SearchPage/>
        </div>
        </div>
    
        <br/><br/>
        <div className="row text-center inline">
            <div className="col-md-2"></div>
            <div className="col-md-10 d-flex justify-content-center">

                    <AddFees/>
                    <DeleteFees/>
                    <UpdateFees/>
                    <Link to="/adminviewfees" className="btn-dashb text-decoration-none d-flex justify-content-center align-items-center
">                        View Fees
                    </Link>
        
                </div>
            </div>
            <div className='row'>
            {/* <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} /> */}
            </div>
        </div>
    )
}
