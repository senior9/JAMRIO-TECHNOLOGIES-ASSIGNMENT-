import React, { useEffect, useState } from 'react';
import { } from 'react-router-dom';
import Post from '../Post/Post';
import PostDetails from './PostDetails/PostDetails';
import "./Posts.css";
export const PostContext = React.createContext({});

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [homePosts, setHomePosts] = useState([]);
    // const navigate =useNavigate();

    console.log(homePosts);
    useEffect(() => {
        fetch("https://dummyapi.io/data/v1/post?limit=10", {
            headers: {
                "app-id": "63e516e94df4fd5f23228e02"
            }
        })
            .then(response => {
                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error("Unauthorized access");
                    } else if (response.status === 500) {
                        throw new Error("Internal server error");
                    } else {
                        throw new Error("Network response was not ok");
                    }
                }
                return response.json();
            })
            .then(data => {
                // Handle the response data
                setPosts(data.data)
                setHomePosts(data.data);
                console.log(data.data);

            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });

    }, []);
    console.log(homePosts);
    return (
        <div className='container'>
            <h1>This is Posts Component</h1>

            <PostContext.Provider value={posts}  >
                <div className='post-container'>
                    {
                        posts.slice(0, 6).map(post => (

                            <Post key={post.id} post={post.owner} postBody={post} />
                        ))
                    }
                </div>
            </PostContext.Provider>


        </div>

    );
};

export default Posts;