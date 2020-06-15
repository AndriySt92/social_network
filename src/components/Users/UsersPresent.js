import React from 'react';
import styles from "./Users.module.css";
import {NavLink} from 'react-router-dom';
import Pagination from '../common/Pagination/Pagination';

const UsersPresent = ({currentPage, follow, isFollowingProgress,onChangePage,pageSize,unfollow,users,usersTotal}) => {
    debugger
    
    return <div>
            <Pagination currentPage ={currentPage} onChangePage={onChangePage}  pageSize={pageSize} usersTotal={usersTotal}/>
        {[...users].reverse().map(u => <div>
            <div>
                <div>
                    <NavLink to={`/profile/${u.id}`}>
                        <div>
                            <img src={u.photos.small || u.photo} />
                        </div>
                        {u.name}
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button disabled={isFollowingProgress.some(userId => userId == u.id)} onClick={() => {
                        unfollow(u.id)
                    }}>unfollowed</button>
                    : <button disabled={isFollowingProgress.some(userId=> userId == u.id)} onClick={() => {
                        follow(u.id)
                    }
                    }>followed</button>}
                    <div>{u.id}</div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        {u.status}
                    </div>
                </div>
                    <div>
                        <hr />
                    </div>
               
            </div>
        </div>)}
    </div>
};

export default UsersPresent
