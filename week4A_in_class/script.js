// console.log('hello'); 

//find the button html and store in a variable 
const button = document.querySelector('button.trigger-animation');
const box = document.querySelector('div.toggle');  

//listen for a click event on our button and toggle the animation class
//on our box element
button.addEventListener('click', function(){
    // console.log('button clicked'); 
    box.classList.toggle('animation'); 
});

const numberButton = document.getElementById('insert-number'); 
const max = 10;
//create a paragraph element 
const numberP = document.createElement('p'); 
//add paragraph element to the document 
document.body.appendChild(numberP);

numberButton.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random()*max); 
    numberP.textContent = randomNumber;
}); 


