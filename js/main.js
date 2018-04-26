
//This plugin creates countdown clock on index.html page
$('#clock').countdown('2018/10/01', function(event) {
  $(this).html(event.strftime('%D days %H:%M:%S'));
});

//Written jQuery turns selected H1's teal on click
function myFunction() {
    document.getElementById("demo").style.color = "#0192b3";
}

//Presents loading screen on home page until clicked
$('body').loading({
  stoppable: true
});

//Javascript modal
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
