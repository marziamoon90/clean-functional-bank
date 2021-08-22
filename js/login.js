document.getElementById('login-button').addEventListener('click', function () {
    // get email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get password 
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;

    // check email 
    if (userEmail == 'moon@gmail.com' && userPass == 'secret') {
        window.location.href = 'banking.html'
    }

    else {
        console.log('Invalid email');
    }
})




