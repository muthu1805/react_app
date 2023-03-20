import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import Index from './components/student/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <div className="">
    </div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Create" element={<Create />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/navbar" element={<Navbar />}/>
        <Route path="/nav" element={<Nav />}/>
        <Route path="/index" element={<Index />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
