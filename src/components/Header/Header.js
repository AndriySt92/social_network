import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return ( 
        <div className = { s.header } >
            <p onClick={props.logout}>Logout</p>
            <h1>React. React project-app</h1>

            {props.isAuth ? <a href="https://social-network.samuraijs.com">{props.email}</a>
            : <NavLink to='/login'>LOGIN</NavLink>}
        </div>
    );
}

export default Header