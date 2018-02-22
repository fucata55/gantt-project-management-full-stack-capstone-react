# Gantt: Plan a better goal

Gantt is a project management software inspired by Henry Gantt that advances a project plan

## Screenshots on big and small screens
![Landing page screenshot](https://github.com/fucata55/gantt-project-management-full-stack-capstone-react/blob/master/assets/images/screenshot-landing.png)
![Home page screenshot](https://github.com/fucata55/gantt-project-management-full-stack-capstone-react/blob/master/assets/images/screenshot-home.png)
![Project page screenshot](https://github.com/fucata55/gantt-project-management-full-stack-capstone-react/blob/master/assets/images/screenshot-project.png)
![Mobile landing page screenshot](https://github.com/fucata55/gantt-project-management-full-stack-capstone-react/blob/master/assets/images/screenshot-landing-mobile.png)
![Mobile home page screenshot](https://github.com/fucata55/gantt-project-management-full-stack-capstone-react/blob/master/assets/images/screenshot-home-mobile.png)
![Mobile project page screenshot](https://github.com/fucata55/gantt-project-management-full-stack-capstone-react/blob/master/assets/images/screenshot-project-mobile.png)


## Use Case
Gantt gives advanced visual representation of tasks in a project

## Initial UX
Ideas
![UI Flow handwritten draft](https://github.com/fucata55/gantt-project-management-full-stack-capstone-react/blob/master/github-images/ideas.jpg)
User Stories
As a visitor (not logged in)

* As an initial visitor to the page, I want to land on the a well-designed web page that explains the web and be able to register/sign with convenience
* As a visitor, I want to create a new account so that I can use the app.
* As a visitor who has already created an account, I want to log in so that I can access my account.
(LANDING PAGE--wireframe will have title, logo, a few details about logging in and what the app is about)
![UI Flow handwritten draft](https://github.com/fucata55/gantt-project-management-full-stack-capstone-react/blob/master/github-images/landing-page.jpg)

AS A LOGGED-IN USER
* As a user, I want to be able to make a new project and see the projects on my home page
![UI Flow handwritten draft](https://github.com/fucata55/gantt-project-management-full-stack-capstone-react/blob/master/github-images/home.jpg)

* As a user, I want to see graphic/visual representations of my projects tasks
![UI Flow handwritten draft](https://github.com/fucata55/gantt-project-management-full-stack-capstone-react/blob/master/github-images/project-tasks.jpg)
![UI Flow handwritten draft](https://github.com/fucata55/gantt-project-management-full-stack-capstone-react/blob/master/github-images/project-gantt-chart.jpg)

* As a user, I want to see the information of the developer when I search for the developer
![UI Flow handwritten draft](https://github.com/fucata55/gantt-project-management-full-stack-capstone-react/blob/master/github-images/contact.jpg)

## Working Prototype
Find a working prototype with Node at https://gantt-project-management.herokuapp.com/
Find a working prototype with React front end at https://fucata55.github.io/gantt-project-management-full-stack-capstone-react/build


## Technical
Gantt was built as two separate parts.

<h3>Front End</h3>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>jQuery</li>
    <li>React</li>
</ul>
<h3>Back End</h3>
<ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB</li>
    <li>Mongoose</li>
    <li>mLab database</li>
    <li><a href="https://mochajs.org/">Mocha</a> and <a href="http://chaijs.com/">Chai</a> for testing</li>
</ul>
<h3>Responsive</h3>
<ul>
    <li>The app is responsive and optimized for both desktop and mobile viewing and use.</li>
</ul>
<h3>Security</h3>
<ul>
    <li>User passwords are encrypted using <a href="https://github.com/dcodeIO/bcrypt.js">bcrypt.js</a>.</li>
</ul>

## API Documentation
API endpoints for the back end include:
* Get a user
* Get a project
* Get a task
* Get projects of a user
* Get tasks of a project
* Create a project
* Create a task
* Edit a project
* Edit a task
* Delete a project
* Delete a task

## Development Roadmap
Planned additional features and improvements will allow users to:
* Update a project timeline through click and drag on the Gantt chart
* Update a task timeline through click and drag on the Gantt chart
* Add more detail to project
* Add more detail to task
* Sort and filter projects and tasks by their names, start dates, due dates, periods, or status
* Open layers of authentication for project managers and team collaboration
* Assign a project to another user
* Communicate to other user within the Gantt app either via comment or linked emails
* Updload files

## NPM command line
* npm run build ==> builds the react app into the "build" folder
* npm run start ==> serve the react app from the "build" folder on this url http://127.0.0.1:8080
* npm run test ==> run the react tests
