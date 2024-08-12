/*
document.querySelector(".anyclass")
document.getElementById("name-of-that-id")
document.getElementById("name-of-that-id").click()
document.getElementsByTagName("h1")
console.clear
console.assert(4==(6-2))

1.ways to print msg
alert("anymsg to print")

2.javascript console api
console.log("any msg to print")
console.warn("this is warningg")
console.error("this is an errorr")



// 3. Javascript variables

var number1=34;
var number2=46;
console.log(number1 + number2);

// Datatypes in javascript
var num1=234;
var string1='this is a string'

// object datatype
var marks = {
    aman:54,
    harry:28,
    arun:78
}
console.log(marks);

var und = undefined;
var und;
console.log(und);

var n = null;
console.log(n);

var a=12
var b=31
console.log("a+b")

console.log(true&&true)
console.log(!false)
// console.log(true!!true)


function avg(a, b){
    return (a + b)/2;
}

c1 = avg(4, 6);
c2 = avg(12, 43);
console.log(c1, c2);

// blue color text in console means its number
// black color text in console means its string

var age = 18;
if (age>18){
    console.log("you can vote");
}
else{
    console.log("you cant vote");
}


// var arr=[1,2,3,4,5,6,7];
// console.log(arr);
// for (var i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

arr.forEach(function(element){
    console.log(element)
})


// const no=1233;
var arr=[1,2,3,4,5,6,7];
let p=0;
    while (p<arr.length){
        console.log(arr[p]);
        p++;
}

do{
    console.log(arr[p]);
    p++;
}while(p<arr.length)


let myarr=['fan','camera',34, null, true]
// array method
console.log(myarr.length);
myarr.pop();
myarr.push('harry');
myarr.shift()

const newlen = myarr.unshift('harry')
console.log(newlen);
console.log(myarr);

// string methods in js

let a=12
console.log(a)


// string methods in javascript
let mystring = 'this is my string, my';
console.log(mystring.length)
console.log(mystring.indexOf('my'))
console.log(mystring.lastindexOf('my'))
console.log(mystring.slice(1,4))
d = mystring.replace("is","was")
console.log(d)


let mydate= new Date();
console.log(mydate.getTime());
console.log(mydate.getFullYear());

*/



// DOM MANIPULATION

let elem = document.getElementById('Click');
console.log(elem);

let elemclass = document.getElementsByClassName('container')
console.log(elemclass);
elemclass[0].style.background ='yellow'

