import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import { Route, Routes } from 'react-router-dom';
import SelectSkill from './SelectSkill';
import UserDashboard from './UserDashboard';
import UserLogin from './UserLogin';
import EmployerDashboard from './EmployerDashboard';
import EmployerLogin from './EmployerLogin';

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
      </Routes>
    </>
  );
}

export default App;
