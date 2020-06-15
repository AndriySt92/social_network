import React, {useState} from 'react';
import './ProfileStatus.css';
import { useEffect } from 'react';



const ProfileStatusHook = (props) =>{

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    let activeEditMode=()=>{
        setEditMode(true)
    }

    const deActiveEditMode=()=>{
        setEditMode(false)
        props.upgradeStatus(status)
    }

    const changeStatus=(e)=>{
            setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(props.status)
    },[props.status])
    
  return (
    <div className='status'>
        {!editMode ?
        <div>
            <p onClick={activeEditMode}>{props.status}</p>
        </div>
        : <div>
            <input value={status} autoFocus={true} onBlur={deActiveEditMode} onChange={changeStatus} type="text"  />
        </div>
        }
    </div>
  );
}


export default ProfileStatusHook