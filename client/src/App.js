import './App.css';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
// Pages
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route index element = {<Home />} />
    //       <Route path = '/login' element = {<Login />} />
    //       <Route path = '/register' element = {<Register />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="users/:user_id" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
