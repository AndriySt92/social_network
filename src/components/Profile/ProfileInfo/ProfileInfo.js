import React, {useState} from 'react';
import './ProfileInfo.css';
import Preloader from '../../common/Preloader';
import ProfileDataFormRedux from './ProfileDataForm';
import ProfileData from './ProfileData';


function ProfileInfo (props) {
  let [editMode, setEditMode] = useState(false)
  if(!props.profile){
    return <Preloader />
  }

  const onSubmit  = (dataForm) => {
      props.saveProfileData(dataForm).then(()=>{
        setEditMode(false)
      })

  }

  const onUpdatePhoto =(e) => {
  
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className='profile-info'>
          <div className='profile-item photo'>
            <img src={props.profile.photos.small} />
            {props.isOwner && <input type='file' accept=".png, .jpg, .jpeg" onChange ={onUpdatePhoto}/>}
            <p>{props.profile.fullName}</p>
          </div>
         
            {editMode ? <ProfileDataFormRedux initialValues={props.profile} setEditMode={setEditMode} onSubmit={onSubmit} profile ={props.profile}/>
          : <ProfileData profile={props.profile} setEditMode={setEditMode} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}}/>
          }
      </div>
    </div>
  );
}


export default ProfileInfo