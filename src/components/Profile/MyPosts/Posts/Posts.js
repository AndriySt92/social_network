import React from 'react';
import './Posts.css';


class Posts extends React.PureComponent {

  render(){
 
  console.log('RENDER Post')
  return (
          <div className='posts'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPeDeNHN5AuyX8FdiCc9RJkJG96flKsWcAkxQZma2bI6aoFFDJ&usqp=CAU'/>
              <p>{this.props.post}</p>
              <span>Like {this.props.like}</span>
          </div>
  );
  }
}

export default Posts