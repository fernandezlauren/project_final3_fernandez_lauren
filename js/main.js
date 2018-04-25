$('#clock').countdown('2018/10/01', function(event) {
  $(this).html(event.strftime('%D days %H:%M:%S'));
});
