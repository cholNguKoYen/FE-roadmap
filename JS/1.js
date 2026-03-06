// function vote() {
//   let voteNoti;
//   let age = Number(document.getElementById("age").value);
//   if (isNaN(age)) {
//     voteNoti = "Invalid input";
//   } else {
//     voteNoti = age < 18 ? "Too young" : "Old enough";
//   }
//   document.getElementById("demo").innerHTML = voteNoti + " to vote";
// }

// const cars = ["1", "2", "3", "4", "abc"];
// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }
// document.getElementById("demo2").innerHTML = text;

// let i = 15;
// let x = "";
// do {
//   x += "Final value " + i;
// } while (i < 10);
// console.log(x);

// let x = "";
// for (let i = 0; i < 10; i++) {
//   if (i === 4) break;
//   x += i + "\n";
// }
// console.log(x);

// let text = "";
// outerLoop: for (let i = 0; i < 5; i++) {
//   innerLoop: for (let j = 0; j < 5; j++) {
//     if (j === 3) {
//       continue outerLoop;
//     }
//     text += j + "\n";
//   }
// }
// console.log(text);

// let header = "Template Strings";
// let tags = ["template strings", "javascript", "es6"];

// let html = `<h2>${header}</h2><ul>`;
// for (const x of tags) {
//   html += `<li>${x}</li>`;
// }
// html += `</ul>`;
// document.getElementById("demo3").innerHTML = header + tags + html;

// let big = 10n; // binary: 1010
// let x = big << 2n; // 40n (101000)
// let y = big >> 1n; // 5n (0101)
// console.log("x = " + x);
// console.log("y " + y);

// function add(x, y = 10) {
//   return x + y;
// }
// let a = add(5);
// console.log(a);

// function sum() {
//   let s = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     s += arguments[i];
//   }
//   return s;
// }
// x = sum(1, 2, 3);
// console.log(x);

//arrow-func
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum("abc" + "cba"));

// const person = {
//   name: "John",
//   greet: function () {
//     return this.name;
//   },
//   age: 30,
//   city: "Vietnam",
// };

// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
// }
// console.log(text);

// let text1 = JSON.stringify(person);
// console.log(text1);

//constructor
// function person(first, last, age, eye) {
//   this.fName = first;
//   this.lName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// let p = new person("Bach", "Nguyen", 12, "Black");
// console.log(JSON.stringify(p));
// person.prototype.changeName = function (newName) {
//   this.lName = newName;
// };

// np = new person("Yen", "Hai", 22, "Pink");
// np.changeName("hai hai Hai");
// console.log(JSON.stringify(np));

//check JS temporal
// let today = Temporal.Now.plainDateISO();
// console.log(today);

// let now = Temporal.Now.instant();
// document.getElementById("demo4").innerHTML = now.toString();

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("btnTime").addEventListener("click", function () {
//     this.innerHTML = new Date();
//   });
// });

// const b = document.getElementById("box");
// b.addEventListener("mouseover", function () {
//   b.innerHTML = "Mouse is overed";
// });
// b.addEventListener("mouseout", function () {
//   b.innerHTML = "Mouse is out";
// });

// document.addEventListener("mousemove", function (event) {
//   document.getElementById("demo6").innerHTML =
//     "X: " + event.clientX + "Y: " + event.clientY;
// });

// const key = document.getElementById("k");
// key.addEventListener("keydown", function (event) {
//   document.getElementById("demo7").innerHTML = "Pressed " + event.key;
// });

// const myIn = document.getElementById("myInput");
// const myOut = document.getElementById("myOutput");
// myIn.addEventListener("keyup", function (e) {
//   const inputValue = e.target.value;
//   myOut.textContent = inputValue;

//   if (e.code === "Enter") {
//     console.log("Enter key released");
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("demo8").innerHTML = "HTML checked";
// });

// const btn = document.getElementById("btn1");
// btn.addEventListener("click", function () {
//   document.getElementById("demo9").innerHTML = "clicked";
// });

//Sort function
// const arr = [2, 30, 100, 99, 73, 54, 61];
// document.getElementById("demo").innerHTML = arr;
// const sortNum = () => {
//   arr.sort();
//   document.getElementById("demo").innerHTML = arr;
// };
// const sortAlpha = () => {
//   arr.sort((a, b) => {
//     return a - b;
//   });
//   document.getElementById("demo").innerHTML = arr;
//   s;
// };

//Fisher-Yates-shuffle
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// document.getElementById("d").innerHTML = arr;

// const FisherYates = () => {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     let k = arr[i];
//     arr[i] = arr[j];
//     arr[j] = k;
//   }
//   document.getElementById("d").innerHTML = arr;
// };

// function findMaxInArray(arr) {
//   return Math.max.apply(null, arr);
// }
// const arr1 = [1, 2, 3, 4, 5];
// let a = findMaxInArray(arr1);
// let b = Math.max(...arr1);
// console.log(a);
// console.log(b);

// function findMinArr(arr) {
//   let l = arr.length;
//   let min = Infinity;
//   while (l--) {
//     if (arr[l] < min) {
//       min = arr[l];
//     }
//   }
//   return min;
// }
// let array = [1, 2, 3, 4, 5, 6, 7];
// let b = findMinArr(array);
// console.log(b);

// function findMaxArr(a) {
//   let l = a.length;
//   let max = -Infinity;
//   while (l--) {
//     if (a[l] > max) {
//       max = a[l];
//     }
//   }
//   return max;
// }
// const arr = [1, 2, 3, 4, 5];
// let b = findMaxArr(arr);
// console.log(b);

// const number = [1, 2, 3, 4, 5];
// let txt = "";
// number.forEach(myFunc);
// function myFunc(value, index, array) {
//   txt += value + "\n";
// }
// console.log(txt);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.flatMap((x) => [x, x * 2]);
// console.log(arr2);
// const over2 = arr1.filter(mFunc);
// function mFunc(val, i, arr) {
//   return val > 2;
// }
// console.log(over2);
// let sum = arr1.reduce(mFunc1);
// function mFunc1(total, val, i, arr) {
//   return total + val;
// }
// console.log(sum);

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.pop();
// fruits.push(1);
// console.log(fruits);

//Random number from 0 to 9
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 100));

//Get a random number between some range (min to max)
// function randomNumInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(randomNumInt(12, 15));

//Weakmap
// const myMap = new WeakMap();
// class User {
//   constructor(name) {
//     myMap.set(this, { secret: "Hidden" });
//     this.name = name;
//   }
//   getSecret() {
//     return myMap.get(this).secret;
//   }
// }
// const user1 = new User("John");
// console.log(user1.getSecret());

//Regex JS
// let text = "Visit W3Schools";
// let n = text.match(/W3schools/i);
// console.log(n);
// let result = text.replace(/W3schools/i, "Microsoft");
// console.log(result);
// let m = text.search(/W3Schools/);
// console.log(m);

//Class JS
// class Car {
//   constructor(name, year, brand) {
//     this.cname = name;
//     this.cyear = year;
//     this.cbrand = brand;
//   }

//   ageCalculate() {
//     const d = new Date();
//     return d.getFullYear() - this.cyear;
//   }

//   displayBranch() {
//     return "I've this " + this.cbrand;
//   }
// }
// let c = new Car("BMW", 2026, "CCMK");
// console.log(c.ageCalculate());
// console.log(c.displayBranch());

// class Model extends Car {
//   constructor(model, brand) {
//     super(brand);
//     this.carModel = model;
//   }
//   show() {
//     return this.displayBranch() + ", it's a" + this.carModel;
//   }
// }
// let a = new Model("Ford", "Mustang");
// console.log(a.ageCalculate() + "\n" + a.displayBranch() + "\n" + a.show());

//Callback func
// function show(x) {
//   console.log(x);
// }
// function sum1(a, b, callbackFunc) {
//   let sum = a + b;
//   callbackFunc(sum);
// }
// sum1(5, 5, show);

//Function Closure
// function add() {
//   counter = 0;
//   counter += 1;
//   return counter;
// }
// let x = 0;
// x = add();
// x = add();
// console.log(x);

// function myCounter() {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   };
// }

// const add = myCounter();
// add();
// add();
// add();

//DOM Navigation: Delete a row in a list (using delete button)
// const delBtn = document.querySelectorAll(".delete-btn");
// delBtn.forEach((button) => {
//   button.addEventListener("click", function () {
//     const rowToDel = this.parentElement;
//     rowToDel.remove();
//     console.log("Removed an item");
//   });
// });

//Another way to delete a row in list
// const delBtn = document.querySelectorAll(".delete-btn");
// delBtn.forEach((button) => {
//   button.addEventListener("click", function () {
//     let row = this.closest("li");
//     row.remove();
//   });
// });

//FETCH API
// fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/349727")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Can not fetch API");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Err: ", error);
//   });

// const x = document.getElementById("d");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition, showError);
//   } else {
//     x.innerHTML = "Error";
//   }
// }
// function showPosition(pos) {
//   x.innerHTML =
//     "latitude: " +
//     pos.coords.latitude +
//     "<br> longitude: " +
//     pos.coords.longitude;
// }
// function showError() {
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       x.innerHTML = "User denied the request for Geolocation.";
//       break;
//     case error.POSITION_UNAVAILABLE:
//       x.innerHTML = "Location information is unavailable.";
//       break;
//     case error.TIMEOUT:
//       x.innerHTML = "The request to get user location timed out.";
//       break;
//     default:
//       x.innerHTML = "An unknown error occurred.";
//       break;
//   }
// }

//RANDOM USER API
// const avatarImg = document.getElementById("avatar");
// const nameH2 = document.getElementById("fullname");
// const mail = document.getElementById("email");
// const refreshBtn = document.getElementById("refresh-btn");
// async function RandomUserGen() {
//   try {
//     //1. Call API
//     const response = await fetch("https://randomuser.me/api/");
//     //2. Check API
//     if (!response.ok) {
//       throw new Error("Cannot connect API");
//     }
//     //3. Convert into JSON
//     const data = await response.json();
//     //4. Take data
//     const user = data.results[0];
//     //5. Update into DOM
//     nameH2.innerText = `${user.name.first} ${user.name.last}`;
//     mail.innerText = user.email;
//     avatarImg.src = user.picture.large;
//   } catch (error) {
//     nameH2.innerHTML = "Error!";
//     console.error("Super Error", error);
//   }
// }
// //AFter loaded DOM
// RandomUserGen();
// refreshBtn.addEventListener("click", RandomUserGen);

//Calling API (Run JS file)
// const apiURL = "https://jsonplaceholder.typicode.com/users";
// //1. Make a GET request
// fetch(apiURL)
//   .then((response) => {
//     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data", error);
//   });

//2. Using Async/Await
// async function fetchUserData(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Response status: " + response.status);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.error("Cannot fetch", e);
//   }
// }
// fetchUserData("https://jsonplaceholder.typicode.com/users");

//3. POST method
// async function postData(url, data) {
//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     const responseData = await response.json();
//     console.log("Success: ", responseData);
//   } catch (e) {
//     console.error("Error POST", e);
//   }
// }
// const newData = { name: "Bkcs", age: 23, job: "John Cena" };
// postData("https://randomuser.me/api/", newData);

//Standard API Call workflow
// async function callAPIstandard() {
//   showLoading(true);
//   try {
//     const response = await fetch("https://randomuser.me/api/");
//     if (!response.ok) {
//       throw new Error("Server error");
//     }
//     const rawData = await response.json();
//     const cleanData = rawData.map();
//     renderUI(cleanData);
//   } catch (error) {
//     showErrorMessage(error.message);
//   } finally {
//     showLoading(false);
//   }
// }
