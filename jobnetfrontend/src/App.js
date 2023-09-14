import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import { Route, Routes } from 'react-router-dom';
import SelectSkill from './JobSeeker/SelectSkill';
import UserDashboard from './JobSeeker/UserDashboard';
import UserLogin from './JobSeeker/UserLogin';
import EmployerDashboard from './Employer/EmployerDashboard';
import EmployerLogin from './Employer/EmployerLogin';
import PostJob from './Employer/PostJob';
import ApplyForJob from './JobSeeker/ApplyForJob';
import ManageJobs from './Employer/ManageJobs';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/user/skills' element={<SelectSkill />} />
        <Route path='/userLogin' element={<UserLogin />} />
        <Route path='/employerLogin' element={<EmployerLogin />} />
        <Route path='/jobSeekerDashboard' element={<UserDashboard />} />
        <Route path='/employerDashboard' element={<EmployerDashboard />} />
        <Route path='/postJob' element={<PostJob />} />
        <Route path='/applyJob' element={<ApplyForJob />} />
        <Route path='/manage_jobs' element={<ManageJobs />} />
      </Routes>
    </>
  );
}

export default App;
