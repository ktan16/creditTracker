import React from 'react';
import { Link } from 'react-router-dom';

import HomeCSS from './Home.module.css';

const Home = () => {
    return(
        <div className="text-center m-5">
            <h1>Home</h1>
            
            <div className="mt-4">
                <btn className={HomeCSS.loginButton}>
                    <Link to="/login" className={HomeCSS.link}>Sign in</Link>
                </btn>
            </div>

            <div className="mt-4">
                <btn className={HomeCSS.loginButton}>
                    <Link to="/register" className={HomeCSS.link}>Register</Link>
                </btn>
            </div>
        </div>
    )
};

export default Home;