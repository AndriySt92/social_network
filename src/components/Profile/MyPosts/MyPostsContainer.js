import React from 'react';
import {addPostActionCreator,} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';




// function MyPostsContainer (props) {
//    let state = props.store.getState();

//   const addPost = () =>{
//     props.store.dispatch(addPostActionCreator());
//   }

//   const changeValue = (text) => {
//     let action = changeValueActioncreator(text)
//     props.store.dispatch(action);
//   }
  
//   return <MyPosts addPost={addPost} changeValue={changeValue} post ={state.profilePage.post} printText={state.profilePage.printText}/>
// }

// const MyPostsContainer = () => {

  let mapStateToProps = (state) =>{
    return {
      post: state.profilePage.post,
    }
  }

  let mapDispatchToProps = (dispatch) =>{
    return {
      addPost: (dataForm) => {
        dispatch(addPostActionCreator(dataForm));
      },
    }
  }

  const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)  


export default MyPostsContainer