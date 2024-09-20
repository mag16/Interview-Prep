// A practical guide to algorithms..FE Masters

const uniqueSort = function(arr) {
    const breadcrumbs = {};
    const result = [arr[0]];

    for (let i = 1; i < arr.length; i++){
        if(!breadcrumbs[arr[i]]){
            result.push(arr[i]);
            breadcrumbs[arr[i]] = true;
        }
    }
    return result.sort((a,b)=> a - b);
}

console.log(uniqueSort([4,2,2,3,2,2,2])); //[2,3,4]