document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        signUp();
    }
})


const toast = (message, bgColor, color, fontWeight, marginTop, borderRadius) => {
    Toastify({
        text: message,
        duration: 1000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgColor,
            color,
            fontWeight,
            marginTop,
            borderRadius,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}


const allUser = []

const signUp = () => {
    if (firstName.value === '' || email.value === '' || password.value === '') {
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        setTimeout(() => {
            load.style.display = 'none'
            sub.style.display = 'block'
            toast('Please fill all the fields', 'red', 'white', 'bold', '50px', '50px')
        }
            , 2000)
        return
        // document.getElementById('load') = ""  
        // setTimeout(() => {
        //   load.innerHTML = 'Sign Up'  
        // }, 3000)

    } else if (firstName.value.length < 3) {
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        setTimeout(() => {
            load.style.display = 'none'
            sub.style.display = 'block'
            toast('First name and last name must be at least 3 characters long', 'red', 'white', 'bold')
        }
            , 3000)
        return
    }
    else if (email.value.search(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) === -1) {
        toast('Please enter a valid email address', 'red', 'white', 'bold')
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        setTimeout(() => {
            load.style.display = 'none'
            sub.style.display = 'block'
        }
            , 3000)
        return
    }
    else if (password.value.length < 8) {
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        setTimeout(() => {
            load.style.display = 'none'
            sub.style.display = 'block'
            toast('Password must be at least 8 characters long', 'red', 'white', 'bold')
        }
            , 3000)
        return
    }
    else if (password.value.search(/[0-9]/) === -1) {
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        setTimeout(() => {
            load.style.display = 'none'
            sub.style.display = 'block'
            toast('Password must contain at least one number', 'red', 'white', 'bold')
        }
            , 3000)
        return
    }
    else if (password.value.search(/[a-z]/) === -1) {
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        setTimeout(() => {
            load.style.display = 'none'
            sub.style.display = 'block'
            toast('Password must contain at least one lowercase letter', 'red', 'white', 'bold')
        }
            , 3000)
        return
    }
    else if (password.value.search(/[A-Z]/) === -1) {
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        setTimeout(() => {
            load.style.display = 'none'
            sub.style.display = 'block'
            toast('Password must contain at least one uppercase letter', 'red', 'white', 'bold')
        }
            , 3000)
        return
    }
    else if (password.value.search(/[^a-zA-Z0-9]/) === -1) {
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        setTimeout(() => {
            load.style.display = 'none'
            sub.style.display = 'block'
            toast('Password must contain at least one special character', 'red', 'white', 'bold')
        }
            , 3000)
        return
    }
    else if (password.value.search(/[\s]/) !== -1) {
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        setTimeout(() => {
            load.style.display = 'none'
            sub.style.display = 'block'
            toast('Password must not contain any spaces', 'red', 'white', 'bold')
        }
            , 3000)
        return
    }
    // else if (password.value !== confirmPassword.value) {
    //     load.style.display = 'block'
    //     load.style.margin = 'auto'
    //     sub.style.display = 'none'
    //     setTimeout(() => {
    //         load.style.display = 'none'
    //         sub.style.display = 'block'
    //         toast('Password does not match', 'red', 'white', 'bold')
    //     }
    //         , 3000)
    //     return
    // }

    // else{
    //   const user = {
    //     firstName:firstName.value,
    //     lastName:lastName.value,
    //     email:email.value,
    //     password:password.value
    //   };
    //   allUser.push(user);
    //   console.log(allUser);
    //   localStorage.setItem("user" , JSON.stringify(allUser));
    //   toast("signup successful", "green", "white", "bold")
    //   sub.innerHTML = '.........loading';
    //   setTimeout(() => {
    //     sub.innerHTML = 'Sign Up'   
    //   }, 2000)
    //     window.location.href = 'Signin.html'  
    // }

    else {
        const allUsers = JSON.parse(localStorage.getItem('user')) || [];

        const emailExists = allUsers.some((user) => user.email === email.value)
        if (emailExists) {
            load.style.display = 'block'
            load.style.margin = 'auto'
            sub.style.display = 'none'
            setTimeout(() => {
                load.style.display = 'none'
                sub.style.display = 'block'
                toast("Email already exists!", "red", "white", "bold", "50px", "50px");
            }
                , 3000)
            allUser = ""// Stop further execution
        }

        // Check if the password already exists
        const passwordExists = allUsers.some((user) => user.password === password.value);
        if (passwordExists) {
            load.style.display = 'block'
            load.style.margin = 'auto'
            sub.style.display = 'none'
            setTimeout(() => {
                load.style.display = 'none'
                sub.style.display = 'block'
                toast("Password already exists!", "red", "white", "bold");
            }
                , 3000)
            allUser = "" // Stop further execution
        }
        const user = {
            firstName: firstName.value,
            email: email.value,
            password: password.value,
        };
        allUsers.push(user);
        localStorage.setItem('user', JSON.stringify(allUsers));
        load.style.display = 'block'
        load.style.margin = 'auto'
        sub.style.display = 'none'
        localStorage.setItem("userName", firstName.value)
        setTimeout(() => {
            load.style.display = 'none'
            sub.style.display = 'block'
            toast("signup successful", "green", "white", "bold", "50px", "50px");
            setTimeout(() => {
                window.location.href = 'signin.html';
            }, 3000);
        }, 3000);

        const myUser = JSON.parse(localStorage.getItem('user'));
        console.log(myUser);

    }
}

window.signUp = signUp;



