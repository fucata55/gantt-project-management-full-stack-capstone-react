import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Header(props) {
    return (
        <header className='hideMe'>
            <nav>
                <ul>
                    <li className='nav1'>
                        <a id='navigateHome' href='#'><img src='assets/images/gantt-logo.png' alt='Gantt logo' /></a>
                    </li>
                    <li className='nav2'>Hello, <span className='user-name'>Henry</span>!</li>
                    <li className='nav3'><a id='signout' href=''>Sign out</a></li>
                </ul>
            </nav>
        </header>
    )
}
