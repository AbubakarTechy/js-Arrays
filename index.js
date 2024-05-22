___________________________//Arrays
let marks= [45,66,34,12,89];
console.log(marks);
console.log(marks.length);  //property
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
   
   
     

