import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../Posts';


const PostDetails = ({ match }) => {

    const posts = useContext(PostContext);
    // const data = [...posts];
    // console.log('This is', data);
    const { id } = useParams();

    const newData = Object.values(posts).find(post => (
        post.id === id
    ))

    console.log('New data', newData);

    return (
        < div className='container ' style={{ marginTop: '200px', marginLeft:'500px' }}>

            <div className="card">
                <div className="post">
                    <h1>Post-Details Here : {id}</h1>
                </div>
            </div>


        </div>
    );
};

export default PostDetails;