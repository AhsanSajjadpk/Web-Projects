var arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const week = date.getDay();
var weekday = '';


if (week == 0) {
    weekday = arr[0];
}
else if (week == 1) {
    weekday = arr[1];

}
else if (week == 2) {
    weekday = arr[2];
}
else if (week == 3) {
    weekday = arr[3];
}
else if (week == 4) {
    weekday = arr[4];
}
else if (week == 5) {
    weekday = arr[5];
}
else if (week == 6) {
    weekday = arr[6];
}



const formattedDate = `${year} - ${month} - ${day}  &nbsp ${weekday}`;
document.getElementById("date").innerHTML = formattedDate

function displayTime(){
    var time = new Date()
    // var day = time.getDate()
    var hrs = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()

    
    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
}

setInterval(displayTime , 1000)



