let partition = async (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let swapIdx = start;
    arr[end].style.background = '#F44336';
    arr[start].style.background = '#F44336';
    for (let i = start + 1; i <= end; i++) {
        arr[i].style.background = '#F44336';
        await timeInMilliseconds(delay);
        if (parseInt(arr[i].style.height) < parseInt(pivot.style.height)) {
            swapIdx++;
            swapHeights(arr[i], arr[swapIdx])
            arr[i].style.background = 'gold';
            await timeInMilliseconds(delay);
            arr[i].style.background = '#F44336';
        }
    }
    
    swapHeights(arr[swapIdx], arr[start])
    arr[end].style.background = '#F44336';
    await timeInMilliseconds(delay);
    return swapIdx;
}

let quickSort = async (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = await partition(arr, left, right);
        await quickSort(arr, left, pivotIndex - 1);
        await quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}


const quickSortButton = document.querySelector(".quickSort");
quickSortButton.addEventListener('click', async function(){
    let quickSortBar = document.querySelectorAll('.bar');
    let left = 0;
    let right = quickSortBar.length - 1;
    disableSortingButtons();//disable all sorting buttons during animation
    disableSlider();//disable array size slider
    await quickSort(quickSortBar, left, right);
    enableSortingButtons();//enable all sorting buttons after animation
    enableSlider();//enable array size slider
});