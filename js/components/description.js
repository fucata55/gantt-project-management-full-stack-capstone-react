import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Description(props) {
    return (
        <div id='appDescription'>
            <h2>What is Gantt app?</h2>
            <br />
            <p>Gantt is a project management oftware inspired by Henry Gantt to advances visual representation of porject plans. By implementing Gantt chart to your project management, you will have a better focus on the project most crucial constraint, time frame, and a greate tool to communicate your plan</p>
            <br />
            <h2>Why should I care?</h2>
            <br />
            <p>As a writer called called Antoine de Saint-Exuperty who became a laureate of several of France's highest literary awards and a winner of the U.S. National Book Award once saif, "A goal without a plan is just a wish." Or, as the famous Founding Father of the United States, Benjamin Franklin, said "By failing to prepare, you are preparing to fail."</p>
            <p>I can't emphasize enough how important is planning toward your goals</p>
            <br />
            <h2>Who can use Gantt?</h2>
            <br />
            <div className='invisible-container'>
            <div className='inline-block'><img src="assets/images/artists.PNG" alt="artists" />artists</div>
            <div className='inline-block'><img src="assets/images/businessmen.png" alt="businessmen" />businessmen</div>
            <div className='inline-block'><img src="assets/images/constructor.PNG" alt="constructors" />constructors</div>
            <div className='inline-block'><img src="assets/images/educators.PNG" alt="educators" />educators</div>
            <div className='inline-block'><img src="assets/images/IT.PNG" alt="IT" />IT</div>
            </div>
        </div>
    )
}
