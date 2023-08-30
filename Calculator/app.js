

function giveValue(a) {

    document.getElementById('inp').value += a;
}


function clearAll() {

    document.getElementById('inp').value = '';
}

function calculate() {

    try {
        var a = document.getElementById('inp');
        var b = eval(a.value);
        a.value = parseFloat(b.toFixed(2));

    }
    catch (error) {
        document.getElementById('inp').value = 'Error';
    }
}

function clr() {

    var displayValue = document.getElementById('inp').value;


    displayValue = displayValue.slice(0, -1); // Remove the last character
    document.getElementById('inp').value = displayValue;

}