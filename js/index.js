import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

import Header from '../js/components/header';
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
