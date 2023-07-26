import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import { Route, Routes } from 'react-router-dom';
import SelectSkill from './SelectSkill';
import Login from './Login';
import UserDashboard from './UserDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/user/skills' element={<SelectSkill />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
