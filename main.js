/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "sam",
		password: "minecraftskripty"
	}]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for (var i = 0; i < objPeople.length; i++) {
		if (username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!");
			return
		}
	}
	console.log("incorrect username or password");
}
