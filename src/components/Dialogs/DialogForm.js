import React from 'react';
import { Field, reduxForm } from'redux-form';


const DialogForm =  (props) => {
  return(
    <form className="add_message" onSubmit={props.handleSubmit}>
      <Field component='textarea' cols='40' placeholder='enter your message' name='newMessageBody' />
        <br />
        <button type='submit' className="bounce">Add Message</button>
    </form>
  )
}
const DialogReduxForm = reduxForm({
  form:'dialogMessage'
})(DialogForm);

export default DialogReduxForm