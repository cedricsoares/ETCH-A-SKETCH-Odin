
let chosenNumber

function designGrid(chosenNumber) {
	let i = 0;
	const container = document.querySelector('#container');
	for (i = 0; i < (chosenNumber ** 2); i++) {
		let div = document.createElement('div');
		container.appendChild(div);
		div.setAttribute('class', 'square');
		div.style.backgroundColor = 'white';
		div.style.height= 600 / chosenNumber + 'px';
		div.style.width= 600 / chosenNumber + 'px';
	}
	changeColor()
}

function changeColor() {
	let divChange = [];
	divChange = document.querySelectorAll('.square');
	divChange.forEach(function(e){
		e.addEventListener('mouseover', () => {
			e.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
		});
	});
}

function chooseNumber() {
	let btn = document.querySelector('#btn');
	btn.addEventListener('click', () => {
		let divChange = []
		divChange = document.querySelectorAll('.square');
		divChange.forEach(e => {
			e.remove()
		});
		chosenNumber = prompt('How many rows do you want to display in the sketch');
		console.log(chosenNumber);
		designGrid(chosenNumber);
		changeColor();
	});
}

designGrid(16)
chooseNumber()

