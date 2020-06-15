import React from 'react';
import "./Users.css";

const User = (props) => {
    let getUser = () => {
        if(props.users.length == 0) {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(commits => alert(commits));
        }
    }

        return <div>
            <button onClick={getUser}>get users</button>
            {props.users.map(u => <div>
                <div>
                    <div>
                        <img src={u.photo} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => props.followContainer(u.id  )}>followed</button> : <button onClick={() => props.unfollowContainer(u.id)}>unfollowed</button>}
                        
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </div>
                    <div>
                        <div>
                            {u.location.city}
                        </div>
                        <div>
                            {u.location.country}
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
 
}

export default User