const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const faker = require('faker');
const mongoose = require('mongoose');

const {
    app,
    runServer,
    closeServer
} = require('../server');
const express = require('express');

const {
    User,
    Project,
    Task
} = require('../models/user');

const {
    DATABASE_URL,
    TEST_DATABASE_URL
} = require('../config');

chai.use(chaiHttp);

const username = 'demo'

//Define functions
function generateUser() {
    return {
        username: username,
        password: faker.lorem.words()
    }
}

function generateProject() {
    return {
        projectName: faker.lorem.sentence(),
        projectPredeccesor: faker.lorem.sentence(),
        projectDuration: faker.random.number(),
        projectStart: '01/20/2018',
        projectEnd: '02/01/2018',
        projectStatus: 'Planning',
        projectOwner: username
    }
}

function generateTask() {
    return {
        taskName: faker.lorem.sentence(),
        taskPredeccesor: faker.lorem.sentence(),
        taskDuration: faker.random.number(),
        taskStart: '01/20/2018',
        taskEnd: '02/01/2018',
        taskStatus: 'Planning',
        taskOwner: '7yui8765rfghjio987654345678ijhgfdwqasd'
    }
}

function seedDbWithProjects() {
    console.info('Seeding db');
    let projects = [];
    for (let i = 0; i < 10; i++) {
        projects.push(generateProject());
    }
    return Project.insertMany(projects);
    console.log(`projects are ${projects}`);
}

function seedDbWithTasks() {
    console.info('Seeding db');
    let tasks = [];
    for (let i = 0; i < 10; i++) {
        tasks.push(generateTask())
    }
    return Task.insertMany(tasks);
    console.log(`tasks are ${tasks}`);
}

function tearDownDb() {
    console.warn('Deleting database');
    return mongoose.connection.dropDatabase();
}



describe('Gantt APIs', () => {
    before(() => {
        return runServer(TEST_DATABASE_URL)
            .then(console.log('running server'))
            .catch(err => console.log({
                err
            }));
    });
    beforeEach(() => {
        return seedDbWithProjects();
        return seedDbWithTasks()
    });


    describe('GET endpoints', () => {
        //API 3
        it('should return all projects of a user', () => {
            return chai.request(app)
                .get('/user/project/all/' + username)
                .then(res => {
                    res.should.have.status(200);
                    //                       res.body.should.have.length.of.at.least(1);
                });
        });
        //API 5
        it('should return a project', () => {
            return Project
                .findOne()
                .then(project => {
                    return chai.request(app)
                        .get('/user/project/' + project._id)
                })
                .then(res => {
                    res.should.have.status(200);
                });
        });
        //API 4
        it('should return all tasks of a project', () => {
            return seedDbWithTasks()
            return Task
                .findOne()
                .then((project) => {
                    console.log(project)
                    return chai.request(app)
                        .get('/user/project/task/all/' + project._id)
                })
                .then(res => {
                    res.should.have.status(200);
                });
        });
    });
    describe('POST endpoints', () => {
        //API 6
        it('should create a project', () => {
            return chai.request(app)
                .post('/user/project')
                .send(generateProject())
                .then(res => {
                    res.should.have.status(200);
                    //res.body.should.be.json;
                });
        });
        //API 7
        it('should create a task', () => {
            return chai.request(app)
                .post('/user/project/task')
                .send(generateTask())
                .then(res => {
                    res.should.have.status(200);
                    //res.body.should.be.json;
                });
        });
    });
    describe('PUT endpoints', () => {
        //API 8
        it('should update a project name', () => {
            const newProjectName = {
                name: faker.lorem.sentence()
            };
            return Project
                .findOne()
                .then(project => {
                    newProjectName._id = project._id;
                    return chai.request(app)
                        .put(`/user/project/${project._id}`)
                        .send(newProjectName);
                })
                .then(res => {
                    res.should.have.status(204);
                })
        });
        //API 9
        it('should update a task name', () => {
            return seedDbWithTasks();
            const newTaskName = {
                name: faker.lorem.sentence()
            };
            return Task.findOne()
                .then((task) => {
                    console.log(`meow ${task}`);
                    newTaskName.id = task._id;
                    return chai.request(app)
                        .put(`/user/project/task/${task.id}`)
                        .send(newTaskName);
                })
                .then((res) => {
                    res.should.have.status(204);
                    return Task.findById(newTaskName._id);
                })
                .then(task => {
                    task.name.should.equal(newTaskName.name);
                })
        });
    });
    describe('DELETE endpoints', () => {
        //API 10
        it('should delete a project', () => {
            let project;
            return Project
                .findOne()
                .then((_project) => {
                    project = _project;
                    return chai.request(app).delete(`/user/project/${project._id}`);
                })
                .then(res => {
                    res.should.have.status(204);
                    return Project.findById(project._id);
                })
                .then(_project => {
                    should.not.exist(_project);
                });
        });
        //API 11
        it('should delete a task', () => {
            return seedDbWithTasks()
            return Task
                .findOne()
                .then((task) => {
                    //                    task = _task;
                    return chai.request(app).delete(`/user/project/task/${task._id}`);
                })
                .then(res => {
                    res.should.have.status(204);
                    return Task.findById(task._id);
                })
                .then(_task => {
                    should.not.exist(_task);
                });
        });
    });

    afterEach(() => {
        return tearDownDb();
    });
    after(() => {
        return closeServer();
    });
});
