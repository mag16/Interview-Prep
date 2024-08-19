//what will the output here be?

function x(a){
    return function(b){
      return a + b;
    }  
  };
  
  const y = x(3); //3 + b
  const z = y(7); //7 + 3 = 10
  
  console.log(z); //10

  const person = {
    name : 'Alice',
    age: 25
  };
  
  const changeAge = (obj) => {
    obj.age = 30;
    obj = { name: 'Bob', age: 40 }; // created inside the func is local to this func and does not affect the original obj
  }
  
  console.log(changeAge(person)); // Undefined.  doesnt return anything aka no return statement
  
  //console.log(person.name); //Alice
  //console.log(person.age); // 25

  const Person = {
    name: "Marco",
    age: 45
  };

  const personCopy = Person;
  personCopy.name = "Joe";

  console.log(Person.name); // Joe
  console.log(personCopy.name); //Joe

/*
Key Concepts:
Objects in JavaScript:

In JavaScript, objects are stored in memory and variables that reference objects actually hold a reference (or pointer) 
to the location 
in memory where the object is stored, not the object itself.

Assignment by Reference:

When you do const personCopy = Person;, you're not creating a new, independent copy of the Person object. Instead, you're assigning the reference to the same object to the variable personCopy.
Now, both Person and personCopy point to the same object in memory.
Modifying Properties:

When you change personCopy.name = "Joe";, you're modifying the name property of the object that both Person and personCopy reference.
Since both variables reference the same object, changes made through personCopy are reflected in Person, and vice versa.

Output Explanation:
Person.name and personCopy.name:
After the assignment personCopy.name = "Joe";, the object referenced by both Person and personCopy has its name property set to "Joe".
Therefore, Person.name and personCopy.name both output "Joe".
Visualization:
Memory Reference:
Initially:
Person ➔ { name: "Marco", age: 45 }
personCopy is assigned the same reference:
personCopy ➔ { name: "Marco", age: 45 }
After personCopy.name = "Joe";:
The object in memory is now { name: "Joe", age: 45 }
Both Person and personCopy point to this updated object.
Conclusion:
The reason both Person.name and personCopy.name output "Joe" is that they both refer to the same 
object in memory. Changing the name property through one reference affects the other because they are not separate objects; 
they are just different references to the same object.
    
*/ 