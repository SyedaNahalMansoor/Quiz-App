var error = document.getElementById("error");

function getUsers() {
    var data = localStorage.getItem("users");
    var users;

    if (data === null) {
        users = [];
    } else {
        users = JSON.parse(data);
    }
    return users;
}

function signUp() {
    var firstName = document.getElementById("f-name").value;
    var lastName = document.getElementById("l-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var users = getUsers();

    var newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }

    if (newUser.firstName === "" || newUser.lastName === "" || newUser.email === ""|| newUser.password === "") {
        Swal.fire({
            icon: "error",
            title: "Sign Failed...",
            text: "Must fill the required feilds!",
    });
    } else {
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign up Successful!",
                showConfirmButton: false,
                timer: 3000 ,
            }).then(function () {
                location.href = "login.html";
            });
        };
    };

function login() {
    var email = document.getElementById("login-email");
    var password = document.getElementById("login-password");

    var users = getUsers();
    var foundUser = null;

    for (var i = 0; i < users.length; i++) {
        if (email.value === users[i].email) {
            foundUser = users[i];
            break;
        };
    };

    if (foundUser) {
        if (foundUser.email === ""|| foundUser.password === "") {
            Swal.fire({
                icon: "error",
                title: "Login Failed...",
                text: "Must fill the required feilds!",
            });
        } else {
            if (foundUser.password === password.value) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successful!",
                    showConfirmButton: false,
                    timer: 3000 ,
                }).then(function () {
                    localStorage.setItem("currentUser", JSON.stringify({ "email": email.value }));
                    localStorage.setItem("currentUser", JSON.stringify({ "password": password.value }));
                    location.href = "quiz.html";
                });
            } else {
                error.style.display = "block";
            };
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "User Not Found",
            text: "Do Sign Up First",
        });
    };
};

