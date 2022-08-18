import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import CreateAccount from './CreateAccount';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SignIn/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/create" element={<CreateAccount/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </div>
    );
}

export default AllRoutes;
