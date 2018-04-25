
//This plugin creates countdown clock on index.html page
$('#clock').countdown('2018/10/01', function(event) {
  $(this).html(event.strftime('%D days %H:%M:%S'));
});
