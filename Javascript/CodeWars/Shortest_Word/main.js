/*
7KU Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s){
    let words = s.split(" ");
    let shortestWord = words[0];
    
    for (const word of words) {
      if (word.length < shortestWord.length) {
        shortestWord = word;
      }  
    } 
    
    return shortestWord.length;
    
  }

  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))