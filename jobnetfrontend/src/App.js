import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import { Route, Routes } from 'react-router-dom';
import SelectSkill from './SelectSkill';
import UserDashboard from './JobSeeker/UserDashboard';
import UserLogin from './JobSeeker/UserLogin';
import EmployerDashboard from './Employer/EmployerDashboard';
import EmployerLogin from './Employer/EmployerLogin';
import PostJob from './Employer/PostJob';

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
      </Routes>
    </>
  );
}

export default App;
