const closeBtn = document.getElementsByClassName('close');
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function() {
    document.getElementById('response-box').style.display = 'none';
  });
}
const letters = /^[a-zA-Z]+$/;
const FirstName = document.getElementById('first_name');
const SecondName = document.getElementById('second_name');
const radios = document.getElementsByName('gender');
function myFunction() {
	for (var i = 0, length = radios.length; i < length; i++) {
  	if (radios[i].checked) {
    	radios[i].value;
    	break;
  		}
	}
	if(first_name.value.match(letters)) {
		FirstName.style.borderColor = 'black';
	} else{
		FirstName.style.borderColor = 'red';
	}
	if(second_name.value.match(letters)){
		SecondName.style.borderColor = 'black';
	} else{
		SecondName.style.borderColor = 'red';
	}
	if(first_name.value.match(letters) && second_name.value.match(letters) && radios[i].checked) {
		document.getElementById('response-box').style.display = 'flex';	
		document.getElementById('output').innerHTML = SecondName.value;
		console.log(first_name.value, second_name.value, radios[i].value, subject.value);
	}
}