import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
import Description from '../js/components/description';
import Register from '../js/components/register';

document.addEventListener('DOMContentLoaded', () =>{
    return ReactDOM.render(<Header />,document.getElementById('reactHeader'));
} );

document.addEventListener('DOMContentLoaded', () =>{
    return ReactDOM.render(<Description />,document.getElementById('reactDescription'));
} );

document.addEventListener('DOMContentLoaded', () =>{
    return ReactDOM.render(<Register />,document.getElementById('reactRegister'));
} );
