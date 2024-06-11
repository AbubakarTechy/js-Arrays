________________________//Arrays in js

let marks= [45,66,34,12,89];
console.log(marks);

console.log(marks.length);  //propert

console.log(marks[0]);// to access single item


marks[0]=50;        // to change value
console.log(marks);

__________________________//Loop on arrays

let marks= [45,66,34,12,89];
for(let i=0;i<marks.length;i++){    //for loop
    console.log(marks[i]);
}

//For of is more preferable
let marks=[22,1,3,4,5,44,3];
for(let m of marks){
    console.log(m);
}

__________________________________//Practice Questions
//i) Average marks
let marks=[85,97,44,37,76,60];
let sum=0;
for(let m of marks){
   sum= sum+m;
}

let average=sum/6;
   console.log(average);

   //ii) prices 10% off

   let prices=[250, 645,300 , 900 ,50];

   for(let i=0;i<prices.length;i++){
       let offer=prices[i]/10;
       prices[i]-=offer;
   }
   console.log(prices);
   
___________________________________________________________________________________________
 ________________________________//Array Methods
 
 //PUSH () --->add itmes on end

 let foodItems=["potato" , "apple" , "tomato"];
 foodItems.push("chips");
 console.log(foodItems);

 //POP() -----> delete and return

  foodItems.pop();
  console.log(foodItems);   

 //toString()
 
 let foodItem=["potato" , "apple" , "tomato"];
 console.log(foodItem.toString());

//Concate() --->Join multiple arrays

let alpha=["A" ,"B" , "C" , "D"];
let num=["1" , "2" , "3" ,"4"];

let res=alpha.concat(num);
console.log(res);

//Unshift() ---> add to start

let food=["potato" , "apple" , "tomato"];
food.unshift("chips");
console.log(food);


//shift()  -----> delete from start
let hero=["srk" ,"salman"];
hero.shift();
console.log(hero);

//Slice()----->  return a piece of array

let uni=["UCP","UMT","UOL","UON"];
console.log(uni.slice(1));

//Splice --->  add, remove , dlete
let name=["bkr", "ali" , "ch" , "hamza","Tony"];
console.log(name.splice(0,2));

_____________________________________________________________________________________________


//Practice Question   ----> use shift, splice , push
let com=["Bloomberg" , "microsoft" ,"Uber" , "Google" , "IBM" , "Netflix"];

com.shift("Bloomberg");
console.log(com);

com.splice(2,1,"Ola");
console.log(com);

com.push("Amazon");
console.log(com);
