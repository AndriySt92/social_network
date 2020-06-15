import React from 'react';
import Header from './Header'

import {logout} from '../../redux/auth-reducer';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount(){ 
    }
    render(){
        return <Header  email={this.props.email}
                        isAuth = {this.props.isAuth}
                        logout ={this.props.logout} />
    }
}

const mapStateToProps = (state) => {
    return {
        email:state.auth.email,
        isAuth: state.auth.isAuth,
    }
}


export default connect(mapStateToProps,{logout})(HeaderContainer)