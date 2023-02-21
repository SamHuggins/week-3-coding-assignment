
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

//this doesn't work because the vars would have to be redeclared every time a new age was pushed
//could turn this into a function
//var firstAge = ages[ages.length - ages.length];
//var lastAge = ages[ages.length - 1];
//console.log(lastAge - firstAge);

console.log(ages[ages.length - 1] - ages[ages.length - ages.length]);

ages.push(7);
console.log(ages[ages.length - 1] - ages[ages.length - ages.length]);

//this section doesnt work yet
var num = 0
for(let i = 0; i < ages.length; i++){
    num = num + ages[i]
    if (i === (ages.length - 1)) {
        console.log(ages.length);
        console.log((num / (ages.length)));
    }

}