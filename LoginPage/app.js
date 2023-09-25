
var allusers = []
var users = localStorage.getItem('Users')

if (users != null) {
    allusers = JSON.parse(users)
}


function signup() {
    var semail = document.getElementById('semail').value
    var spass = document.getElementById('spass').value

    var obj = {
        email: semail,
        password: spass
    }
    allusers.push(obj)
    localStorage.setItem('Users', JSON.stringify(allusers))
    window.open('signin.html','_blank')
}


function signin() {

    var lemail = document.getElementById('lemail').value
    var lpass = document.getElementById('lpass').value

    var filterusers = allusers.filter(function (data) {
        return data.email === lemail && data.password === lpass
    })
    if (filterusers.length) {
        alert("Login Successfull")
        window.open('welcome.html','_blank')
    }
    else {
        alert("USer Not Found - Please Signup FIrst")
        window.open('index.html','_blank')

    }
}