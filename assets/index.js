const arrOptions = document.getElementsByTagName('option');
let quantityOptions = 5;
let arrLetters = [];
let uniqueArrLetters = [];


let promise = fetch('http:/list.json', )
  .then(res =>res.json())
  .then(data=>{console.log('data from server',JSON.stringify(data))})
  .catch(err => {
    console.log('Failed fetch ', err);
  });

console.log(promise)



for(let a = 10;a < 36;a++){	
	arrLetters.push(a.toString(36));
};
	
for(;uniqueArrLetters.length < quantityOptions;){
	givRandomNumber(0,arrLetters.length - 1);
};

if(uniqueArrLetters.length == quantityOptions){
	addResultInOption();
}	;

function givRandomNumber (min,max) {
	let randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
	addUniqueLetter(randomNumber);
};

function addUniqueLetter (number) {
	if(uniqueArrLetters.indexOf(arrLetters[number]) == -1){
		uniqueArrLetters.push(arrLetters[number])
	}	
};

function addResultInOption () {
	for(key in uniqueArrLetters){
		arrOptions[key].innerText = uniqueArrLetters[key];
		arrOptions[key].value = uniqueArrLetters[key];
	}
};



