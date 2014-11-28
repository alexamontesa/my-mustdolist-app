$(document).ready(function () {

var date= new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

document.getElementById('date').innerHTML = n + ' ' + time;

});