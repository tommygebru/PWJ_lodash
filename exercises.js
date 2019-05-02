const _ = {

clamp: function(num1, num2, num3){
let arg = arguments;
let arr = Object.values(arg);
console.log(arr);
//my arguments values

arr.sort(function(a, b){
  return a - b;
})

console.log(arr);
arr.pop();
arr.shift();
return arr.pop();
// push out the min

// push out the max

//console.log(num1, num2, num3);


},//clamp method


inRange: function(num, start, end){
let argue = {num: num, start: start, end: end}

//if value 3 is falsy then provide value 1 to 0 and let value 3 to 1
if(!end){
//console.log(`we dont have a third argument`);
argue.end = start;
argue.start = 0;
//console.log(argue.end);
//console.log(argue.start);
}


//if value 1 is higher than value 3 //swap
if(argue.start > argue.end)
{
  argue.end = start;
  argue.start = end;
//console.log(argue.end);
//console.log(argue.start);
}


//if value 1 is greater than or equal to value 2
if(argue.num > argue.end || argue.num < argue.start)
{return false}
else{return true}

},//inRange method


words: function(str){
let words = str.split(" ");
return words;
},//words method

pad: function(str, num){
    let isStr = str; //string
    let isArr = isStr.split(""); //array

  if(str.length === num){
    console.log("SAME-SAME");
    return str;
    }//if

      while(num >= isStr.length){
          isArr.push(" ");
          isStr = isArr.join("");
          if(num == isArr.length){
            return isStr;
          }
          else if (num>= isStr.length){
          isArr.unshift(" ");
          isArr.join("");
            if (num == isArr.length){
              return isStr;
            }//if
          }//elseif
      }//while
  return "ERROR: num is less than string length";
  },//pad method



/*
let cookie = {
spice: ["nutmeg", "ginger", "cinnamon"],
sugar: ["molasses", "cane sugar"],
flour: "all-purpose flour",
servings: 30
}//cookie
*/
has: function(object, key){
//console.log(object[key]);
return object.hasOwnProperty(key);
},//has method





/*
let object1 = {
  a: 1,
  b: 2,
  c: 3
}
*/
  invert: function(getsinverted){

  let object2 = new Object();
  let proparr = [];
  let valarr =[];

  for(var key1 in object1){
    proparr.push(key1);//123
    valarr.push(object1[key1]);//abc
  }

  let objlength = Object.entries(object1);
  for(let i = 0; i<objlength.length; i++){
  object2[Number(valarr[i])] = proparr[i];
  }

    return object2;
  },//invert method
//const object





/* the find key method */


findKey: function(obj, pre){
//predicate or pre
 for (let key in obj){

   let val = obj[key];
   let preReturns = pre(val);

  if(preReturns){
    return "something happened";
  }else{return "nothing happened";}
 }//loop

    console.log("i dont know anything");
    },//method






/* the drop method */





  drop: function(arr, num){

    if(num){
         //slice
      let dropArr = arr.slice(num);
      return dropArr;
    }else{
      num = 1;
      //slice
      let dropArr = arr.slice(1);
      return dropArr;
    }

    },//method




/* the drop while method */


dropWhile: function(arr, pre){
const call = (e, index)=>{
return !pre(e, index, array);
}
let numDrop = array.findIndex(call);
let arrDrop = this.drop(array, numDrop);
return arrDrop;

},//method







/* the chunk method */

chunk: function(arr, size=1){
let chunked = [];
for(let i=0; i<arr.length; i+= size){
let chunkedArr = arr.slice(i, i+size);
chunked.push(chunkedArr);
}
return chunked;
}//method






};// _ object
_.clamp(3, 8, 5);
_.inRange(3,8,5);
_.words("keep up the good work and happy coding");
_.pad("tre", 3);
_.has();
_.invert();
_.findKey()
_.drop([1,2,3,4,5], 3);
_.dropWhile();
_.chunk();
// Do not write or modify code below this line.
module.exports = _;
