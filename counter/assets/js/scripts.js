var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var button_decrement = document.getElementById('subtract');
var button_increment = document.getElementById('add');

update_color();
button_increment.addEventListener("click", increment);
button_decrement.addEventListener("click", decrement);

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    update_color();
    console.log('aumentou');
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    update_color();
    console.log('diminuiu');
}

function update_color() {
    if(currentNumber <= 0) { currentNumberWrapper.style.color = 'red'; }
    else { currentNumberWrapper.style.color = 'black'; }
}