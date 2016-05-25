var g = G$('John', 'Doe');

// g.greet().setLang('es').greet(true).log();

$('#login').on('click', function() {
  // Instantiate new var just for this function...
  var loginGreetr = G$('John', 'Doe');

  // Hide the login selector after submission...
  $('#logindiv').hide();

  // Set language based on select value, greet into heading, and log to console...
  loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})
