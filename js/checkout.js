function addInvalidClass(element, error) {		// modificamos el css si es true/false
	if (error) {
		element.classList.add("is-invalid");
	} else {
		element.classList.remove("is-invalid");
		element.classList.add("is-valid");
	}
};
 
function validate() { 
	let error = 0
	let regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
	let regexPassword = /^[a-zA-Z0-9]+$/;
	let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAdress = document.getElementById('fAddress');
	let fLastN = document.getElementById('fLastN');
	let fPassword = document.getElementById('fPassword');
	let fPhone = document.getElementById('fPhone');

	// NAME
	if (fName.value === '' || fName.value.length < 3 || !fName.value.match(regexName)) {
		addInvalidClass(fName,true);
		error++;
	} else { addInvalidClass(fName, false); }

	// EMAIL
	if (fEmail.value === '' || fEmail.value.length < 3 || !fEmail.value.match(regexEmail)) {
		addInvalidClass(fEmail,true);
		error++;
	} else { addInvalidClass(fEmail, false); }

	// ADRESS
	if (fAdress.value === '' || fAdress.value.length < 3) {
		addInvalidClass(fAdress,true)
		error++;
	} else { addInvalidClass(fAdress, false); }

	// LAST NAME
	if (fLastN.value === '' || fLastN.value.length < 3 || !fLastN.value.match(regexName)) {
		addInvalidClass(fLastN,true);
		error++;
	} else { addInvalidClass(fLastN, false); }

	// PASSWORD
	if (fPassword.value === '' ||  fPassword.value.length < 4 || !fPassword.value.match(regexPassword)) {
		addInvalidClass(fPassword,true);
		error++;
	} else { addInvalidClass(fPassword, false); }

	// PHONE
	if (fPhone.value === '' || !fPhone.value.length === 9) {
		addInvalidClass(fPhone,true);
		error++;
	} else { addInvalidClass(fPhone, false); }

	// ERROR
	if (error > 0) {
		document.getElementById('checkoutForm').addEventListener("submit", (event) => { 
			event.preventDefault(); 
		});
	} else {
		alert("OK");
	}
}