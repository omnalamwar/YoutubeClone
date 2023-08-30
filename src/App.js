// import logo from './logo.svg';
import React, {useState} from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreens/HomeScreen';

import './_app.scss';
import LoginScreen from './screens/loginScreens/LoginScreen';

function App(){

  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(value => !value)

  return (
    // <>
    //   <Header handleToggleSidebar={handleToggleSidebar}/>
    //   <div className="app__container">
    //     <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
    //     <Container fluid className='app_main'>
    //       <HomeScreen/>
    //     </Container>
    //   </div>
    // </>
    <LoginScreen/>
  );
}

export default App;