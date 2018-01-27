import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Register(props) {
    return (
        <div className='inline-block hideMe' id='landingPageRightSideRegister'>
            <form className='register-form'>
                <h2>Register Today</h2>
                <legend className='hideMe' id='passwordMustMatch'>Passwords must match</legend>
                <legend className='hideMe' id='userAlreadyExist'>Username already existed</legend>
                <input id='registeredUser' type="text" placeholder='Username' required />
                <input id='registeredPassword' type="text" placeholder='Password' required />
                <input id='registeredConfirmPassword' type="text" placeholder='Confirm password' required />
                <button>Submit</button>
                <p>Already have an account?</p>
                <a className='navigate-signin-link' href="#">Click here to sign in</a>
            </form>
        </div>
    )
}
