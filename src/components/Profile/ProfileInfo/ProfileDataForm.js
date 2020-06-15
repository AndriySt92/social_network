import React, {useState} from 'react';
import {Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/formControl/formControl';
import style from '../../common/formControl/formControl.module.css'





const ProfileDataForm = (props) => {

  return(
        <form onSubmit={props.handleSubmit}>
           {props.error && <div className={style.formSummeryError}>{props.error}</div>}
            
            <label>Loking for a girl<Field component='Input' name='lookingForAJob' type='checkbox'/></label><br/>
            <label>Somethink about youself<Field component={Textarea} name="aboutMe" placeholder="describe youself" /></label>
            <label>LookingForAJobDescription<Field component={Textarea} name="LookingForAJobDescription" placeholder="LookingForAJobDescription youself" /></label>
            <h3>Contacts:</h3>
            {Object.keys(props.profile.contacts).map(contact => {
              return <label>{contact} address<Field component={Input} name={`contacts.${contact}`} placeholder={'My '+contact} /></label>
            } )}
            {/* <label>Facebook address<Field component={Input} name="contacts.facebook" placeholder='My facebook' /></label>
            <label>Website address<Field component={Input} name="website" placeholder='My website' /></label>
            <label>Vk address<Field component={Input} name="vk" placeholder='My vk' /></label>
            <label>Twitter address<Field component={Input} name="twitter" placeholder='My twitter'/></label>
            <label>Instagram address<Field component={Input} name="instagram" placeholder='My instagram' /></label>
            <label>Youtube address<Field component={Input} name="youtube" placeholder='My youtube' /></label>
            <label>Github address<Field component={Input} name="github" placeholder='My github' /></label> */}
            <br />
            <button type='submit'>Save changes</button>
      </form>
  )
}

const ProfileDataFormRedux = reduxForm({
  form: 'edit-profile'
})(ProfileDataForm);


export default ProfileDataFormRedux