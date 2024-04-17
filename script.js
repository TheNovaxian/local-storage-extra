document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        var user = document.getElementById('User').value;
        var age = document.getElementById('Age').value;
        var key = document.getElementById('Key').value; 
        addUser(user, age, key); // Utilize addUser to manage user addition
    });
});

// function setCookie(name, value){
//     document.cookie= `${name} = ${value}`;
//     // alert(document.cookie);
// }

// function getCookie(name){
//     const cookies = document.cookie.split(';');
//     for (let cookie of cookies){
//         const [cookieName, cookieValue] = cookie.split('=');
//         if (cookieName.trim() === name){
//             return cookieValue;
//         }
//     }
//     return null;
// }
function setCookie() {
    const name = document.getElementById('name').value;
    document.cookie = `username=${name}`;
}

function internalCookie(){
    document.cookie = "Jason" 
}

function getCookie() {
    const name = document.getElementById('name').value;
    const value = getCookieValue('username');
    alert(`Value: ${value}`);
}

function getCookieValue(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }
    return null;
}

function addUser(user, age, key) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ user, age, key });
    localStorage.setItem('users', JSON.stringify(users));
}

function displayinfo() {
    var ekey = document.getElementById('EKey').value;
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var matchedUser = users.find(user => user.key === ekey);

    var infoList = document.querySelector('.info');
    if (matchedUser) {
        infoList.textContent = `Username: ${matchedUser.user}, Age: ${matchedUser.age}`;
    } else {
        infoList.textContent = 'Key does not match';
    }
}

function deleteUser() {
    var dkey = document.getElementById('DKey').value.trim();
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var filteredUsers = users.filter(user => user.key !== dkey);

    if (users.length !== filteredUsers.length) {
        localStorage.setItem('users', JSON.stringify(filteredUsers));
        document.querySelector('.info').textContent = "User Deleted";
    } else {
        document.querySelector('.info').textContent = "Key does not match";
    }
}

function deleteAllUsers() {
    localStorage.clear();
    document.querySelector('.info').textContent = 'All users deleted';
}
