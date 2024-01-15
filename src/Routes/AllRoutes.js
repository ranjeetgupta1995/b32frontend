import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { Post } from '../components/Post';
import { Signup } from '../components/Signup';

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/posts' element={<Post />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}