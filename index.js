console.log('Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.');
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log("ages array: ", ages);
console.log(ages[ages.length - 1], " - ", ages[0] , " = ", ages[ages.length - 1] - ages[0]);

ages.push(13); //adds a new element at the end of ages array
console.log("New ages array: ", ages);
console.log(ages[ages.length - 1], " - ", ages[0] , " = ", ages[ages.length - 1] - ages[0]);


var num = 0 //this is just a varible that i use in various places
for(let i = 0; i < ages.length; i++){
    num = num + ages[i] //adds all the ages together
    if (i === (ages.length - 1)) {
      console.log("Ages added together: ",num);  
      console.log("number of elements in the array: ", ages.length);
      console.log(num,  "/" , ages.length, " = ", (num / (ages.length)));
      console.log("Array avg: " , (num / (ages.length)));
    }

}

console.log(`
question 2:`);
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; //array of names

num = 0
for(let i = 0; i <= (names.length - 1) ; i++){
  num = num + names[i].length //finds the length of all the names
  if(i === (names.length - 1)) { //only happens at the end of the loop
    console.log("Legnth of str: ", num);
    console.log("Number of elements in an array= ", names.length)
    console.log("Average length of name: ", num / names.length);
  }
}


var str = ""; //similar to what I did with num, just a floating variable to store strings temperarily, probably could improve with using let
for(let i= 0; i < names.length; i++){
    str = str + names[i] + " ";
}
console.log("Names concatinated:", str);

console.log(
    `
Question 3: How do you access the last element of any array?
    Answer: (arrayName.lenght - 1)

Question 4: How do you access the first element of any array?
    Answer: either arrayName[0] or (arrayName.length - arrayName.length

Question 5: `
);

var namesLength = [];

for(let i = 0; i < names.length; i++){
    namesLength.push(names[i].length);     
} //finds the lenght of a string in names array and the stores that value in namesLength array

console.log("namesLength: ", namesLength);

console.log(`
Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);

num = 0
for(let i = 0; i < namesLength.length; i++){
  num = num + namesLength[i] 
}; //loops through namesLength and calculates the total value of the array
console.log(num);

console.log(`
Question 7:  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).`);

function wordsConcatenated(word, n){ //function takes a word and the amount of times to concatenate the word
    let answer = ""; //cannot leave this undefined or null because it will add undefined/null to the start of the string
    for(let i = 0; i <= n; i++){ //concatenates word n times 
      answer = answer + word;  
    }
    return answer; //returns the concatenated string
}

console.log(wordsConcatenated('Hello', 4)); //passes values into a function

console.log(`
Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.`);

function fullName(firstName, lastName){
  return firstName + " " + lastName;
}
console.log(fullName('Sam', 'Huggins')); 

console.log(`
Qustion 9:  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)

function isOverC(numArray){ //checks if numArray is over C (Roman numeral for 100)
  let answer = 0;
  for(let i = 0; i < numArray.length; i++){
    answer = answer + numArray[i];  
  }
  return (answer > 100); //returns true or false
}

var numbers = [50, 50, 50];
var alsoNumbers = [13, 27, 30, 12]; //this array is used in another question 

console.log(isOverC(numbers));

console.log(`
Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.`);

function numAvg(array){
  let answer = 0
  for(let i = 0; i < array.length; i++){
    answer = answer + array[i];
  }
  answer = answer / array.length;
  return answer;
}
console.log(numAvg(numbers));

console.log(`
Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)

function checkArray(firstArray, secondArray){
  let firstArrayAvg = 0;
  let secondArrayAvg =0;
  
  for(let i = 0; i < firstArray.length; i++){
    firstArrayAvg = firstArrayAvg + firstArray[i];
  }; 
  firstArrayAvg = (firstArrayAvg / firstArray.length) //
  
  for(let i = 0; i < secondArray.length; i++){
    secondArrayAvg = secondArrayAvg + secondArray[i];
  };
  secondArrayAvg = (secondArrayAvg / secondArray.length)
  return (firstArrayAvg > secondArrayAvg)
}
console.log(checkArray(numbers, alsoNumbers)); //passes two number arrays into the checkArray function

console.log(`
Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);

function willBuyDrink(isHotOutside, moneyInPocket){
  if(isHotOutside === true && moneyInPocket > 10.50){ //if it is hot outside AND moneyInPocket are both true this will run
    return true
  }else { //in all other cases this will run
    return false
  };
}

outsideTempHot = false
wallet = 20

console.log(willBuyDrink(outsideTempHot, wallet));

console.log(`
Question 13: Create a function of your own that solves a problem.

The exponentiation function calculates a number to the power of another number.
`);

function exponentiation(num, exponent,) { 
  return(num**exponent);
}
num = 2;
power = 3
console.log(num, "to the power of", power, " = ", exponentiation(num,power));