const closeBtn = document.getElementsByClassName('close');
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
const letters = /^[A-Za-z]+$/;
const FirstName = document.getElementById('first_name');
const SecondName = document.getElementById('second_name');
function myFunction() {
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
	if(first_name.value.match(letters) && second_name.value.match(letters)) {
		document.getElementById('response-box').style.display = 'flex';	
		document.getElementById('output').innerHTML = SecondName.value;
		console.log(first_name.value, second_name.value, subject.value);
	}
}