import React from 'react';
import Profile from './Profile';
import {getProfileThunk, getStatusThunk, upgradeStatusThunk, savePhotoThunk, saveProfileData} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../HOC/redirect'
import { compose } from 'redux';
 


class ProfileContainer extends React.Component {

    componentDidMount(){
        this.refreshProfile();
    }

    refreshProfile () {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=this.props.id;
            if(!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getProfileThunk(userId);
        this.props.getStatusThunk(userId)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('update')
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render(){
        return <Profile {...this.props} profile={this.props.profile} isOwner ={!this.props.match.params.userId} saveProfileData={this.props.saveProfileData}  />
    }
}

let mapStateToProps = (state) => {
    return {
        profile:state.profilePage.profile,
        status:state.profilePage.status,
        id:state.auth.id
    }
}

export default compose(
    connect(mapStateToProps,{getProfileThunk, getStatusThunk, upgradeStatusThunk, savePhotoThunk, saveProfileData}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);


