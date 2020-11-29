function createCourseArray() {
    let courseList = [
    {code: "ACIT 1620",  name: "Fundamental Web Technologies"},
    {code: "ACIT 1515", name: "Scripting for IT"},
    {code: "MATH 1310", name: "Technical Math for IT"}];

    return courseList
}

function findCourse(courseList) {
    courseList = createCourseArray();
    var codeinput = prompt("Enter 4-digit course code: ");


    while ((codeinput.length !== 4) || isNaN(codeinput) === true) {
    prompt("Input is invalid") 
    var codeinput = prompt("Enter 4-digit course code: ");
    }


    for (let course of courseList) {
    if (course.code.includes(codeinput)) {
        console.log("Yes I am taking the course: " + course.code + " – " + course.name);
        check = true;}

    if (courseList[0].code.includes(codeinput)) {    
        var a = document.querySelector(".course1");
        a.style.backgroundColor = "green";}

    else if (courseList[1].code.includes(codeinput)) {    
        var b = document.querySelector(".course2");
        b.style.backgroundColor = "green";}

    else if (courseList[2].code.includes(codeinput)) {    
        var c = document.querySelector(".course3");
        c.style.backgroundColor = "green";}
    
    else {
            check = false;
        }
    }


    if (check == false) {
        courseList.push({code: codeinput, name: null});
        console.log("Course code added successfully");
    }
}

findCourse()
