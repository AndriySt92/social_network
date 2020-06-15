import React from 'react';
import './Message.css';




function Message(props) {
  return (
        <div className='message'>
          <div >{props.message}</div>
        </div>
  );
}

export default Message;