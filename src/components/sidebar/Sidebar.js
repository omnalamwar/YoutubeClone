import React from 'react';
import './_sidebar.scss';
import {
  MdHome,
  MdExitToApp,
  MdSubscriptions,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdSentimentDissatisfied
} from 'react-icons/md';

function Sidebar({sidebar, handleToggleSidebar}) {
  return (
    <nav 
      className={sidebar? 'sidebar open': 'sidebar'}
      onClick={()=>handleToggleSidebar(false)}
    >
      <li>
        <MdHome size={23}/>
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23}/>
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={23}/>
        <span>Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23}/>
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23}/>
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23}/>
        <span>I don't know</span>
      </li>

      <hr/>

      <li>
        <MdExitToApp size={23}/>
        <span>Log Out</span>
      </li>

      <hr/>
    </nav>
  );
}

export default Sidebar;