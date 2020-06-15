import React from 'react';
import './ProfileStatus.css';



class ProfileStatus extends React.Component{
    state = {
        status:this.props.status,
        editMode:false,
    }

    activeEditMode=()=>{
        this.setState({
            editMode:true,
        });

    }

    deActiveEditMode=(e)=>{
        this.setState({
            editMode:false
        });
        this.props.upgradeStatus(this.state.status)
    }

    changeStatus=(e)=>{
        this.setState({
            status:e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({status:this.props.status})
        }
    }

 render(){

  return (
    <div className='status'>
        {!this.state.editMode ?
        <div>
            <p onClick={this.activeEditMode}>{this.props.status}</p>
        </div>
        : <div>
            <input value={this.state.status} autoFocus={true} onBlur={this.deActiveEditMode} onChange={this.changeStatus} type="text"  />
        </div>
        }
    </div>
  );
}
}

export default ProfileStatus