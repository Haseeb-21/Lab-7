
let courseList = [
{code: "ACIT 1620",  name: "Fundamental Web Technologies"},
{code: "ACIT 1515", name: "Scripting for IT"},
{code: "MATH 1310", name: "Technical Math for IT"}];


var codeinput = prompt("Enter 4-digit course code: ");


while (!(codeinput.length == 4)) {
   var codeinput = prompt("Enter 4-digit course code: ");

}


for (let course of courseList) {
   if (course.code.includes(codeinput)) {
    console.log("Yes I am taking the course: " + course.code + " – " + course.name);
    check = true
   }
   else {
        check = false;
    }
}


if (check == false) {
    courseList.push({code: codeinput, name: null});
    console.log("Course code added successfully");
}

