import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/user/Home';
import CompanyDetails from './routes/user/CompanyDetails';
//import CompanyUpdate from './components/CompanyUpdate';
import { CompanyContextProvider } from './context/CompanyContext';
import UpdatePage from './routes/user/UpdatePage';
import Login from './routes/Login';

import Companies from './routes/user/Companies';
import Jobs from './routes/user/Jobs';
import Myprofile from './routes/user/Myprofile';
import UpdateProfile from './components/user/UpdateProfile';
//import SearchBar from './components/user/SearchBar';
import AddCompany from './components/user/AddCompany';
import UpdateSkills from './components/user/UpdateSkills';
import MyApplications from './routes/user/MyApplications' ;
import Interviews from './routes/user/Interviews';
import Job_history from './routes/user/Job_history';
import UserNotifications from './routes/user/UserNotifications';

import AddJob from './routes/company/AddJob';
import Applications from './routes/company/Applications';
import Employees from './routes/company/Employees';
import CompanyHome from './routes/company/Home';
import Job from './routes/company/Jobs';



const App = () => {
  return (

    <CompanyContextProvider>

    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/company/:companyId" element={<CompanyDetails/>} />
                <Route path="/company/:companyId/update" element={<UpdatePage/>} />
                <Route path ="/User/home" element = {<Home/> } />
                <Route path ="/User/Companies" element = {<Companies/> } />
                <Route path ="/User/Jobs" element = {<Jobs/> } />
                <Route path ="/User/Applications" element = {<MyApplications/> } />
                <Route path ="/User/Interview" element = {<Interviews/> } />
                <Route path ="/User/JobHistory" element = {<Job_history/> } />
                <Route path ="/User/Notifications" element = {<UserNotifications />} />


                <Route path = "/User/Myprofile"element = {<Myprofile/>} />
                <Route path = "/User/Myprofile/Update" element = {<UpdateProfile/> } />
                <Route path = "/User/Myprofile/UpdateSkills" element = {<UpdateSkills/>} />

                <Route path ="/dummy" element = {<AddCompany/>} />

                <Route path ="/Employer/:id/addjob" element = {<AddJob/>} />
                <Route path ="/Employer/:id/applications" element = {<Applications/>} />
                <Route path ="/Employer/:id/employees" element = {<Employees/>} />
                <Route path ="/Employer/:id/jobs" element = {<Job/>} />
                <Route path ="/Employer/:id" element = {<CompanyHome/>} />
            </Routes>
        </BrowserRouter>
    </div>

    </CompanyContextProvider>
  );
};

export default App;

