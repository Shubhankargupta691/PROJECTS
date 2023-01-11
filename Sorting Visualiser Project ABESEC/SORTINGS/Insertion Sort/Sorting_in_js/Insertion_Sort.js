let insertionSort = async () => {
    const insertionBar = document.querySelectorAll(".bar");
    insertionBar[0].style.background = '#F44336';
    for(let i = 1; i < insertionBar.length; i++){
        let j = i - 1;
        let key = insertionBar[i].style.height;
        insertionBar[i].style.background = 'gold';
        await timeInMilliseconds(delay);
        while(j >= 0 && (parseInt(insertionBar[j].style.height) > parseInt(key))){
            insertionBar[j].style.background = 'gold';
            insertionBar[j + 1].style.height = insertionBar[j].style.height;
            j--;
            await timeInMilliseconds(delay);
            for(let k = i; k >= 0; k--){
                insertionBar[k].style.background = '#F44336';
            };
        };
        insertionBar[j + 1].style.height = key;
        insertionBar[i].style.background = '#F44336';
    };
};

const insertionSortButton = document.querySelector(".insertionSort");
insertionSortButton.addEventListener('click', async function(){
    disableSortingButtons();//disable all sorting buttons during animation
    disableSlider();//disable array size slider
    await insertionSort();
    enableSortingButtons();//enable all sorting buttons after animation
    enableSlider();//enable array size slider
});