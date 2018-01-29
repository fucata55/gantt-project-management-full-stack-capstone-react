//Define variables and functions
let theUser
let theProjectId
let theProjectName
let arrayOfTasks = [];
let arrayOfStarts = [];
let arrayOfEnds = [];

//validating registration with db
let validateRegister = (username, password, confirm) => {
    $('#passwordMustMatch').hide();
    $('#userAlreadyExist').hide();
    if (password !== confirm) {
        $('#passwordMustMatch').show();
        //        console.log('paswordvalidated')
    } else {
        let userData = {
            username: username,
            password: password
        };

        $.ajax({
                type: 'POST',
                url: 'https://gantt-project-management.herokuapp.com/register',
                dataType: 'json',
                data: JSON.stringify(userData),
                contentType: 'application/json'
            })
            //expect request POST will respond user data
            .done(function (result) {
                console.log(result);
                console.log('username is still unique');
                $('#landingPageRightSideRegister').hide();
                $('#welcomeBack').hide();
                $('#signIn').show();
                $('#landingPageRightSideSignin').show();
            })
            .fail(function (jqXHR, error, errorThrown) {
                $('#userAlreadyExist').show();
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    }
}

//validating sign with db
let validateSignIn = (signedInUser, signedInPassword) => {
    const userData = {
        username: signedInUser,
        password: signedInPassword
    };
    $.ajax({
            type: 'POST',
            url: 'https://gantt-project-management.herokuapp.com/signin',
            dataType: 'json',
            data: JSON.stringify(userData),
            contentType: 'application/json'
        }) //show login result
        .done(function (result) {
            theUser = result.username
            getProjects(theUser);
            $('.user-name').text(theUser);
            $('.hideMe').hide();
            $('#homePage').show();
            $('header').show();
        })
        .fail(function (jqXHR, error, errorThrown) {
            $('#invalidUser').show();
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

//requesting db for a project
let getAProject = projectId => {
    $.ajax({
        type: 'GET',
        url: 'https://gantt-project-management.herokuapp.com/user/project/' + projectId
    })
        .done(project => {
        console.log(project);
        theProjectName = project[0].projectName
        $('#projectSection h1').text(theProjectName)
        showChart();

    })
        .fail((jqXHR, error, errorThrown) => {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
}

//requesting db for a user's project(s)
let getProjects = username => {
    $('.project').remove();
    $.ajax({
        type: 'GET',
        url: 'https://gantt-project-management.herokuapp.com/user/project/all/' + username
    })
        .done(projects => {
        projects.forEach(project => renderAProject(project))

    })
        .fail((jqXHR, error, errorThrown) => {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
}

//requesting db for a project's task(s)
let getTasks = projectId => {
    $('.task-row').remove();
    arrayOfTasks = [];
    arrayOfStarts = [];
    arrayOfEnds = [];
    $.ajax({
        type: 'GET',
        url: 'https://gantt-project-management.herokuapp.com/user/project/task/all/' + theProjectId
    })
        .done(tasks => {
        console.log('getTasks successful', tasks)
        tasks.forEach(task => {
            console.log(task, task.taskName);
            renderATask(task);
            arrayOfTasks.push(task.taskName);
            arrayOfStarts.push(task.taskStart);
            arrayOfEnds.push(task.taskEnd);
        })
        showChart(theProjectId);
    })
        .fail((jqXHR, error, errorThrown) => {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
}

//displaying a project in home page
let renderAProject = (project) => {
    $('#projectTable tr:last').after(`
<tr class='project' id='${project._id}'>
<td class='project-name'><span class='table-head-mobile'>Project Name: </span>${project.projectName}</td>
<td class='project-predeccesor'><span class='table-head-mobile'>Predecessor: </span>${project.projectPredeccesor}</td>
<td class='project-duration'><span class='table-head-mobile'>Duration: </span>${project.projectDuration}</td>
<td class='project-start'><span class='table-head-mobile'>Start Date: </span>${project.projectStart}</td>
<td class='project-end'><span class='table-head-mobile'>Finish Date: </span>${project.projectEnd}</td>
<td class='project-status'> <span class='table-head-mobile'>Status: </span>${project.projectStatus}</td>
</tr>
`)
}

//displaying a task in project page
let renderATask = (newTask) => {
    //    console.log(`renderATask ran. the new task is ${newTask.taskName}, ${newTask.taskPredeccesor}, ${newTask.taskStatus}`);
    $('#taskTable tr:last').after(`
<tr class='task-row'>
<td colspan='7'>
<form action="" class='project-form seamless-form task' id='${newTask._id}'>
<input class="longer-input a task-name" type="text" value='${newTask.taskName}' required>
<input class="longer-input b task-predeccesor" type="text" value='${newTask.taskPredeccesor}' required>
<input class="shorter-input c task-duration" type="text" value='${newTask.taskDuration}' required>
<input class="shorter-input d task-start" type="text" value='${newTask.taskStart}' required>
<input class="shorter-input d task-end" type="text" value='${newTask.taskEnd}' readonly>
<select name="status" class='task-status' required>
<option value="Planning">Planning</option>
<option value="On Going">On Going</option>
<option value="Paused">Paused</option>
<option value="Canceled">Canceled</option>
<option value="Completed">Completed</option>
</select>
<button class='mini-button edit-task-button'><img src="assets/images/edit-icon.png" alt=""></button>
<button class='mini-button delete-task-button' id='deleteButton'><img src="assets/images/trash-icon.png" alt="trash"></button>
</form>
</td>
</tr>
`);
    $('#taskTable tr:last').find('select').val(newTask.taskStatus);
}

//populating project summary at project summary form
let populateProjectSummary = (project) => {
    $.ajax({
        method: 'GET',
        url: 'https://gantt-project-management.herokuapp.com/user/project/' + project
    })
        .done(project => {
        //            console.log('populateProjectSummary ran', project[0]);
        theProjectName = project[0].projectName
        $('#projectSection h1').text(project[0].projectName);
        $('.project-summary').attr('id', project[0]._id);
        $('#projectName').val(project[0].projectName);
        $('#projectPredeccesor').val(project[0].projectPredeccesor);
        $('#projectDuration').val(project[0].projectDuration);
        $('#projectStart').val(project[0].projectStart);
        $('#projectEnd').val(project[0].projectEnd);
        $('#projectStatus').val(project[0].projectStatus);
    })
        .fail(function (jqXHR, error, errorThrown) {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
}

//generating gantt chart
let showChart = () => {
    //console.log('showChart ran', theProject);
    //console.log(arrayOfTasks, arrayOfStarts, arrayOfEnds)
    $('#container').empty();
    let arrayOfPeriods = [];
    for (let i = 0; i < arrayOfTasks.length; i++) {
        let [yyyy, dd, mm] = arrayOfStarts[i].split('/').reverse().map(string => parseInt(string));
        let [yyyy2, dd2, mm2] = arrayOfEnds[i].split('/').reverse().map(string => parseInt(string));
        let monthOne = mm - 1;
        let monthTwo = mm2 - 1
        console.log(i, yyyy, monthOne, dd, yyyy2, monthTwo, dd2)
        arrayOfPeriods.push({
            x: Date.UTC(yyyy, monthOne, dd),
            x2: Date.UTC(yyyy2, monthTwo, dd2),
            y: i
        })
    };
    Highcharts.chart('container', {

        chart: {
            type: 'xrange'
        },
        title: {
            text: theProjectName
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ''
            },
            categories: arrayOfTasks,
            reversed: true
        },
        series: [{
            //name: 'Project 1',
            // pointPadding: 0,
            // groupPadding: 0,
            borderColor: 'gray',
            pointWidth: 20,
            data: arrayOfPeriods,
            dataLabels: {
                enabled: false
            }
        }]
    })
};

//deleting a project
let deleteProject = projectIdToDelete => {
    $.ajax({
        type: 'DELETE',
        url: 'https://gantt-project-management.herokuapp.com/user/project/' + projectIdToDelete
    })
        .done(() => {
        console.log(`project ${projectIdToDelete} is successfully deleted`);
        $('.hideMe').hide();
        getProjects(theUser);
        $('#homePage').show();
        $('header').show();
    })
        .fail(function (jqXHR, error, errorThrown) {
        console.log(jqXHR);
        console.log(error);
        console.log(errorThrown);
    });
}


//use variables and functions (triggers)

//scrolling
$(document).on('click', '.scroll-js', function () {
    $('html,body').animate({
        scrollTop: $('#appDescription').offset().top
    }, 'slow');
});

//registering
$(document).on('submit', '.register-form', function (event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    let registeredUser = $('#registeredUser').val();
    let registeredPassword = $('#registeredPassword').val();
    let registeredConfirmPassword = $('#registeredConfirmPassword').val();
    validateRegister(registeredUser, registeredPassword, registeredConfirmPassword)
})

//signing in
$(document).on('submit', '.signin-form',function (event) {
    event.preventDefault();
    let signedInUser = $('#signedInUser').val();
    let signedInPassword = $('#signedInPassword').val();
    validateSignIn(signedInUser, signedInPassword);
})

//creating new project
$(document).on('submit', '#newProjectJS', function (event) {
    event.preventDefault();
    let newProjectStart = $('#newProjectStart').val();
    let date = new Date(newProjectStart);
    let newProjectEnd = new Date(date);
    let newProjectDuration = parseInt($('#newProjectDuration').val());
    newProjectEnd.setDate(newProjectEnd.getDate() + newProjectDuration);
    let dd = newProjectEnd.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }
    let mm = newProjectEnd.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm;
    }
    let y = newProjectEnd.getFullYear();
    let formatedProjectEnd = mm + '/' + dd + '/' + y
    let newProject = {
        projectName: $('#newProjectName').val(),
        projectPredeccesor: $('#newProjectPredeccesor').val(),
        projectDuration: newProjectDuration,
        projectStart: $('#newProjectStart').val(),
        projectEnd: formatedProjectEnd,
        projectStatus: $('#status option:selected').val(),
        projectOwner: theUser
    };
    console.log(newProject);
    $.ajax({
            method: 'POST',
            url: 'https://gantt-project-management.herokuapp.com/user/project',
            dataType: 'json',
            data: JSON.stringify(newProject),
            contentType: 'application/json'
        })
        //POST will respond an empty note with unique ID
        .done(function (project) {
            renderAProject(project);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
})

//creating new task
$(document).on('submit', '#newTaskJS', event => {
    event.preventDefault();
    console.log('new task button triggers');
    console.log(
        $('#newTaskName').val()
    );
    let newTaskStart = $('#newTaskStart').val();
    let date = new Date(newTaskStart);
    let newTaskEnd = new Date(date);
    let newTaskDuration = parseInt($('#newTaskDuration').val());
    newTaskEnd.setDate(newTaskEnd.getDate() + newTaskDuration);
    let dd = newTaskEnd.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }
    let mm = newTaskEnd.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm;
    }
    let y = newTaskEnd.getFullYear();
    let formatedTaskEnd = mm + '/' + dd + '/' + y
    let newTask = {
        taskName: $('#newTaskName').val(),
        taskPredeccesor: $('#newTaskPredeccesor').val(),
        taskDuration: newTaskDuration,
        taskStart: $('#newTaskStart').val(),
        taskEnd: formatedTaskEnd,
        taskStatus: $('#newTaskStatus option:selected').val(),
        taskOwner: theProjectId
    };
    console.log(newTask);
    $.ajax({
            method: 'POST',
            url: 'https://gantt-project-management.herokuapp.com/user/project/task',
            dataType: 'json',
            data: JSON.stringify(newTask),
            contentType: 'application/json'
        })
        //POST will respond an empty note with unique ID
        .done(task => {
            console.log(task);
            //            renderATask(task);
            getTasks(theProjectId);
        })
        .fail((jqXHR, error, errorThrown) => {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
})

//updating a project
$(document).on('submit', '.project-summary', function (event) {
    event.preventDefault();
    console.log('project summary button triggers');
    console.log(
        $('.project-summary').attr('id')
    );
    let projectStart = $('#projectStart').val();
    let date = new Date(projectStart);
    let projectEnd = new Date(date);
    let projectDuration = parseInt($('#projectDuration').val());
    projectEnd.setDate(projectEnd.getDate() + projectDuration);
    let dd = projectEnd.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }
    let mm = projectEnd.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm;
    }
    let y = projectEnd.getFullYear();
    let formatedProjectEnd = mm + '/' + dd + '/' + y
    let project = {
        _id: $('.project-summary').attr('id'),
        projectName: $('#projectName').val(),
        projectPredeccesor: $('#projectPredeccesor').val(),
        projectDuration: projectDuration,
        projectStart: $('#projectStart').val(),
        projectEnd: formatedProjectEnd,
        projectStatus: $('#projectStatus option:selected').val(),
        projectOwner: theUser
    };
    console.log(project);
    $.ajax({
            method: 'PUT',
            url: 'https://gantt-project-management.herokuapp.com/user/project/' + project._id,
            dataType: 'json',
            data: JSON.stringify(project),
            contentType: 'application/json'
        })
        .done(aproject => {
            //update chart details accordingly
            console.log('change project summary success');
            getAProject(project._id);
        })
        .fail((jqXHR, error, errorThrown) => {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
})

//navigating to register section
$(document).on('click', '.navigate-register-link', function (event) {
    event.preventDefault();
    $('.hideMe').hide();
    $('#landingPage').show();
    $('#landingPageRightSideRegister').show()
});

//navigating to sign in section
$(document).on('click', '.navigate-signin-link', function (event) {
    event.preventDefault();
    $('.hideMe').hide();
    $('#landingPage').show();
    $('#welcomeBack').show();
    $('#landingPageRightSideSignin').show()
})

//navigating to project page
$(document).on('click', '.project', (event) => {
    //    console.log('project trigger works');
    event.preventDefault();
    let selectedProjectId = $(event.target).closest('.project').attr('id');
    //    console.log(selectedProjectId)
    theProjectId = selectedProjectId;
    //    console.log(`theProjectId is ${theProjectId}`);
    $('.hideMe').hide();
    populateProjectSummary(selectedProjectId)
    getTasks(theProjectId);
    $('#projectSection').show();
    $('header').show()
});

//signing out
$(document).on('click', '#signout', function (event) {
    event.preventDefault();
    location.reload();
})

//navigating to home
$(document).on('click', '#navigateHome', function (event) {
    event.preventDefault();
    $('.hideMe').hide();
    getProjects(theUser);
    $('#homePage').show();
    $('header').show();
});

//editing a task
$(document).on('click', '.edit-task-button', event => {
    event.preventDefault();
    let taskStartToEdit = $(event.target).closest('form').find('.task-start').val();
    let date = new Date(taskStartToEdit);
    let taskEndToEdit = new Date(date);
    let taskDurationToEdit = parseInt($(event.target).closest('form').find('.task-duration').val());
    taskEndToEdit.setDate(taskEndToEdit.getDate() + taskDurationToEdit);
    let dd = taskEndToEdit.getDate();
    if (dd < 10) {
        dd = '0' + dd;
    }
    let mm = taskEndToEdit.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm;
    }
    let y = taskEndToEdit.getFullYear();
    let formatedTaskEnd = mm + '/' + dd + '/' + y
    let taskToEdit = {
        _id: $(event.target).closest('form').attr('id'),
        taskName: $(event.target).closest('form').find('.task-name').val(),
        taskPredeccesor: $(event.target).closest('form').find('.task-predeccesor').val(),
        taskDuration: taskDurationToEdit,
        taskStart: taskStartToEdit,
        taskEnd: formatedTaskEnd,
        taskStatus: $(event.target).closest('form').find('.task-status option:selected').val(),
        taskOwner: theProjectId
    };
    console.log(taskToEdit);
    $.ajax({
            method: 'PUT',
            url: 'https://gantt-project-management.herokuapp.com/user/project/task/' + taskToEdit._id,
            dataType: 'json',
            data: JSON.stringify(taskToEdit),
            contentType: 'application/json'
        })
        .done(() => {
            getTasks(theProjectId);
            console.log('editing a task is success');
        })
        .fail((jqXHR, error, errorThrown) => {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });

})

//deleting a task
$(document).on('click', '.delete-task-button', event => {
    event.preventDefault();
    let taskIdToDelete = $(event.target).closest('form').attr('id');
    //    console.log(taskIdToDelete);
    $.ajax({
            method: 'DELETE',
            url: 'https://gantt-project-management.herokuapp.com/user/project/task/' + taskIdToDelete,
        })
        .done(() => {
            getTasks(theProjectId);
            //            console.log('deleting a task is success');
        })
        .fail((jqXHR, error, errorThrown) => {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });

})

//deleting a project
$(document).on('click', '#deleteProjectButton', event => {
    event.preventDefault();
    let projectIdToDelete = $(event.target).closest('.center').find('.project-summary').attr('id');
    console.log('delete trigger', projectIdToDelete);
    deleteProject(projectIdToDelete);
})


//document ready trigger
$(function () {
    $('.hideMe').hide();
    $('#landingPage').show();
    $('#landingPageRightSideRegister').show();
    $('#newProjectStart').datepicker();
    $('#newTaskStart').datepicker();
    $('.task-start').datepicker();
})
