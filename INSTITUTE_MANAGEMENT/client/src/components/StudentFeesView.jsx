import React from 'react';
import Header from './Header';
import StudentFeesFormView from './StudentFeesFormView';
import StudentSidebar from './StudentSidebar';

export default function StudentFeesView() {


  return (
    <div>
        
    <Header/>
    <StudentSidebar/> 
    <div id='123' style={{margin: '90px 20px 90px 260px'}}>
               <StudentFeesFormView/>
               
               </div>
    </div>

  )
}