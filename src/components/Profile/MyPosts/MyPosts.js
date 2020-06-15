import React from 'react';
import './MyPosts.css';
import Posts from './Posts/Posts';
import MyPostReduxForm from './Posts/MyPostsForm';




const MyPosts = React.memo(props =>{
  
  console.log('render Mypost')
  let postELements = props.post.map(el => <Posts key={el.id} post={el.post} like={el.likeCound} />);

  const onAddPost = (value) =>{
    props.addPost(value.newPostBody);
  }
 
  return (
        <div className='my-post'>
          <div className='add-post my-post-item'>
            <h4>Writing a post</h4>
            <MyPostReduxForm onSubmit={onAddPost} />
          </div>
          <div className='my-post-item'>
            {postELements}
          </div>
        </div>
  );
})

export default MyPosts