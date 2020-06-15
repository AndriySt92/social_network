import React from 'react';

function ProfileData (props) {

  return (
          <div className='profile-item about'>
            <h4>Some about me</h4>
            {props.profile.aboutMe ? <p>{props.profile.aboutMe}</p> : <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
            </p>}
            <div>
              <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
              <h2>Contacts</h2>
              {Object.keys(props.profile.contacts).map(key => {
                return <Contacts contactTitle={key} key={key} contactValue = {props.profile.contacts[key]} />
              } )}
            </div>
            {props.isOwner && <button onClick={props.goToEditMode}>Edit info</button>}
          </div>
  );
}

let Contacts = (props) => {
  return <div><b>{props.contactTitle}</b>: {props.contactValue}</div>
}


export default ProfileData