import React from 'react';
import './_loginScreen.scss';

function LoginScreen(){
    return(
        <div className='login'>
            <div className='login__container'>
                <img 
                    src='http://www.clipartbest.com/cliparts/yio/6Xo/yio6XoAyT.png' 
                    alt=''
                />
                <button >Login with Google</button>
                <p>Youtube clone made using youtube-api </p>
            </div>
        </div>
    );
}

export default LoginScreen;