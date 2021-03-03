async function login() {
    var User = document.getElementById("User").value;
    var Pass = document.getElementById("Password").value;

    var data = {"user" : User, "pass": Pass};

    let loginRs = await fetch("http://localhost:8080/api/users/Login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (loginRs.ok) {
        let loginData = await loginRs.json();

        var data = {"token": loginData.token};

        let urlsRs = await fetch("http://localhost:8080/api/config/GetApiUrls", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (urlsRs.ok) {
            let urlsData = await urlsRs.json();

            sessionStorage.setItem('userToken', loginData.token);
            sessionStorage.setItem('apiUrls', JSON.stringify(urlsData));
            window.location.href = "/main.html";
        } else {
            console.log("Unexpected response: " + urlsRs.status);
        }
    } else {
        console.log("Unexpected response: " + loginRs.status);
    }
}