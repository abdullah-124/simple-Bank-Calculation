document.getElementById('log-in-submit').addEventListener('click', function(){
    // console.log('button clicked');
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    //get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    if(userEmail == 'abd@gmail.com' && userPassword == 'polty'){
        // console.log('valid user');
        window.location.href = 'banking.html'
    }
    else if(userEmail != 'abd@gmail.com' && userPassword == 'polty'){
        alert('your email address is wrong')
    }
    else if(userEmail == 'abd@gmail.com' && userPassword != 'polty'){
        alert('your your password is incorect')
    }
    else{
        alert('your email and password dont match')
    }
})