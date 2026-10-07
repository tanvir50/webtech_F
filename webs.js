function toggleButton() {
    var check = document.getElementById("confirm");
    document.getElementById("submitBtn").disabled = !check.checked;
}

function clearErrors() {
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("idError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("deptError").innerHTML = "";
    document.getElementById("courseError").innerHTML = "";
    document.getElementById("creditError").innerHTML = "";
    document.getElementById("semesterError").innerHTML = "";
}

function validateForm() {

    clearErrors();

    var valid = true;

    var name = document.getElementById("name").value.trim();
    var studentId = document.getElementById("studentId").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var department = document.getElementById("department").value;
    var course = document.getElementById("course").value.trim();
    var credit = document.getElementById("credit").value;

    if (name == "") {
        document.getElementById("nameError").innerHTML =
            "Please enter your name";
        valid = false;
    } else if (name.length < 3) {
        document.getElementById("nameError").innerHTML =
            "Name must be at least 3 characters long";
        valid = false;
    }

    if (studentId == "") {
        document.getElementById("idError").innerHTML =
            "Please enter your student ID";
        valid = false;
    } else if (
        studentId.length != 8 ||
        isNaN(studentId)
    ) {
        document.getElementById("idError").innerHTML =
            "Please enter a valid 8-digit student ID";
        valid = false;
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML =
            "Please enter your email";
        valid = false;
    } else if (
        email.indexOf("@") == -1 ||
        email.indexOf(".com") == -1
    ) {
        document.getElementById("emailError").innerHTML =
            "Please enter a valid email address";
        valid = false;
    }

    if (phone == "") {
        document.getElementById("phoneError").innerHTML =
            "Please enter your phone number";
        valid = false;
    }

    if (department == "Select Department") {
        document.getElementById("deptError").innerHTML =
            "Please select a department";
        valid = false;
    }

    if (course == "") {
        document.getElementById("courseError").innerHTML =
            "Please enter a course name";
        valid = false;
    }

    if (credit == "Select Credit") {
        document.getElementById("creditError").innerHTML =
            "Please select a credit";
        valid = false;
    }

    var semesters = document.getElementsByName("semester");
    var selected = false;

    for (var i = 0; i < semesters.length; i++) {
        if (semesters[i].checked) {
            selected = true;
        }
    }

    if (!selected) {
        document.getElementById("semesterError").innerHTML =
            "Please select a semester";
        valid = false;
    }

    if (valid) {

        document.getElementById("finalMessage").innerHTML =
            "Course registered successfully!";

        document.getElementById("name").value = "";
        document.getElementById("studentId").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("department").selectedIndex = 0;
        document.getElementById("course").value = "";
        document.getElementById("credit").selectedIndex = 0;

        for (var j = 0; j < semesters.length; j++) {
            semesters[j].checked = false;
        }

        document.getElementById("confirm").checked = false;
        document.getElementById("submitBtn").disabled = true;
    }

    return false;
}