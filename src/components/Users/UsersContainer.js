import React from 'react';
import {connect} from 'react-redux';
import {followThunk, unfollowThunk , getUsers, setCurrentPage, setIsFetching, setButtonDisable} from '../../redux/user-reducer';

import UsersPresent from './UsersPresent';
import Preloader from '../common/Preloader';
import { withAuthRedirect } from '../../HOC/redirect';
import {compose} from 'redux'




class UserApi extends React.Component {
    
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onChangePage = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        this.props.getUsers(numberPage, this.props.pageSize);
    }
  
    render(){
        return <> 
            {this.props.isFetching ? <Preloader /> : null}
        <UsersPresent usersTotal={this.props.usersTotal}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             onChangePage={this.onChangePage}
                             users={this.props.users}
                             follow = {this.props.followThunk}
                             unfollow = {this.props.unfollowThunk}
                             isFollowingProgress = {this.props.isFollowingProgress}
                              />
        </>
           
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.userPage.users,
        usersTotal: state.userPage.usersTotal,
        pageSize: state.userPage.pageSize,
        currentPage: state.userPage.currentPage,
        isFetching:state.userPage.isFetching,
        isFollowingProgress:state.userPage.isFollowingProgress,


        // fullName: state.userPage.people.fullName,
        // followed: state.userPage.people.followed,
        // status: state.userPage.people.status,
        // photo: state.userPage.people.photo,
        // city: state.userPage.people.location.city,
        // country: state.userPage.people.location.coutry,
    }
}

export default compose(
    connect(mapStateToProps, {followThunk, unfollowThunk, setCurrentPage, setIsFetching, getUsers, setButtonDisable}),
    // withAuthRedirect,
)(UserApi)