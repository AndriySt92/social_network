import { usersApi, profileApi } from "../DAL/DAL";
import { stopSubmit } from 'redux-form';

const ADD_POST = "addPost";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPGRADE_STATUS = "UPGRADE_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initilState = {
    post: [
        {post:'Dimyc hello...', id:'1', likeCound:'12'},
        {post:'Who is your brother?', id:'2' , likeCound:'16'},
        {post:'I have saw your brother!!!', id:'3' , likeCound:'18'},
        {post:'Have you been here before?', id:'4', likeCound:'36'},
        {post:'No, I nad lived all my life in ferm...', id:'5', likeCound:'62'},
        {post:'Ohh, I have never been in the ferm!', id:'6', likeCound:'162'}
      ],
      profile: null,
      status:''
}

const profileReducer = (state = initilState, action) => {
 
 
    switch (action.type) {
        case ADD_POST: {
            let stateCopy ={...state};
            stateCopy.post = [...state.post]
            let LastObject = state.post[state.post.length -1];
            let postId = +LastObject.id + 1;
        
            let like = Math.floor(Math.random()*1000);
        
            let post = {post: action.newPostBody, id: postId.toString(), likeCound: like};
            stateCopy.post.push(post);
        
            return stateCopy
        }

        case SET_PROFILE: 

            if(action.profile.photos.small == null){
                if(action.profile.userId == 8182){
                    action.profile.photos.small = "https://i.imgur.com/WLZexnw.jpg"
                } else {
                action.profile.photos.small = "https://images.pexels.com/photos/556667/pexels-photo-556667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
            }
        return { ...state,
                 profile: action.profile
        }
        case SET_STATUS:{
  
            return {...state,
                    status:action.status}
        }
        case UPGRADE_STATUS:{
            return {...state,
                    status:action.status}
        }

        case SAVE_PHOTO_SUCCESS:{
            return {...state,
                    profile: {...state.profile, photos:action.photos}
                }
        }

        default: return state; 
    }
}

  export const addPostActionCreator = (formData) => {
    return { type: ADD_POST, newPostBody:formData }
    };
  
  export const setProfile = (profile) => {
        console.log('setprofile')
      return {type:SET_PROFILE, profile}
  };

  export const setStatus = (status) => {
    return {type:SET_STATUS, status}
};

export const upgradeStatus = (status) => {
    return {type:UPGRADE_STATUS, status}
};

const savePhotoSuccess = (photos) => {
    return {type:SAVE_PHOTO_SUCCESS, photos}
};


  export const getProfileThunk = (userId) => async (dispatch) => {
    console.log('getprofile')
    debugger
        let response = await usersApi.getProfile(userId)
        dispatch(setProfile(response.data))
  };

  export const getStatusThunk = (userId) => async (dispatch) => {

        let response = await profileApi.getStatus(userId)
          dispatch(setStatus(response.data))
  };

  export const upgradeStatusThunk = (status) => async (dispatch) => {
    let response = await profileApi.upgradeStatus(status)
        if(response.data.resultCode==0){
            dispatch(upgradeStatus(status))
        }
};

export const savePhotoThunk = (file) => async (dispatch) => {
   
    let response = await profileApi.upgradePhoto(file)
        if(response.data.resultCode==0){
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
};

export const saveProfileData = (profileData) => async (dispatch, getState) => {
    let userId = getState().auth.id
    console.log(userId)
    debugger
  
    let response = await profileApi.upgradeProfile(profileData)
        if(response.data.resultCode==0){
            dispatch(getProfileThunk(userId))
        }
        else {
            debugger
           dispatch(stopSubmit("edit-profile", {'contacts': {'facebook':response.data.messages[0]}}));
                return Promise.reject()
        }
}



  export default profileReducer