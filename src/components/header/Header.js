import React from 'react';
import './_header.scss';
import logo from './yt_logo.png';

import {FaBars} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdNotifications, MdApps} from 'react-icons/md';

function Header({handleToggleSidebar}) {
  return (
    <div className='border border-dark header'>
        <FaBars 
         className='header__menu'
         size={26}
         onClick={()=>handleToggleSidebar()}
        />
        <img
            src={logo}
            alt='logo'
            className='header__logo'
            height={20}
        />
        <form>
            <input type='text' placeholder='Search'/>
            <button type='submit'>
                <AiOutlineSearch size={22}/>
            </button>
        </form>

        <div className='header__icons'>
            <MdNotifications size={28}/>
            <MdApps size={28}/>
            <img 
                src='https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png'
                alt='avatar image'
            />
        </div>
    </div>
  );
}

export default Header;
