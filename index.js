var ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log("ages array: ", ages);
console.log("   " , ages[ages.length - 1], " - ", ages[0] , " = ", ages[ages.length - 1] - ages[ages.length - ages.length]);

ages.push(13);
console.log("New ages array: ", ages);
console.log("   " , ages[ages.length - 1], " - ", ages[0] , " = ", ages[ages.length - 1] - ages[ages.length - ages.length]);


var num = 0
for(let i = 0; i < ages.length; i++){
    num = num + ages[i]
    if (i === (ages.length - 1)) {
      console.log("Ages added together: ",num);  
      console.log("number of elements in the array: ", ages.length);
      console.log(num,  "/" , ages.length, " = ", (num / (ages.length)));
      console.log("Array avg: " , (num / (ages.length)));
    }

}

console.log();
console.log("question 2")
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

num = 0
for(let i = 0; i <= (names.length - 1) ; i++){
  num = num + names[i].length
  if(i === (names.length - 1)) {
    console.log("Legnth of str: ", num);
    console.log("Number of elements in an array= ", names.length)
    console.log("Average length of name: ", num / names.length);
  }
}


var str = ""
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
}
console.log("namesLength: ", namesLength);

console.log(`
Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);

num = 0
for(let i = 0; i < namesLength.length; i++){
  num = num + namesLength[i]
};
console.log(num);

console.log(`
Question 7:  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).`);

function wordsConcatenated(word, n){
    let answer = "";
    for(let i = 0; i <= n; i++){
      answer = answer + word;  
    }
    return answer;
}

console.log(wordsConcatenated('Hello', 4));

console.log(`
Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.`);
function fullName(firstName, lastName){
  return firstName + " " + lastName;
}
console.log(fullName('Sam', 'Huggins'));

