import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Landing(props) {
        return (
            <section id='landingPage' className='hideMe'>
                <div className='above-fold'>
                    <div className='inline-block' id='landingPageLeftSide'>
                        <div className='inline-block'>
                            <a href='#' className='scroll-js'><img src='assets/images/gantt-logo.png' alt='logo' /></a>
                        </div>
                    </div>
                    <div className='inline-block hideMe' id='landingPageRightSideRegister'>
                        <form className='register-form'>
                            <h2>Register Today</h2>
                            <legend className='hideMe' id='passwordMustMatch'>Passwords must match</legend>
                            <legend className='hideMe' id='userAlreadyExist'>Username already existed</legend>
                            <input id='registeredUser' type='text' placeholder='Username' required />
                            <input id='registeredPassword' type='password' placeholder='Password' required />
                            <input id='registeredConfirmPassword' type='password' placeholder='Confirm password' required />
                            <button>Submit</button>
                            <p>Demo Username: demo4</p>
                            <p>Demo Password: 1234</p>
                            <p>Already have an account?</p>
                            <a className='navigate-signin-link' href=''>Click here to sign in</a>
                        </form>
                    </div>
                    <div className='inline-block hideMe' id='landingPageRightSideSignin'>
                        <form className='signin-form'>
                            <h2 className='hideMe' id='signIn'>Sign In</h2>
                            <h2 id='welcomeBack'>Welcome back</h2>
                            <legend className='hideMe' id='invalidUser'>user and password combination invalid</legend>
                            <input type='text' id='signedInUser' placeholder='Username' required />
                            <input type='password' id='signedInPassword' placeholder='Password' required />
                            <button>Submit</button>
                            <p>Demo Username: demo4</p>
                            <p>Demo Password: 1234</p>
                            <p>Don't have an account yet?</p>
                            <a className='navigate-register-link' href=''>Click here to register</a>
                        </form>
                    </div>
                </div>
                <div id='appDescription'>
                    <h2>What is Gantt app?</h2>
                    <br />
                    <p>Gantt is a project management software inspired by Henry Gantt to advances the visual representation of a project plan. By implementing Gantt chart into a project management process, the project manager will have a better focus on the project most crucial constraint, time frame, and a greater tool to communicate the plan</p>
                    <br />
                    <h2>Why care?</h2>
                    <br />
                    <p>As a writer called called Antoine de Saint-Exuperty who became a laureate of several of France's highest literary awards and a winner of the U.S. National Book Award once saif, 'A goal without a plan is just a wish.' Or, as the famous Founding Father of the United States, Benjamin Franklin, said 'By failing to prepare, you are preparing to fail.'</p>
                    <p>I can't emphasize enough how important is planning toward your goals</p>
                    <br />
                    <h2>Who can use Gantt?</h2>
                    <br />
                    <div className='invisible-container'>
                        <div className='inline-block'><img src='assets/images/artists.PNG' alt='artists' />artists</div>
                        <div className='inline-block'><img src='assets/images/businessmen.png' alt='businessmen' />businessmen</div>
                        <div className='inline-block'><img src='assets/images/constructor.PNG' alt='constructors' />constructors</div>
                        <div className='inline-block'><img src='assets/images/educators.PNG' alt='educators' />educators</div>
                        <div className='inline-block'><img src='assets/images/IT.PNG' alt='IT' />IT</div>
                    </div>
                </div>
            </section>
        )
    }
