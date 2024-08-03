/* 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

*/

function squareDigits(num){
     
     // split the numbers in num
     let digits = num.toString().split("");
     console.log(digits);

     let split_digits = digits.map(Number);
     console.log(split_digits)
    
     
     //square each number in the array
     let squared_digits = split_digits.map(num => num * num)
     console.log(squared_digits)
     
     // concat all the numbers into one
     let join_digits = Number(squared_digits.join(""))
     
     return join_digits;
       
   }

   console.log(squareDigits(656))