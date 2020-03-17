const closeBtn = document.getElementsByClassName('close');
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
const letters = /^[A-Za-z]+$/;
const lettersNumbers = /^[0-9A-Za-z\s\-]+$/;
function myFunction() {
	if(first_name.value.match(letters) && second_name.value.match(letters)) {
		document.getElementById('response-box').style.display = 'flex';	
		document.getElementById('output').innerHTML = document.getElementById('second_name').value;
		document.getElementById('first_name').style.borderColor = 'black';
		document.getElementById('second_name').style.borderColor = 'black';
		console.log(first_name.value, second_name.value, subject.value)
	}
	if(first_name.value.match(lettersNumbers)) {
		document.getElementById('first_name').style.borderColor = 'red';
	}
	if(second_name.value.match(lettersNumbers)) {
		document.getElementById('second_name').style.borderColor = 'red';
	}
	if(first_name.value.match(letters)) {
		document.getElementById('first_name').style.borderColor = 'black';
	}
	if(second_name.value.match(letters)) {
		document.getElementById('second_name').style.borderColor = 'black';
	}
}