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
			window.location.href = "http://theironyard.com";
		}
		function validate () {
			var initialValidation = true;
			if (!validator.isEmail($user.val())) {
				$('#first').html('Please enter a valid email address.');
				initialValidation = false;
			}
			if($user.val() == '') {
				$('#first').html('Please enter an email before logging in.');
				initialValidation = false;
			} 	
			if ($key.val() == '') {
				$('#second').html('Please enter a password before logging in.');
				initialValidation = false;
			} 

			if(initialValidation == true) {
				var user;
				for(var i=0; i<combinations.length; i++) {
					if ($user.val() == combinations[i].email) {
						user = combinations[i];
					}
				}
				if(user === undefined) {
					$('#first').html('Your user is not found');
				} else if ($key.val() == user.pass) {
					return true;
				} else {
					$('#second').html('The password you entered is incorrect.');
					return false;
				}
			}
		}
	})
}