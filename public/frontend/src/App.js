import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import SignIn from './pages/SignIn';
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
} 

export default App; 