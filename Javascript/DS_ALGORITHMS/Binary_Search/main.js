

function binarySearch(list, num){

    let low = 0;
    let high = list.length - 1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

        if (guess === num){
            return mid;
        }
        if (guess > num){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return "Number not found in this list!!!";
}