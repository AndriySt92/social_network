import React from 'react';
import './Dialog.css';

import {NavLink} from 'react-router-dom';




function Dialog(props) {
  let path = '/dialogs/'+props.id;
  return (
        <div className='dialog'>
          <NavLink to={path}>{props.name}</NavLink>
        </div>
  );
}

export default Dialog;