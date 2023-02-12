import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';
import Posts from '../Posts/Posts';
import NavbarWeb from './Navbar/NavbarWeb';

const Home = () => {
    return (
        <div>
            <Posts></Posts>



            {/* <Link to="/posts"><Button variant='warning'>See More</Button></Link> */}
            

        </div>
    );
};

export default Home;