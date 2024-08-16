
//Ascending order
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; ++i){
        for(let j = 0; j < arr.length - i - 1; ++j){
            if(arr[j] > arr[j + 1]){
                // Swap arr[j] with arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


console.log(bubbleSort([5, 3, 8, 4, 2]))

//Descending Order
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] < arr[j + 1]){
                // Swap arr[j] with arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
