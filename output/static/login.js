async function login() {
    var User = document.getElementById("User").value;
    var Pass = document.getElementById("Password").value;

    var data = {"user" : User, "pass": Pass};

    let rs = await fetch("http://localhost:8080/api/users/Login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (rs.ok) {
        let rsData = await rs.json();
        sessionStorage.setItem('userToken', rsData.token);
        window.location.href = "/main.html";
    } else {
        console.log("Unexpected response: " + rsData.status);
    }
}