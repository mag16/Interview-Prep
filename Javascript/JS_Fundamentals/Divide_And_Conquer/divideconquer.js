// FE Masters A Practical Guide to Algorithms with Javascript

// Task: implement linear search

function linearSearch(list, item) {
    let index = -1;

    for(let i = 0; i < list.length; i++) {
        if(list[i] === item){
            index = i; //index of 90 = 3
        }
    }

    return index;
};

console.log(linearSearch([2,6,7,90,103], 90));

//bgando solution
function linearSearch2(list, item) {
    let index = -1;

    list.forEach((listItem, i) => {
        if(listItem === item){
            index = i; //index of 6 = 1
        }
    });

    return index;
};

console.log(linearSearch([2,6,7,90,103,400,105], 6));