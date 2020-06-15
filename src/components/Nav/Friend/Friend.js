import React from 'react';

import s from './Friend.module.css';



function Friend(props) {

  return (
      <div className={s.friendItem}>
          <img src={props.img}/>
          <p>{props.name}</p>
      </div>
  );
}

export default Friend