import React from 'react';
import "./_video.scss";
import {AiFillEye} from 'react-icons/ai'
function Video(){
    return(
        <div className='video'>
            <div className='video__top'>
                <img src='https://i.ytimg.com/vi/uAlzd3Ijg2I/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSCgz8NegczaWa7vb-9S8roGSjFg' alt='thumbnail'/>
                <span>5:43</span>
            </div>
            <div className='video__title'>
                Create app in 5 minutes # made with Chintu
            </div>
            <div className='video__detail'>
                <span>
                    <AiFillEye/>
                     5M Views •
                </span>
                <span> 5 days ago</span>
            </div>
            <div className='video__channel'>
                <img src='https://yt3.ggpht.com/MDVvm8muAOFnxfp7_wjKurWWYYHtIosrPi8Ej4xD0wqoDZrYqawsgVjE1Qp4REuF8_-A0mgl=s68-c-k-c0x00ffffff-no-rj' alt='channel img'/>
                <p>Rainbow Hat Jr.</p>
            </div>
        </div>

    );
}

export default Video;