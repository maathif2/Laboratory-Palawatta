import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import StudentAdmin from "./pages/admin/StudentAdmin";
import AllStudents from "./pages/AllStudents";
import Login from "./pages/Login";
import StudentProfile from "./pages/StudentProfile";
import React, { useContext } from 'react'
import Homepage from "./pages/Homepage";
import SalaryPayment from "./pages/admin/SalaryPayment";
import StaffAdmin from './pages/admin/StaffAdmin';
import AllStaff from './pages/AllStaff';
import AdminViewFees from './components/admin/AdminViewFees';
import StudentFeesView from './components/StudentFeesView';
import OnlineFees from './pages/admin/OnlineFees';
import PhysicalFees from './pages/admin/PhysicalFees';
import TimetableAdmin from "./pages/admin/TimetableAdmin";
import AdminAddClass from "./pages/admin/AdminAddClass";
import AdminDashboard from "./pages/admin/TimetableAdmin";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherAddClass from "./pages/TeacherAddClass";
import AdminViewTt from "./pages/admin/AdminViewTt";
import TeacherViewTt from "./pages/TeacherViewTt";
import StudentViewTt from "./pages/StudentViewTt";
import ViewStdModel from "./components/modal/studentmodel/ViewStdModal";
import ExamAdmin from "./pages/admin/ExamAdmin";
import ExamView from "./pages/admin/ExamView";
import { Context } from "./context/Context";
import Attendence from "./pages/Attendence";
import SearchAttendence from "./components/SearchAttendence";
import SearchForAttendence from "./components/modal/studentmodel/SearchForAttendence";
import Horizontalchart from "./components/Std-chart-horizontal";
import GenerateReport from './components/modal/staffmodal/GenerateReport';
import StaffProfile from './pages/StaffProfile';


function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const {user}=useContext(Context);
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Dashboard/>} /> 
        <Route path="/student" element={<StudentAdmin/>} />
        <Route path="/allstudent" element={<AllStudents/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/login" element={user ? <Homepage/> :<Login/>} />
        <Route path="/stdprofile" element={<StudentProfile/>} />
        <Route path="/payment" element={<SalaryPayment />} />
        <Route path="/allstaff" element={<AllStaff/>} />
        <Route path="/staff" element={<StaffAdmin/>} />   
        <Route path='/onlinefees' element={<OnlineFees/>}/>
        <Route path='/physicalfees' element={ <PhysicalFees/>}/>
        <Route path='/adminviewfees' element={<AdminViewFees/>}/>
        <Route path='/studentfeesview' element={<StudentFeesView/>}/> 
        <Route path = "/timetable" exact element = {<TimetableAdmin/>}/>
        <Route path = "/addA" exact element = {<AdminAddClass/>} />
        <Route path = "/addT" exact element = {<TeacherAddClass/>} />
        <Route path = "/ttA" exact element = {<AdminViewTt/>} />
        <Route path = "/ttT" exact element = {<TeacherViewTt/>} />
        <Route path = "/ttS" exact element = {<StudentViewTt/>} />
        <Route path = "/admin" exact element = {<AdminDashboard/>}/>
        <Route path = "/teacher" exact element = {<TeacherDashboard/>}/>
        <Route path="/viewonestd" element={<ViewStdModel/>} />  
        <Route path="/exam" element={<ExamAdmin/>} />
        <Route path="/examview" element={<ExamView />} />  
        <Route path="/viewonestd" element={<ViewStdModel/>} /> 
        <Route path="/searchatt" element={<SearchForAttendence/>} />
        {/* <Route path="/" element={<Horizontalchart/>} />    */}
        <Route path="/staff" element={<StaffAdmin/>} />
        <Route path="/staffprof" element={<StaffProfile/>} />
        <Route path="/staffreport" element={<GenerateReport/>} />
        <Route path="/vpayment" element={<SalaryPayment/>} />

      </Routes>
    </BrowserRouter>  
  );
}

export default App;
