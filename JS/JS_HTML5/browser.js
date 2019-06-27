//LESSON 2.3 //Below is a lesson on the window object

// function ShowMessage(msg){
//   document.getElementById("message").innerHTML += "<p>"+msg+"</p>";
// }

// // function alert(msg){
// //   ShowMessage("Message: " + msg);
// // }


// ShowMessage("window.name " + window.innerWidth);
// ShowMessage("window.innerHeight " + window.outerWidth);

// window.scrollTo(0,100);
// ShowMessage("window.pageX Offset: " + window.pageXOffset);
// ShowMessage("window.pageYOffset: " + window.pageYOffset);

// // window.print();


// //first option is window to open, second is window name
// var win = window.open("", "new-win", "width=300, height=300, menubar=0, resizable=0, screenY=200");

//LESSON 2.4

//location property is the child property of the window object

// ShowMessage("window.location: " + window.location);
// ShowMessage("window.location.protocol: " + window.location.hostname);
// ShowMessage("window.location.search: " + window.location.search);

//below a dialogue will open saying "open google?"
// if (window.confirm("Open Google?")){
//   window.location = "http://www.google.com"
// }

//LESSON 3.1



//JS meetup

function compose2(fn1, fn2){
  return function comp(arg1, arg2,arg3){
    return fn2(
            fn1(arg1, arg2), arg3

    );
  };
}



//immutability - es6

var x = 2;
x++; //allowsd

const y = 3;
y++; //not allowed

const z = [4,5,6];
z = 10; //not allowed
z[0] = 10; //allowed

var z  = Object.freeze([4,5,6,[7,8,9]])
z[0] = 10; //not allowed
z[3][0] = 10; //allowed  -- shallow

//write algorithms assuming all values are mmutable

function doubleThemImmutable(item){
  var newList = [];
  for (var i=0; i<list.length; i++){
    newList[i] = list[i] * 2;
  }
  return newList;
}

//CLOSURE
function add(x,y){
  return x + y; 
}
function curry(fn, ...args){ //takes all functions besides fn and puts into args into an array
  return function(lastArg){
    return fn(...args, lastArg);
  };
}

var addTo10 = curry(add,10);
addTo10(32); //42

//RECURSION

//Imperative (for loop)
//first paramater is named sum on purpose
function sumIter(sum, ...nums){
  for(var i=...){
    sum = sum + nums[i];
  }
  return sum;
}
sumIter(3,4,5,6,7,8,9); //42

function sumRecur(sum,...nums){
  if(nums.length == 0) return sum;
  return sum + sumRecur(...nums);
}

sumRecur(3,4,5,6,7,8,9) //42

//PTC (proper taill call)
  //function call is excuted and the return call is immediately returned. RE memory, no reason to keep the previous stack frame and 
  //have the function just return to itself

function sumRecur(...nums){
  return recur (...nums); //this is what runs on itself. it's a proper tail call because it has only function in it

  function recur(sum, num, ...nums){
    sum += num;
    if (nums.length == 0) return sum;
    return recur(sum, ...nums); //sum is returned back in
  }
}

sumRecur(3,4,5,6,7,8,9); //42

//the before function, the inner function would run everything the outher function is called, to fix that...

const sumRecur = (function(){
  return (...nums) => recur(...nums);

  function recur(sum, num, ...nums){
    sum += num;
    if(nums.length == 0) return sum;
    return recur(sum, ...nums); // ... is called the spread operator
  }
})();

//OR FINALLY..."signatures match" this is also a PTC

function sumRecu(sum, num, ...nums){
  sum += num;
  if (nums.length==0) return sum;
  return sumRecur(sum, ...nums);
}

sumRecur(3...9); //42

//ptc is used for unbounded function calls

//lists

//map:transformation. start with a list of values and end up with a new list of values 1:1. not the same list transofmred in place

function doubleIt(val){
  return val * 2;
}
[1,2,3].map(doubleIt); //[2,4,6]

//filter
function onlyOdds(val){
  return val % 2 == 1;
}

[1,2,3,4,5].filter(onlyOdds);

//reduce: combining. other two always resulted in a list, this one doesn't always result in a list

function acronym(str, word){
  return str + word.charAt(0);
}
["functional", "light", "javascript"].reduce(acronym, ""); //FLJS

//RECAP
//pure functions gets rid of side effects
//composition
//immutability - treat everything like that even if it isnt
//treat closure as a key tool
//recursion for more readable code
//listes (map, filter, reduce)









