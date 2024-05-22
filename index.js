___________________________//Strings
let str="Abubakar Rasheed";

str.length;    //will tell length

console.log(str[0]); //access A



__________________________//Template Literals

let sentence=`This is a sentence`;
console.log(sentence);

//Why we use this

let obj={
    name:"AB",
    age:24
};

console.log("My name is ", obj.name 
,"And age is ",obj.age); //This is not readable

let output=`My name is ${obj.name} and age is ${obj.age}`;
console.log(output);
//This is more readable
//This is called string interpolation



_________________________//Ecape sequence
// /n next line
// /t tab
console.log("AbuBakar \n Rasheed");


______________________________//STRINGS Methods
//ToUpperCase()

let str="Abubakar";
str=str.toUpperCase();
console.log(str);

//ToUpperCase()
let str="ABUBAKAR";
str=str.toLowerCase();
console.log(str);

//str.trim() -->it remove whitespaces from end and start

let str="     Abu bakar in Js  ";
console.log(str.trim());

//str.slice  -->it cut parts

let str="01234567";
console.log(str.slice(0,6));

//str.concate()

let str1="Abubakar";
let str2="G";

let res= str1 + str2 ;
console.log(res);


____________________________//Practice Question
// prompt("Enter Your name=");
let str= prompt("Enter Your Full name =");
console.log("Your username is = " + "@" + str + str.length);