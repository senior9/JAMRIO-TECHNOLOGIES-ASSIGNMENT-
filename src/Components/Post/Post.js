import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import "./Post.css"

const Post = ({ post, postBody }) => {
    // console.log(post)
    const navigate = useNavigate();
    // console.log(post,postBody)

    const { id } = postBody;

    const navigation = (id) => {
        navigate(`/postDetail/${id}`)
    }
    return (
        <div className="card">
            <div className="post">
                <img className="post-image" alt="" src={postBody?.image} />

                <div className="post-content">
                    <p className="post-header"> {post?.firstname} {post?.lastName} </p>
                    <p className="post-text">
                        {postBody?.text}
                    </p>
                    <div className="author">
                        <img src={post?.picture} alt="" className="author-image" />
                        <Button onClick={() => navigation(id)} variant="success">Details</Button>
                        <div className="author-content">
                            <p className="author-name"><button className="border-0 bg-light">{postBody?.tags[0]}</button> <button className="border-0 bg-light">{postBody?.tags[2]}</button></p>
                            <p className="date">{postBody?.publishDate}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Post;