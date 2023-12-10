document.addEventListener('DOMContentLoaded', function() {
    // Load enrolled courses from local storage
    let enrolledCourses = loadEnrolledCourses();

    // Display enrolled courses on the page
    displayEnrolledCourses(enrolledCourses);
});

function loadEnrolledCourses() {
    // Retrieve enrolled courses from local storage
    let enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    return enrolledCourses;
}

function displayEnrolledCourses(enrolledCourses) {
    let enrolledList = document.getElementById('enrolledList');

    // Display each enrolled course
    for (let course of enrolledCourses) {
        let link = document.createElement('a');
        link.innerText = course;

        if(course == "Reactjs Basics"){
            link.href = 'reactjs.html';
        }
        else if(course == "Nodejs Basics"){
            link.href = 'nodejs.html';
        }
        else{
            link.href = 'python.html';
        }


        link.style.textDecoration = 'none'; 
        link.style.color = 'blue'; 

        enrolledList.appendChild(link);
        enrolledList.appendChild(document.createElement('br'));
    }
}
