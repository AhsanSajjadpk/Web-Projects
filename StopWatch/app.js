
var minute = '00';
var second = '00';
var msecond = '00';

var getmin = document.getElementById('min');
var getsec = document.getElementById('sec');
var getmili = document.getElementById('mili');

var stoper

function start() {
    stoper = setInterval(function () {

        msecond++;
        getmili.innerHTML = msecond

        if (msecond == 100) {
            second++
            getsec.innerHTML = second
            msecond = '00'


        }
        else if (second == 60) {
            minute++
            getmin.innerHTML = minute
            second = '00'
        }

    },1)
    document.getElementById('stp').disabled = true;

}

function stop() {

    clearInterval(stoper)
    document.getElementById('stp').disabled = false;


}

function reset() {
    minute = '00'
    second = '00'
    msecond = '00'

    getmin.innerHTML = minute
    getsec.innerHTML = second
    getmili.innerHTML = msecond
   stop();

}