import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
