/*###############   Without var polute the global scope  ########### */

//var x=[1,2,3,4];

//y="this is a script";

/*###############   Block scope let variable 

(JavaScript Versus ECMAScript
ECMAScript is the official name for JavaScript. A new name became necessary because
there is a trademark on Java (held originally by Sun, now by Oracle). At the moment,
Mozilla is one of the few companies allowed to officially use the name JavaScript because
it received a license long ago. For common usage, the following rules apply:
• JavaScript means the programming language.
• ECMAScript is the name used by the language specification. Therefore, whenever
referring to versions of the language, people say ECMAScript. The current version
of JavaScript is ECMAScript 5; ECMAScript 6 is currently being developed.
Influences and Nature of the Language
JavaScript’s creator, Brendan Eich, had no choice but to create the language very quickly
(or other, worse technologies would have been adopted by Netscape). He borrowed from
several programming languages: Java (syntax, primitive values versus objects), Scheme

and AWK (first-class functions), Self (prototypal inheritance), and Perl and Python
(strings, arrays, and regular expressions).
JavaScript did not have exception handling until ECMAScript 3, which explains why
the language so often automatically converts values and so often fails silently: it initially
couldn’t throw exceptions.
On one hand, JavaScript has quirks and is missing quite a bit of functionality (block-
scoped variables, modules, support for subclassing, etc.). On the other hand, it has
several powerful features that allow you to work around these problems. In other lan‐
guages, you learn language features. In JavaScript, you often learn patterns instead.
Given its influences, it is no surprise that JavaScript enables a programming style that
is a mixture of functional programming (higher-order functions; built-in map, reduce,
etc.) and object-oriented programming (objects, inheritance).
    
    ######################## */

/*
var ourFunction = function(){

    //var x = 'This is in function scope'
    let x = 'This is in function scope'

    if(true){
        //var x= 'This is in block scope'
        let x= 'This is in block scope'
        console.log(x)
    }
    console.log(x)
}

ourFunction()
*/

/*###############   Spread Operator  ######################## */
//var awesomeBands =  ['Bayside','Senses fail'];

/*
var bands = ['Rammstein', 'Silverstein',...awesomeBands];
console.log(bands); */

/*
var badFunction = function(...args){
    for (var x=0;x<args.length;x++){
        console.log(args[x]);
    }
}

badFunction(...awesomeBands);*/

/*
var badFunction = function(){
    for (var x=0;x<arguments.length;x++){
        console.log(arguments[x]);
    }
}

badFunction(...awesomeBands);*/

/*###############   Destructuring Assignment  ######################## */
/*
var a,b,rest;

//[a,b,...rest] = [1,2,3,4,5,6,7,8,9];

[a,b] = [1,2,3,4,5,6,7,8,9];

console.log(a);
console.log(b);*/
//console.log(rest);


/*###############   Shorthand object Creation  ######################## */
/*
var myObj ={x:'hey', y:'you'};

console.log(myObj.x);*/

/*
var name = 'Ramm';

var origin = 'Germany';

var genre = 'Rock';

var obj = {name, origin,genre};

console.log(obj);
*/

/*###############   Arrow Function  ######################## */

/* var oldWay =  function(){
    alert('Hello World');
}

//oldWay();
oldWay.apply(this);  */

/* var arrowFunction = () => {
    alert('Hello from an arrow function');
}

arrowFunction(); */

/* var arrowFunction = (arg1, arg2) => {
    alert(arg1 +' '+arg2);
}

arrowFunction('This is arg1' , 'This is arg2'); */

/*###############   Template Literals  ######################## */

/* 
var band='Bayside';

var longString = `this is a long string
this is a long string
this is a long string
Band Name=${band}
this is a long string
this is a long string`;

console.log(longString);

var longFunction = (bandName,around)=>{
    return `
    ${bandName} is a rock band that has been around
    since ${around+5} years
    `
   }
   
   console.log(longFunction(band,10)); */


/*###############   Classes  ######################## */

class Band{
    constructor(name, origin){
        this.name=name || 'default name';
        this.origin=origin || 'default origin';
    }
    printName(){
        console.log('Name = '+this.name);
    }
    printOrigin(){
        console.log('Origin = '+this.origin);
    }
}

//var baySide = new Band('Bayside','New York');

//baySide.printName();
//baySide.printOrigin();





/*###############   Sub-Classing and Super()  ######################## */

class Member extends Band{
    constructor(name,origin,genre){
        super(name,origin);
        this.genre=genre||'default genre';
    }

    printName(){
        console.log('This is an override');

    }
    printGenre(){
        console.log('Genre-'+ this.genre);
    }
}

var member = new Member('Bay side','test','Pure Fuck');

member.printName();
member.printOrigin();
member.printGenre();








/*###############   Const   ######################## */

const constValueIsReadOnly = 'You can not reassign this' ;

//constValueIsReadOnly ='reassigned';
console.log(constValueIsReadOnly);
import  {AnotherMethod}  from  './second.js';
import testSecond from "./second";

AnotherMethod();
testSecond();
var test = {foo:'bar'};

const obj = test;

obj.fuck='in ass';

test.suck='my dick';

console.log(obj);
//obj = {};



/*###############   Using source map for debugging  ######################## */

//   \ES6_Tutorial>npm run babel -- first.js -o bundle.js -w --source-maps


/*###############   Default Argument  ######################## */

/* 
function defaultArgumentFunction(a) {
    console.log(a + 10); // prints NaN since a is undefined
} */

function defaultArgumentFunction(a=0) {
    console.log(a + 10); // prints NaN since a is undefined
}

defaultArgumentFunction();
/*###############   New For loop  ######################## */

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i of myArray){
    console.log(i);
}


/*###############   Module Loading  ######################## */