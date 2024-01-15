import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div style={{display: "flex", gap: "10px"}}>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/posts">Post</Link>
        </div>
    )
}