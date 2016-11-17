var button = document.getElementById('calcChange');
button.onclick = function() {
    var due = document.getElementById('amountDue').value;
    var given = document.getElementById('amountGiven').value;
    var change = given - due;
    var output = document.getElementById('output');
    output.innerHTML = "Change due = $" + change.toFixed(2);




var dollars = parseInt(change / 1);
var dollarsRemain = change % 1;
var quarters = parseInt(dollarsRemain / .25);
var quartersRemain = (Math.round(dollarsRemain * 100) % 25) / 100;
var dimes = parseInt(quartersRemain / .10);
var dimesRemain = (Math.round(quartersRemain * 100) % 10) / 100;
var nickels = parseInt(dimesRemain / .05);
var nickelsRemain = (Math.round(dimesRemain * 100) % 5) / 100;
var pennies = Math.round(nickelsRemain / .01);


var dollarsRemainAns = document.getElementById('dollars');
dollarsRemainAns.innerHTML = dollars;
var quartersRemainAns = document.getElementById('quarters');
quartersRemainAns.innerHTML = quarters;
var dimesRemainAns = document.getElementById('dimes');
dimesRemainAns.innerHTML = dimes;
var nickelsRemainAns = document.getElementById('nickels');
nickelsRemainAns.innerHTML = nickels;
var penniesRemainAns = document.getElementById('pennies');
penniesRemainAns.innerHTML = pennies;

}



