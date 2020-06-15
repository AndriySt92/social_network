import React from 'react';
import Dialog from './Dialog/Dialog';
import './Dialogs.css';
import Message from './Messages/Message';
import DialogReduxForm from'./DialogForm';


function Dialogs(props) {

  let nameElements = props.name.map(name=> <Dialog name={name.name} id={name.id} />);
  let messageElements = props.message.map(mess =>  <Message message={mess.message} id={mess.id}/>);

  const addMessage = (value) =>{
    props.addMessageContainer(value.newMessageBody);
  }

  return (
    <div className="dialogs">
      <div className="dialogsItems">
        { nameElements }
      </div>
      <div className='messages'>
        {messageElements}
      </div>
      <DialogReduxForm onSubmit={addMessage} />
    </div>
  );
};

export default Dialogs;
