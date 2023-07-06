import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import Login from "./pages/auth/Login.jsx";
import {Footer} from "govuk-react";
import Signup from "./pages/auth/Signup.jsx";
import PatientDashboard from "./pages/dashboard/PatientDashboard.jsx";
import DoctorDashboard from "./pages/dashboard/DoctorDashboard.jsx";
import {useState} from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const changeAuth = (bool) => {
    setIsLogin(bool)
  }

  return (
    <BrowserRouter>
      <div style={{position: 'relative', minHeight:  '100vh'}}>
        <Navbar isLogin={isLogin}/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/login" element={<Login setAuth={changeAuth}/>} exact/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/pdashboard" element={<PatientDashboard/>}/>
          <Route path="/ddashboard" element={<DoctorDashboard/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
        <Footer style={{position: 'absolute', width: '100%', bottom: 0}}/>
      </div>
    </BrowserRouter>
  )
}

export default App
