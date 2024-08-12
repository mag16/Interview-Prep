// P.35

function findSmallest(arr){
    let smallest = arr[0];
    let smallest_index = 0;

    for(let i = 1; i < arr.length; i++){
        if (arr[i] < smallest){
            smallest = arr[i];
            smallest_index = i;
        }
    }
return smallest_index;
}

function selectionSort(arr){
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        let smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest,1)[0]);
    }

    return newArr;
}

console.log(selectionSort([5,3,6,2,10]))

/* 
Time Complexity
Worst-case Time Complexity: 
𝑂(𝑛^2)

Best-case Time Complexity: 
𝑂(𝑛^2)

Average-case Time Complexity: 
𝑂(𝑛^2)

Space Complexity: 
𝑂(1) (In-place sorting)

Selection sort is known for its simplicity but is inefficient on 
large lists compared to more advanced algorithms like quicksort, mergesort, or heapsort, 
which have better average-case time complexities. Its main advantage is its simplicity and minimal 
additional memory usage, which can be useful in environments with limited resources.

*/