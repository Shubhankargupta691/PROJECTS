let renderedArray = [];// Creating array to store randomly generated numbers

let renderNewBars = (totalBars = 50) => {
    deleteBars();
    renderedArray = [];
    for (let i = 0; i < totalBars; i++) {
        renderedArray.push(Math.floor(Math.random() * 200) + 1);
    }// render random array of numbers between 0 and 200
    const bars = document.querySelector("#bars");// this is the div element for bars 
    for (let i = 0; i < totalBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${renderedArray[i]}%`;
        bar.classList.add('bar');
        bar.classList.add('barItem');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }// render bar elements, traversing totalBars condition, add 'bar' as class
};

let deleteBars = () => {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
};// clear previous bars so that new elements can be rendered

let timeInMilliseconds = (milliseconds) => {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milliseconds);
    })
};// render sorting animations given input time in ms (1000 = 1s)

let swapHeights = (barHeight1, barHeight2) => {
    let temp = barHeight1.style.height;
    barHeight1.style.height = barHeight2.style.height;
    barHeight2.style.height = temp;
};// swap the value height for the two input height parameters

let disableSortingButtons = () => {
    document.querySelector(".sortButton").disabled = true;
};// disables sorting button

let enableSortingButtons = () => {
    document.querySelector(".sortButton").disabled = false;
};// enables sorting button

let disableSlider = () => {
    document.querySelector(".slider").disabled = true;
};// disables array size slider

let enableSlider = () => {
    document.querySelector(".slider").disabled = false;
};// enables array size slider

let disableNewArrayBtn = () => {
    document.querySelector(".newArray").disabled = true;
};// disables newArray button

let enableNewArrayBtn = () => {
    document.querySelector(".newArray").disabled = false;
};// Enables newArray button

let arraySize = document.querySelector('#arraySize');// array size slider element

arraySize.addEventListener('input', function(){
    renderNewBars(parseInt(arraySize.value));
});// update the bars length and render new bars

let delay = 260;// default input for timeInMilliseconds function

let delayElement = document.querySelector('#speedInput');// speed slider element

delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});// update delay time 

renderNewBars();// render bars when site is visited

const newArray = document.querySelector(".newArrayButton");// newArray button

newArray.addEventListener("click", function(){
    enableSortingButtons();
    enableSlider();
    renderNewBars(arraySize.value)
});//re-enable all sorting buttons, sliders and render new bars