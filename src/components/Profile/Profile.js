import React from 'react';
import './Profile.css';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatusHook from './ProfileStatus/ProfileStatusHook';





function Profile (props) {
  console.log('profile')
  
  return (
    <div className="profile">
      
      <ProfileInfo profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhotoThunk} saveProfileData={props.saveProfileData}/>
      <ProfileStatusHook status={props.status} getStatus={props.getStatusThunk} upgradeStatus={props.upgradeStatusThunk} />
      <MyPostsContainer />

    </div>
  );
}

export default Profile