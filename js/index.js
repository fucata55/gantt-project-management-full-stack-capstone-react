import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
//import Description from '../js/components/description';
//import Register from '../js/components/register';
//import SignIn from '../js/components/sign-in';
import Landing from '../js/components/landing-page';
import Home from '../js/components/home';
import Project from '../js/components/project';

document.addEventListener('DOMContentLoaded', () =>{
    return ReactDOM.render(<Header />,document.getElementById('reactHeader'));
} );

document.addEventListener('DOMContentLoaded', () =>{
    return ReactDOM.render(<Landing />,document.getElementById('reactLandingPage'));
} );

document.addEventListener('DOMContentLoaded', () =>{
    return ReactDOM.render(<Home />,document.getElementById('reactHomeSection'));
} );

document.addEventListener('DOMContentLoaded', () =>{
    return ReactDOM.render(<Project />,document.getElementById('reactProjectSection'));
} );

//document.addEventListener('DOMContentLoaded', () =>{
//    return ReactDOM.render(<Description />,document.getElementById('reactDescription'));
//} );
//
//document.addEventListener('DOMContentLoaded', () =>{
//    return ReactDOM.render(<Register />,document.getElementById('reactRegister'));
//} );
//
//document.addEventListener('DOMContentLoaded', () =>{
//    return ReactDOM.render(<SignIn />,document.getElementById('reactSignIn'));
//} );
