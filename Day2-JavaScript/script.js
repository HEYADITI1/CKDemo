// Q1. Form Validation

function validateForm() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value, 10);

    if (name === "") {
        alert("Name cannot be empty!");
        return false;
    }

    if (isNaN(age) || age < 18) {
        alert("Age must be 18 or above!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Q2. Change Color on Hover

function changeColor() {
    var box = document.getElementById("colorBox");
    box.style.backgroundColor = "orange";
}

function restoreColor() {
    var box = document.getElementById("colorBox");
    box.style.backgroundColor = "lightblue";
}

// Q3. Array Operations

var arr = [5, 2, 9, 2, 7];
document.getElementById("originalArray").innerHTML = arr.join(", ");
updateOutput();

function updateOutput() {
    document.getElementById("output").innerHTML = "<b>Current Array:</b> " + arr.join(", ");
}

function addNumber() {
    var num = parseInt(document.getElementById("addNumber").value);
    if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
    }
    arr.push(num);
    updateOutput();
}

function insertNumber() {
    var num = parseInt(document.getElementById("insertNumber").value);
    var index = parseInt(document.getElementById("insertIndex").value);
    if (isNaN(num) || isNaN(index) || index < 0 || index > arr.length) {
        alert("Please enter valid number and index.");
        return;
    }
    arr.splice(index, 0, num);
    updateOutput();
}

function replaceNumber() {
    var oldNum = parseInt(document.getElementById("oldNumber").value);
    var newNum = parseInt(document.getElementById("newNumber").value);
    if (isNaN(oldNum) || isNaN(newNum)) {
        alert("Please enter valid numbers.");
        return;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === oldNum) {
            arr[i] = newNum;
        }
    }
    updateOutput();
}

function sortArray() {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    updateOutput();
}

function reverseArray() {
    var reversed = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    arr = reversed;
    updateOutput();
}

function findIndex() {
    var num = parseInt(document.getElementById("findNumber").value);
    if (isNaN(num)) {
        alert("Please enter a valid number.");
        return;
    }
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            index = i;
            break;
        }
    }
    document.getElementById("output").innerHTML += "<br>Index of " + num + ": " + index;
}

// Q4. Student Marks Management System

var students = [];

window.onload = function() {
    var storedData = localStorage.getItem("students");
    if (storedData) {
        students = JSON.parse(storedData);
        displayTable();
    }
};

function addStudent() {
    var name = prompt("Enter student name:");
    if (name === null) return;
    name = name.trim();
    if (name === "") {
        alert("Name cannot be empty!");
        return;
    }

    var marks = [];
    for (var i = 1; i <= 5; i++) {
        var mark = prompt("Enter marks for Subject " + i + " (0-100):");
        if (mark === null) return;
        mark = parseFloat(mark);

        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert("Invalid marks entered for Subject " + i + ".");
            return;
        }
        marks.push(mark);
    }

    var total = calculateTotal(marks);
    var average = calculateAverage(marks);

    var student = {
        name: name,
        marks: marks,
        total: total,
        average: average
    };

    students.push(student);
    saveData();
    displayTable();
}

function calculateTotal(marks) {
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total;
}

function calculateAverage(marks) {
    var total = calculateTotal(marks);
    return (total / marks.length).toFixed(2);
}

function displayTable() {
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    for (var i = 0; i < students.length; i++) {
        var s = students[i];
        var row = "<tr>";
        row += "<td>" + s.name + "</td>";

        for (var j = 0; j < s.marks.length; j++) {
            row += "<td>" + s.marks[j] + "</td>";
        }

        row += "<td><b>" + s.total + "</b></td>";
        row += "<td><b>" + s.average + "</b></td>";
        row += "</tr>";

        tableBody.innerHTML += row;
    }
}

function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}
