import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator} from '../../redux/dialog-reducer';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../HOC/redirect';
import { compose } from 'redux';



// function DialogsContainer(props) {
//   let state = props.store.getState();

//   const printMessageContainer = (text) => {
//     let action = printMessageActionCreator(text)
//     props.store.dispatch(action);
//   };

//   const addMessageContainer = () =>{
//     props.store.dispatch(addMessageActioncreator());
//   }

//   return <Dialogs addMessageContainer={addMessageContainer} printMessageContainer={printMessageContainer} name={state.dialogPage.name} message = {state.dialogPage.message} printMessage={state.dialogPage.printMessage}/>
// }

let mapStateToProps = (state) => {
  return {
    name: state.dialogPage.name,
    message: state.dialogPage.message,

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessageContainer: (formData) => {
      dispatch(addMessageActionCreator(formData));
    },
  }
};

export default compose(
  connect(mapStateToProps ,mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

