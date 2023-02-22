var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("ages array: ", ages);

console.log("Ages last - Ages first");
console.log(ages[ages.length - 1] - ages[ages.length - ages.length]);

ages.push(13);
console.log("New ages array: ", ages);
console.log("Ages last - Ages first");
console.log(ages[ages.length - 1] - ages[ages.length - ages.length]);


var num = 0
for(let i = 0; i < ages.length; i++){
    num = num + ages[i]
    if (i === (ages.length - 1)) {
      console.log("Ages added together: ",num);  
      console.log("number of elements in the array: ", ages.length);
      console.log("Array avg: ");
      console.log((num / (ages.length)));
    }

}

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

console.log("Names concatinated: ");

