document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form1');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        var user = document.getElementById('UserR').value;
        var password = document.getElementById('passwordR').value; 
      
        addUser(user, password); 
        form.reset();
        alert('User Registered Successfully');
    
    });

    // var form2 = document.getElementById('form2');
    // form2.addEventListener('submit', function(event) {
    //     event.preventDefault(); // Prevent form submission

    //     displayinfo(); // Process the login information
    // },{ once: true });
});

function addUser(user, password) { //adds
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ user, password });
    localStorage.setItem('users', JSON.stringify(users));
    document.body.style.overflow = 'auto';
   
}

window.onload = function(){
    // let login = document.getElementById('login');
    // login.style.display = 'none';
    
}

function reveal(){
    // let login = document.getElementById('login'); // hide section
    // login.style.display = 'block';

    var nextSection = document.getElementById('login'); // scroll to next section after clicking login
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function reveal2(){
    var nextSection = document.getElementById('register'); // scroll to next section after clicking register again
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function setCookie() {
    const name = document.getElementById('name').value;
    document.cookie = `username=${name}`;
    document.cookie
}

function internalCookie(){
    let username = document.getElementById('User2').value;
    let password = document.getElementById('password2').value;
    
   
    var users = JSON.parse(localStorage.getItem('users')) || []; // check to see if the information matches before setting logged in cookie
    var matchedUser = users.find(user => user.user === username && user.password === password);

    if (matchedUser) {
        document.cookie = `LoggedIn=true; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/`;
    }

 
    //  document.cookie = `Username=${username.value}; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/`; 
    // document.cookie = `password=${password.value}; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/`; 

    // Set a cookie indicating user is logged in

   
}

function clearCookies() {
    document.cookie = 'LoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    alert('Cookies Cleared');
    document.body.style.overflow = 'auto';
    window.location.href = window.location.href;

    // window.addEventListener('resize', function() {
    //     window.location.reload();
    // });
}

// function getCookie() {
//     const name = document.getElementById('name').value;
//     const value = getCookieValue('username');
//     alert(`Value: ${value}`);
// }

// function getCookieValue(name) {
//     const cookies = document.cookie.split(';');
//     for (let cookie of cookies) {
//         const [cookieName, cookieValue] = cookie.split('=');
//         if (cookieName.trim() === name) {
//             return cookieValue;
//         }
//     }
//     return null;
// }

// function addUser(user, password) {
//     var users = JSON.parse(localStorage.getItem('users')) || [];
//     users.push({ user, password });
//     localStorage.setItem('users', JSON.stringify(users));
// }

function displayinfo() {
    console.log('displayinfo function called');
    var userl = document.getElementById('User2').value.trim();
    var passwordl = document.getElementById('password2').value.trim();

    if (userl === '' || passwordl === '') {
        alert('Please enter information');
        return;
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var matchedUser = users.find(user => user.user === userl && user.password === passwordl);

    if (matchedUser) {
        alert('Login Successful!');
    } else {
        alert('Incorrect Login');
    }

    document.getElementById('form2').reset();
    document.body.style.overflow = 'auto';
}

// function deleteUser() {
//     var dkey = document.getElementById('DKey').value.trim();
//     var users = JSON.parse(localStorage.getItem('users')) || [];
//     var filteredUsers = users.filter(user => user.user !== dkey && user.password !== dkey);

//     if (users.length !== filteredUsers.length) {
//         localStorage.setItem('users', JSON.stringify(filteredUsers));
//         document.querySelector('.info').textContent = "User Deleted";
//     } else {
//         document.querySelector('.info').textContent = "Username or Password does not match";
//     }
// }

function deleteAllUsers() {
    localStorage.clear();
    alert('All Data Cleared');
}



