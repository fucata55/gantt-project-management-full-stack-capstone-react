import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function SignIn(props) {
    return (
        <div className='inline-block hideMe' id='landingPageRightSideSignin'>
            <form className='signin-form'>
                <h2 className='hideMe' id='signIn'>Sign In</h2>
                <h2 id='welcomeBack'>Welcome back</h2>
                <legend className='hideMe' id='invalidUser'>user and password combination invalid</legend>
                <input type="text" id='signedInUser' placeholder='Username' value='demo4' required />
                <input type="text" id='signedInPassword' placeholder='Password' value='1234' required />
                <button>Submit</button>
                <p>Don't have an account yet?</p>
                <a className='navigate-register-link' href="#">Click here to register</a>
            </form>
        </div>
    )
}
