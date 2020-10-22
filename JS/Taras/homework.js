// //##############    2.1    #################
// alert("I’m JavaScript!");
//
// //##############    2.4.1    #################
// let admin;
// let name;
// name = "Ivan";
// admin = name;
// alert(admin);
//
// //##############    2.4.2    ##################
// let planet = "Earth";
// let currentVisitor;
//
// //##############    2.4.3    ##################
// //Uppercase for both
//
// //##############    2.5    ##################
// // 1
// // name
// // Ilya
//
// //##############    2.6    ##################
// name = prompt("What is your name?");
// alert(name);
//
// //##############    2.8.1    ##################
// a = 2;
// b = 2;
// c = 2;
// d = 1;
//
// //##############    2.8.2    ##################
// a = 4;
// x = 5;
//
// //##############    2.8.3    ##################
// // "" + 1 + 0       10
// // "" - 1 + 0       -1
// // true + false     true
// // 6 / "3"          2
// // "2" * "3"        6
// // 4 + 5 + "px"     9px
// // "$" + 4 + 5      $45
// // "4" - 2          2
// // "4px" - 2        ?
// // 7 / 0            infinite
// // "  -9  " + 5     -4
// // "  -9  " - 5     -14
// // null + 1         1
// // undefined + 1    1
// // " \t \n" - 2     -2
//
// //##############    2.8.4    ##################
// a = prompt("First number?", 1);
// b = prompt("Second number?", 2);
//
// alert(Number(a) + Number(b));
//
// //##############    2.9    ##################
// // 5 > 4                    true
// // "apple" > "pineapple"    false
// // "2" > "12"               true
// // undefined == null        true
// // undefined === null       false
// // null == "\n0\n"          false
// // null === +"\n0\n"        false
//
// //##############    2.10.1    ##################
// // yes
//
// //##############    2.10.2    ##################
// let answer = prompt("Whoooo, who lives in a pineapple under the sea?");
// alert(answer === "Sponge Bob" ? "Right!" : "Didn't know? Sponge Bob?");
//
// //##############    2.10.3    ##################
// let value = prompt('Type a number');
//
// if (value > 0) {
//     alert( 1 );
// } else if (value < 0) {
//     alert( -1 );
// } else {
//     alert( 0 );
// }
//
// //##############    2.10.4    ##################
// let result = (a + b < 4) ? 'Below' : 'Over';
//
// //##############    2.10.5    ##################
// let message = (login == 'Employee') ? 'Hello' :
//     (login == 'Director') ? 'Greetings' :
//         (login == '') ? 'No login' :
//             '';
//
// //##############    2.11.1   ##################
// alert( null || 2 || undefined );        //2
//
// //##############    2.11.2   ##################
// alert( alert(1) || 2 || alert(3) );     //1
//
// //##############    2.11.3   ##################
// alert( 1 && null && 2 );                //undefined
//
// //##############    2.11.4   ##################
// alert( alert(1) && alert(2) );          //1 - undefined
//
// //##############    2.11.5   ##################
// alert( null || 2 && 3 || 4 );           //3

//##############    2.11.6   ##################
// let ageBetween = age => {
//     if (age <= 14 || age >= 90)
//         return false;
//     else
//         return true;
// }
// alert(ageBetween(13));
// alert(ageBetween(14));
// alert(ageBetween(15));
// alert(ageBetween(89));
// alert(ageBetween(90));
// alert(ageBetween(91));

//##############    2.11.7   ##################
// let ageNotIn = age => {
//     if (!(age >= 14) && (age >= 90))
//         return true;
//     else
//         return false;
// }

//##############    2.11.8   ##################
//first     -   -1
//third     -   1

//##############    2.11.9   ##################
// let user = prompt("login:");
// let password;
// if (user === "Admin"){
//     password = prompt("password:");
//     if (password === "TheMaster") alert("Welcome!");
//     else if (password == null) alert("Canceled");
//     else alert("Wrong password!")
// } else if (user == null) alert("Canceled")
// else alert("Who are you? I didn't call you! Fuck off!")

//##############    2.13.1   ##################
//1

//##############    2.13.2   ##################
//  1   |   2
//------|-------
//  1   |   1
//  2   |   2
//  3   |   3
//  4   |   4
//      |   5
//
//Not the same

//##############    2.13.3   ##################
//  1   |   2
//------|-------
//  0   |   0
//  1   |   1
//  2   |   2
//  3   |   3
//  4   |   4
//
//The same

//##############    2.13.4   ##################
// for (i = 2; i <= 10; i++){
//     if (i % 2 == 0)
//         alert(i);
// }

//##############    2.13.5   ##################
// let i = 0;
// while (i < 3){
//     alert( `number ${i}!` );
//     i++;
// }

//##############    2.13.6   ##################
// let num;
//
// do {
//     num = prompt("Enter a number");
// } while (num <= 100 && num);

//##############    2.13.7   ##################
// let n = 25;
//
// nextPrime:
//     for (let i = 2; i <= n; i++) {
//
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//
//         alert( i );
//     }


//##############    2.14.1   ##################
// if(browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser == 'Safari'
//     || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }
//##############    2.14.2   ##################
// let a = +prompt('a?', '');
//
// switch (a) {
//     case 0:
//         alert( 0 );
//         break;
//
//     case 1:
//         alert( 1 );
//         break;
//
//     case 2:
//     case 3:
//         alert( '2,3' );
//         break;
// }

//##############    2.15.1   ##################
//The same

//##############    2.15.2   ##################
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// }
// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
// }

//##############    2.15.3   ##################
// function min(a, b) {
//     return a < b ? a : b;
// }

//##############    2.15.4   ##################
// function pow(x, n) {
//     let result = x;
//
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//
//     return result;
// }
//
// let x = prompt("x?", '');
// let n = prompt("n?", '');
//
// if (n < 1) {
//     alert(`Power ${n} is not supported, use a positive integer`);
// } else {
//     alert( pow(x, n) );
// }

//##############    2.17   ##################
// () => alert("You agreed.")

//##############    6.1.1   ##################
// The solution using a loop:
//
//     function sumTo(n) {
//         let sum = 0;
//         for (let i = 1; i <= n; i++) {
//             sum += i;
//         }
//         return sum;
//     }
//
// alert( sumTo(100) );
//
// =======================
// The solution using recursion:
//
//     function sumTo(n) {
//         if (n == 1) return 1;
//         return n + sumTo(n - 1);
//     }
//
// alert( sumTo(100) );
//
// =======================
// The solution using the formula: sumTo(n) = n*(n+1)/2:
//
// function sumTo(n) {
//     return n * (n + 1) / 2;
// }
//
// alert( sumTo(100) );

//##############    6.1.2   ##################
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
//
// alert( factorial(5) ); // 120
//
//     function factorial(n) {
//         return n ? n * factorial(n - 1) : 1;
//     }
//
// alert( factorial(5) ); // 120

//##############    6.1.3   ##################
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
//
// alert( fib(3) ); // 2

//##############    6.1.4   ##################
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// function printList(list) {
//     let tmp = list;
//
//     while (tmp) {
//         alert(tmp.value);
//         tmp = tmp.next;
//     }
//
// }
//
// printList(list);

//##############    6.1.5   ##################
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// function printReverseList(list) {
//
//     if (list.next) {
//         printReverseList(list.next);
//     }
//
//     alert(list.value);
// }
//
// printReverseList(list);



//##############    6.3.1   ##################
//Pete

//##############    6.3.2   ##################
//Pete

//##############    6.3.3   ##################
//0,1

//##############    6.3.4   ##################
// function Counter() {
//     let count = 0;
//
//     this.up = function() {
//         return ++count;
//     };
//
//     this.down = function() {
//         return --count;
//     };
// }
//
// let counter = new Counter();
//
// alert( counter.up() ); // 1
// alert( counter.up() ); // 2
// alert( counter.down() ); // 1

//##############    6.3.5   ##################
//It'll be error

//##############    6.3.6   ##################
// function sum(a) {
//
//     return function(b) {
//         return a + b; // takes "a" from the outer lexical environment
//     };
//
// }
//
// alert( sum(1)(2) ); // 3

//##############    6.3.7   ##################
//error

//##############    6.3.8   ##################
// function inBetween(a, b) {
//     return function(x) {
//         return x >= a && x <= b;
//     };
// }
//
// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6


//##############    6.3.9   ##################
// function byField(fieldName){
//     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }

//##############    6.3.10   ##################
//It'll be empty array

//##############    6.6.1   ##################
// function makeCounter() {
//     let count = 0;
//
//     function counter() {
//         return count++;
//     }
//
//     counter.set = value => count = value;
//
//     counter.decrease = () => count--;
//
//     return counter;
// }

//##############    6.6.2   ##################
// function sum(a) {
//
//     let currentSum = a;
//
//     function f(b) {
//         currentSum += b;
//         return f;
//     }
//
//     f.toString = function() {
//         return currentSum;
//     };
//
//     return f;
// }
//
// alert( sum(1)(2) ); // 3

//##############    6.8.1   ##################
// Using setInterval:
//
//     function printNumbers(from, to) {
//         let current = from;
//
//         let timerId = setInterval(function() {
//             alert(current);
//             if (current == to) {
//                 clearInterval(timerId);
//             }
//             current++;
//         }, 1000);
//     }
//
// // usage:
// printNumbers(5, 10);
// Using nested setTimeout:
//
//     function printNumbers(from, to) {
//         let current = from;
//
//         setTimeout(function go() {
//             alert(current);
//             if (current < to) {
//                 setTimeout(go, 1000);
//             }
//             current++;
//         }, 1000);
//     }
//
// // usage:
// printNumbers(5, 10);

//##############    6.8.2   ##################
// Any setTimeout will run only after the current code has finished.
// The i will be the last one: 100000000.

//##############    6.9.1   ##################
// function spy(func) {
//
//     function wrapper(...args) {
//         // using ...args instead of arguments to store "real" array in wrapper.calls
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }
//
//     wrapper.calls = [];
//
//     return wrapper;
// }

//##############    6.9.2   ##################
// function delay(f, ms) {
//
//     return function() {
//         setTimeout(() => f.apply(this, arguments), ms);
//     };
//
// }
//
// let f1000 = delay(alert, 1000);
//
// f1000("test"); // shows "test" after 1000ms

//##############    6.9.3   ##################
// function debounce(func, ms) {
//     let timeout;
//     return function() {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(this, arguments), ms);
//     };
// }


//##############    6.9.4   ##################
// function throttle(func, ms) {
//
//     let isThrottled = false,
//         savedArgs,
//         savedThis;
//
//     function wrapper() {
//
//         if (isThrottled) { // (2)
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }
//
//         func.apply(this, arguments); // (1)
//
//         isThrottled = true;
//
//         setTimeout(function() {
//             isThrottled = false; // (3)
//             if (savedArgs) {
//                 wrapper.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }
//
//     return wrapper;
// }

//##############    6.10.1   ##################
//null

//##############    6.10.2   ##################
//John

//##############    6.10.3   ##################
//undefined


//##############    6.10.4   ##################
//error

//##############    6.10.5   ##################
// askPassword(() => user.login(true), () => user.login(false));
