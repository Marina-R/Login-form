$(document).ready(start);

function start() {
	var $user = $('#userName');
	var $key = $('#password');
	var combinations = [
	{
		email: 'aaron@theironyard.com',
		pass: 'password123'
	},
	{
		email:'admin@google.com',
		pass: 'pandas'
	},
	{
		email: 'luv_this_world@hotmail.com',
		pass: 'honeycrisp'
	}];

	$('form').submit(function(e) {
		e.preventDefault();
		if (validate() == true) {
			window.location.replace("http://theironyard.com");
		}
		function validate () {
			var result = false;
			if($user.val() == '') {
				$('#first').html('Please enter an email before logging in.');
				result = false;
			}
			if ($key.val() == '') {
				$('#second').html('Please enter a password before logging in.');
				result = false;
			}

			for(var i=0; i<combinations.length; i++) {
				if (!validator.isEmail($user.val())) {
					$('#first').html('Please enter a valid email address.');
					result = false;
				} else if ($user.val() !== combinations[i].email) {
					$('#first').html('Your user is not found');
					result = false;
				} else {
					$('#first').html('');
				}

				if ($key.val() !== combinations[i].pass) {
					$('#second').html('The password you entered is incorrect.');
					result = false;
				} else {
					$('#second').html('');
				}
				if ($key.val() == combinations[i].pass && $user.val() == combinations[i].email) {
					result=true;
				} 
			}
			return result;
		}
		
	})
}