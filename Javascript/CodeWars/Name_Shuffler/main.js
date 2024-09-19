/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"


*/

function nameShuffler(str){
    //Shuffle It
    let shuffle = str.split(" ");
    
    [shuffle[0], shuffle[1]] = [shuffle[1], shuffle[0]]
    
    return shuffle.join(" ");    
}