import {usersApi} from '../DAL/DAL'
const FOLLOWE = "FOLLOWE";
const UNFOLLOWE = "UNFOLLOWE";
const SETUSER = "SET_USER";
const PAGE_SIZE = "PAGE_SIZE";
const USERS_TOTAL = "USERS_TOTAL";
const CURRENT_PAGE = 'CURRENT_PAGE';
const IS_FETCHING = 'IS_FETCHING';
const TOGGLE_FOR_DISABLE ='TOGGLE_FOR_DISABLE'

let initialState = {
    users:[],
    usersTotal:4600,
    pageSize:10,
    currentPage:1,
    isFetching: false,
    isFollowingProgress:[],
};

const userReducer = (state = initialState, action) => {
    let stateCopy;
    switch(action.type) {
        case FOLLOWE: 
            stateCopy = {
                ...state,
                users: state.users.map(user => {
                    if(user.id == action.userId){
                        return {...user, followed:true}
                    }
                    return user
                })
            }
            return stateCopy
        case UNFOLLOWE: 
            stateCopy = {
            ...state,
            users: state.users.map(user => {
                if(user.id == action.userId){
                    return {...user, followed:false}
                }
                return user
            })
        }
            return stateCopy;

        case SETUSER: 
            stateCopy ={
                ...state,
                users:[...action.users].map(u => {
                    if(!u.photo){
                     return {...u, photo: "https://i1.sndcdn.com/avatars-000737512012-fc2ypf-t500x500.jpg"}
                    }
                    })
                
            }
            return stateCopy;
        
        case USERS_TOTAL:
                
            return {
                ...state,
                usersTotal: action.usersTotal
            }        
        case PAGE_SIZE:

            return {
                ...state,
                pageSize: action.pageSize
            }  
        
        case CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.currentPage
            }
        case IS_FETCHING:
            return {...state,
                    isFetching: action.isFetching};

        case TOGGLE_FOR_DISABLE: 
        return {...state,
                    isFollowingProgress: action.isFetching ? [...state.isFollowingProgress ,action.userId]
                    : state.isFollowingProgress.filter(id => id != action.userId)
                }
    }

    return state
}

export const followAC = (userId) =>{
    return {type: FOLLOWE, userId: userId}
}
export const unfollowAC = (userId) =>{
    return {type: UNFOLLOWE, userId: userId}
}
export const setUser = (users) => {
    return {type:SETUSER, users: users}
}

export const setUsersTotal = (usersTotal) => {
    return {type:USERS_TOTAL, usersTotal}
}

export const setPageSize = (pageSize) => {
    return {type:PAGE_SIZE, pageSize}
}

export const setCurrentPage = (currentPage) => {
    return {type:CURRENT_PAGE, currentPage}
}

export const setIsFetching = (isFetching) => {
    return {type: IS_FETCHING, isFetching}
}
export const setButtonDisable = (isFetching, userId) => {
    return {type: TOGGLE_FOR_DISABLE, isFetching, userId}
}


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        setCurrentPage(currentPage);
        usersApi.getUsers(currentPage, pageSize).then((data) => {
 
            dispatch(setUser(data.items));
            dispatch(setUsersTotal(data.totalCount));
            dispatch(setPageSize(10))
            dispatch(setIsFetching(false));
    })
}
}

export const unfollowThunk = (userId) => {
        return (dispatch) => {
            dispatch(setButtonDisable(true, userId))
            usersApi.unfollowAPI(userId).then((response) => {
                if(response.data.resultCode == 0){
                    dispatch(unfollowAC(userId));
                    dispatch(setButtonDisable(false, userId))
                }
            });
    }
}

export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(setButtonDisable(true, userId))
        usersApi.followAPI(userId).then((response) => {
            if(response.data.resultCode == 0){
                dispatch(followAC(userId));
                dispatch(setButtonDisable(false, userId))
            }
        });
}
}




export default userReducer