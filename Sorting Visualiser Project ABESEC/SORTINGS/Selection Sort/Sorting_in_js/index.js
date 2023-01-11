let selectionSort = async () => {
    const selectionBar = document.querySelectorAll(".bar");
    for(let i = 0; i < selectionBar.length; i++){
        let lesserIdx = i;
        selectionBar[i].style.background = 'gold';
        for(let j = i+1; j < selectionBar.length; j++){
            selectionBar[j].style.background = 'gold';
            await timeInMilliseconds(delay);
            if(parseInt(selectionBar[j].style.height) < parseInt(selectionBar[lesserIdx].style.height)){
                if(lesserIdx !== i){
                    selectionBar[lesserIdx].style.background = 'cyan';
                }
                lesserIdx = j;
            } 
            else{
                selectionBar[j].style.background = 'cyan';
            }   
        }
        await timeInMilliseconds(delay);
        swapHeights(selectionBar[lesserIdx], selectionBar[i]);
        selectionBar[lesserIdx].style.background = 'cyan';
        selectionBar[i].style.background = '#F44336';
    }
}

const selectionSortButton = document.querySelector(".selectionSort");
selectionSortButton.addEventListener('click', async function(){
    disableSortingButtons();//disable all sorting buttons during animation
    disableSlider();//disable array size slider
    await selectionSort();
    enableSortingButtons();//enable all sorting buttons after animation
    enableSlider();//enable array size slider
});