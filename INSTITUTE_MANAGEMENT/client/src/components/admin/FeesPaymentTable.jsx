import React from 'react'
import { Table } from 'react-bootstrap'

export default function FeesPaymentTable() {
  return (
    <>
     <h1  class="row" style={{textAlign:'center'}}>Fees Payment List</h1><br /><br />

  
   <Table striped bordered hover variant="dark">

   <thead>
    <tr>
      <th>#</th>
      <th><span>Student_ID</span> </th>
      <th><span>Name</span> </th>
      <th><span>
  <select class="custom-select" id="inputGroupSelect01" style={{background:'transparent', color:'white'}}>
    <option selected style={{background:'transparent', color:'black'}}>Teacher's Name</option>
    <option value="Mr.Perera" style={{background:'transparent', color:'black'}}>Mr.Perera</option>
    <option value="Miss Ariyarathna" style={{background:'transparent', color:'black'}}>Miss Ariyarathna</option>
    <option value="Mr. Ariyasena" style={{background:'transparent', color:'black'}}>Mr. Ariyasena</option>
    <option value="Miss Silva" style={{background:'transparent', color:'black'}}>Miss Silva</option>
  </select></span> 
        </th>

        <th><span> 
        <select class="custom-select" id="inputGroupSelect01" style={{background:'transparent', color:'white'}}>
          <option selected>Month</option>
          <option value="January" style={{background:'transparent', color:'black'}}>January</option>
          <option value="February" style={{background:'transparent', color:'black'}}>February</option>
          <option value="March" style={{background:'transparent', color:'black'}}>March</option>
          <option value="April" style={{background:'transparent', color:'black'}}>April</option>
          <option value="May" style={{background:'transparent', color:'black'}}>May</option>
          <option value="June" style={{background:'transparent', color:'black'}}>June</option>
          <option value="July" style={{background:'transparent', color:'black'}}>July</option>
          <option value="August" style={{background:'transparent', color:'black'}}>August</option>
          <option value="September" style={{background:'transparent', color:'black'}}>September</option>
          <option value="October" style={{background:'transparent', color:'black'}}>October</option>
          <option value="November" style={{background:'transparent', color:'black'}}>November</option>
          <option value="December" style={{background:'transparent', color:'black'}}>December</option>
        </select></span> 
        </th>

        <th><span>
  <select class="custom-select" id="inputGroupSelect01" style={{background:'transparent', color:'white'}}>
    <option selected style={{background:'transparent', color:'black'}}>Payment Type</option>
    <option value="Paid" style={{background:'transparent', color:'black'}}>Paid</option>
    <option value="Unpaid" style={{background:'transparent', color:'black'}}>Unpaid</option>

  </select></span> 
        </th>
        </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <td>2</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <td>3</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <td>4</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <td>5</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>
</>
  )
}