const toast = (message, bgColor = "red", color = "white", fontWeight = "bold", marginTop = "50px", borderRadius = "50px") => {
    Toastify({
        text: message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: bgColor,
            color: color,
            fontWeight: fontWeight,
            marginTop,
            borderRadius,
        },
        onClick: function () { },
    }).showToast();
};

const signIn = () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        setTimeout(() => {
            load.style.display = 'none'
            sub.style.display = 'block';
            toast("Please fill in all fields.", "red");
        }, 2000);
        return;
    }

    const allUsers = JSON.parse(localStorage.getItem("user")) || [];

    const user = allUsers.find((u) => u.email === email && u.password === password);
    // console.log(user)

    if (user) {
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        setTimeout(() => {
            load.style.display = 'none'
            sub.style.display = 'block';
            toast("Sign in successful!", "green");
        }, 3000);

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 3000);
    } else {
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        setTimeout(() => {
            load.style.display = 'none';
            sub.style.display = 'block';
            toast("Invalid email or password. Please try again.", "red");
        }, 3000);
    }
}

window.signIn = signIn;
