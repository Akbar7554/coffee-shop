import React from 'react';
import { NavLink } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/signUp"></NavLink>
            <NavLink to="/signIn"></NavLink>
        </div>
    );
};

export default Headers;