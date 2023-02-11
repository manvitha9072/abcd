import './App.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Admin from './components/Admin';
import Status from './components/Status';
import Past from './components/Past';
import Accepted from './components/Accepted';
import Eo from './components/Eo';
import { Routes, Route } from 'react-router-dom'
import Assignment from "./components/Assignment"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/assignment" element={<Assignment/>} />
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/status" element={<Status/>}/>
      <Route path="/past" element={<Past/>}/>
      <Route path="/accepted" element={<Accepted/>}/>
      <Route path="/eo" element={<Eo/>}/>
    </Routes>
    </>
  );
}

export default App;
