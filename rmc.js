let doc = document.querySelector(".course");

function getCourses (faculty) {
    let courseList = [];

fetch("https://ubc-courses-api.herokuapp.com/tree/2018W/" + faculty).then (response => {
    return response.json();
    }).then(data => {
        return data;
    }).then(data => {
        // console.log(data);
        courseList = data.courses[0];
        // console.log(commCourses);
        return Object.entries(courseList);
    }).then(courses => {
        // console.log(courses);
        doc.innerHTML += `<h1>${faculty}</h1>`
        courseList = courses;
        courseList.forEach(course => {
        // console.log(course);
        let courseName = course[1].course_name;
        let courseTitle = course[1].course_title;
        // console.log(courseName, courseTitle);
        doc.innerHTML += `<p>${courseName}: ${courseTitle} </p>`
        })
    })
};

let facultyList = [];
getCourses("ECON");

// return all the Faculty codes and get their courses
// fetch("https://ubc-courses-api.herokuapp.com/2018W").then (response => {
//     return response.json();
// }).then(data => {
//     // console.log(data);
//     return data;
// }).then(data => {
//     data.forEach(fac => {
//         facultyList.push(fac.code);
//     })
//     return facultyList;
// }).then(list => {
//     list.forEach(faculty => {
//         getCourses(faculty);
//     })
// })
// console.log(facultyList);


// facultyList.forEach(faculty => {
//     console.log(faculty);
//     getCourses(faculty);
// });
