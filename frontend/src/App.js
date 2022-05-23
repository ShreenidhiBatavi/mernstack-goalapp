import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Goal from './components/Goal';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './ProtectedRoutes';
import Modal from './components/Modal';
import Menu from './components/Menu';

function App() {
  return (
    <div className=" min-h-screen">
      
      <Router>
        <Routes>
          
            <Route path="/" element={<Login/>} />
            <Route  path='/register' element={<Register/>}/>
            <Route path="/dashboard" element={<ProtectedRoutes>
               <Goal/>
            </ProtectedRoutes>} />
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
