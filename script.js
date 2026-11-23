function calculateResult() {
let english = Number(document.getElementById("subject1").value);
let maths = Number(document.getElementById("subject2").value);
let computer = Number(document.getElementById("subject3").value);
let physics = Number(document.getElementById("subject4").value);
let urdu = Number(document.getElementById("subject5").value);

let total = english + maths + computer + physics + urdu;
let percentage = (total / 500) * 100;

let grade;
if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 60) {
    grade = "B";
}
else if (percentage >= 40) {
    grade = "C";
}
else {
    grade = "Fail";
}
 let status;
if (english >= 40 && maths >= 40 && computer >= 40 && physics >= 40 && urdu >= 40) {
    status = "Pass";
}
else {
    status = "Fail";
}
let highest = Math.max(english,maths,computer,physics,urdu);
let lowest = Math.min(english, maths, computer, physics, urdu);

document.getElementById("result").innerHTML =
    "<h2>Student Result</h2>" +
    "<p>Total Marks: " + total + " / 500</p>" +
    "<p>Percentage: " + percentage + "%</p>" +
    "<p>Grade: " + grade + "</p>" +
    "<p>Highest Marks: " + highest + "</p>" +
    "<p>Lowest Marks: " + lowest + "</p>";
}