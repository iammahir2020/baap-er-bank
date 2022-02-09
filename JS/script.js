document.getElementById('loginButton').addEventListener('click', function(){
    // console.log('button clicked')
    let userEmail = document.getElementById('user-email');
    let userPassword = document.getElementById('user-password');
    if(userEmail.value == 'mahir' && userPassword.value == 'mahir'){
        console.log('Valid User');
        window.location.href = "homePage.html";
    }else{
        alert('User Not Found');
    }

    userEmail.value = "";
    userPassword.value = "";
})