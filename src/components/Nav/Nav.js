import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.css';
import Friend from './Friend/Friend';



function Nav(props) {
  let state = props.store.getState();

  let friendElements = state.navPage.friend.map(p=> <Friend key={p.name} img={p.img} name={p.name}/> )

  return (
      <div className={s.nav}>
        <div>
          <div className={s.item}>
            <NavLink to="/profile">Profile</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/dialogs">Dialogs</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/users">Users</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="">Music</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="">Video</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="">Settings</NavLink>
          </div>
        </div>
        <div className={s.friend}>
          <h2>Friends online</h2>
          <div className={s.friendInner}>
            {friendElements}
          </div>
        </div>
      </div>

  
  );
}

export default Nav;