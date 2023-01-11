let bubbleSort = async () => {
    const bubbleBar = document.querySelectorAll(".bar");
    for(let i = 0; i < bubbleBar.length-1; i++){
        for(let j = 0; j < bubbleBar.length-i-1; j++){
            bubbleBar[j].style.background = 'gold';
            bubbleBar[j+1].style.background = 'gold';
            if(parseInt(bubbleBar[j].style.height) > parseInt(bubbleBar[j+1].style.height)){
                await timeInMilliseconds(delay);
                swapHeights(bubbleBar[j], bubbleBar[j+1]);
            }
            bubbleBar[j].style.background = 'cyan';
            bubbleBar[j+1].style.background = 'cyan';
        }
        bubbleBar[bubbleBar.length-1-i].style.background = '#F44336';
    }
    bubbleBar[0].style.background = '#F44336';
}

const bubbleSortButton = document.querySelector(".bubbleSort");
bubbleSortButton.addEventListener('click', async function(){
    disableSortingButtons();//disable all sorting buttons during animation
    disableSlider();//disable array size slider
    await bubbleSort();
    enableSortingButtons();//enable all sorting buttons after animation
    enableSlider();//enable array size slider
});