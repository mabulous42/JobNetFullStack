import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import { Route, Routes } from 'react-router-dom';
import SelectSkill from './SelectSkill';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/user/skills' element={<SelectSkill />} />
      </Routes>
    </>
  );
}

export default App;
