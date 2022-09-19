// تمرین اول

// let number1 = prompt("enter number one")
// let number2 = prompt("enter number two")
// function max(number1 , number2){
//     if(number1 > number2) return number1
//     else if(number1 < number2) return number2
//     else return "equal"
// }
// console.log(max(number1 , number2 ))

//تمرین دوم

// function isLandscape(width , heigth){
//     return width > heigth ? true : false
// }
// console.log(isLandscape(5 , 10))
//تمرین سوم

// function fizzBuzz(number){
//     if( typeof number !== "number" ) return "not a number"
//     if(number % 3 === 0 && number % 5 === 0 ) return "fizzBuzz"
//     else if(number % 3 === 0)  return "fizz"
//     else if(number % 5 === 0) return "Buzz"
//     return number
// }
// let number = prompt("enter a number")
// console.log(fizzBuzz(number))
// مثال
// const obj = {
//     name:"fatemeh",
//     age:23
// }
// console.log(obj)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// for(key in obj) console.log(key)
// for(key of Object.keys(obj)) console.log(key)
// if("name" in obj) console.log(true)

//تمرین object1
// const object = {
//   name: "fatemeh",
//   age: 23,
//   address: {
//     city: "Jiroft",
//     country: "Iran",
//   },
// };
// function showUser(obj) {
//     for(key in object){
//         console.log(key , obj[key])
//     }
// }
// showUser(object)
// تمرین object2

// factory function

// function createObject(name, age, street) {
//   return {
//     name: name,
//     age: age,
//     street: street,
//   };
// }

// // constructore function

// function constFunc(name, age, street) {
//   obj.name = name;
//   obj.age = age;
//   obj.street = street;
//   return this
// }
// const cF = new constFunc("fatemeh", 23, "jiroft");

// تمرین 3object

// const blogPost = {
//   title: "titlepost",
//   islive: true,
//   body: "body",
//   comment: [
//     { author: "ali", body: "body1" },
//     { author: "fatemeh", body: "body2" },
//   ],
// };
// تمرین 4object

// constructor function

// function BlogPost(title, author, body) {
//   this.body = body;
//   this.author = author;
//   this.title = title;
//   this.islive = true;
//   this.view = 0;
//   this.comment = [];
// }
// const BlogPost1 = new BlogPost("title", "fatemeh", "body");
// console.log(BlogPost1)

// تمرین map ,filter,...

// function fromRange(min, max) {
//   const array = [];
//   for (let index = min; index <= max; index++) {
//     array.push(index);
//   }
//   return array;
// }
// console.log(fromRange(-10, 2));

// 1تمرین dom

// const coursese = [
//   { title: "course 1", isExist: true },
//   { title: "course 2", isExist: false },
//   { title: "course 3", isExist: true },
//   { title: "course 4", isExist: false },
// ];
// const body = document.querySelector("body");
// const availableCourses = coursese.filter((item) => item.isExist);
// const message = document.createElement("h3");
// console.log(availableCourses);
// message.textContent = `number of available product is: ${availableCourses.length}`;
// body.appendChild(message);
// availableCourses.forEach((c) => {
//   const p = document.createElement("p");
//   p.textContent = c.title;
//   body.appendChild(p);
// });

// example
// const flag = true;
// // boolean => 1.true 2.false
// const string = `f  ${flag}`;
// var str = "fatemeh";
// str = 231;
// console.log(typeof string);
// console.log(string);

// const user = {
//   firstName: "fatemeh",
//   age: 23,
//   address: "iran kerman jiroft",
// };
// user.firstName = "ali";
// console.log(user.firstName);
// user["firstName"] = "reza";
// user["age"] = 26;
// console.log(user);
// const addtoUser = "university";
// user[addtoUser] = "valiasr";
// console.log(user);
// const x = 2;
// const y = 3;
// console.log(x ** y)

// console.log("1" === 1); //type
// console.log(1 == "1"); // not type checked
// console.log(true == 1);
// const totalPrice = 200;
// let discount = totalPrice >= 200 ? "greter of the 200" : "lower of the 200";
// console.log(discount); // condition ? "true" : "false"
// console.log("fatemeh" || NaN || true);
// const colorRed = undefined;
// const colorGreen = "green";
// let result = colorRed || colorGreen;
// console.log(result);
// for in => object
// for of => array
// const user = {
//   firstName: "fatemeh",
//   age: 25,
// };
// console.log(user);
// for (key in user) {
//   console.log(key, user[key]);
// }
// let color = ["red", "green", "yellow"];
// for(index in color){
//   console.log(color[index])
// }
// console.log(Math.floor(1.245))
// console.log(Math.LN2)
// const user = {
//   radius: 10,
//   location: {
//     x: 2,
//     y: 5,
//   },
//   isvisible: true,
//   move() {},
// };
//factory function
// function showUser() {
//   return {
//     radius: 10,
//     location: {
//       x: 2,
//       y: 5,
//     },
//     isvisible: true,
//     move(a, b) {
//       return a * b;
//     },
//   };
// }
// console.log(showUser());
// constructor function
// function ShowUser(radius, isvisible) {
//   this.radius = radius;
//   this.isvisible = isvisible;
//   this.move = function () {
//     // console.log("move");
//   };
// }
// const result = new showUser(1, false);
// console.log(result);
// apply , call , bind
// constructor function
// function Circle(raduis) {
//   this.raduis = raduis;
//   this.move = function () {
//     // console.log("move");
//   };
//   return this;
// }
//1.{} 2.point to this empty object 3.return defualt this object
// const circle = new Circle(3);
// console.log(circle);
// const obj = {
//   name: "fatemeh",
// };
// const circle2 = Circle.call(obj, 4);
// console.log(circle2);
// const circle3 = Circle.apply(obj, [5]);
// circle2.lastName = "bahr";
// delete circle.raduis;
// console.log(circle);
// console.log(circle2);
// const keys = Object.keys(circle2);
// console.log(keys);
// const values = Object.values(circle2);
// console.log(values);
// const keys2 = Object.entries(circle2);
// console.log(keys2)
// const a = 2;
// a = 7;
// console.log(a);
// const user1 = {
//   firstName: "fatemeh",
//   lastName: "bahrasemani",
//   age: 23,
// };
// const user3 = {
//   adderss: "kerman jiroft .... ",
// };
// const user5 = Object.assign({}, user1);
// console.log(typeof user5)
// for (index in user1) {
//   user3[index] = user1[index];
// }
// const user4 = { ...user1 };
// const result2 = user3.call(user1);
// user3 = user1;
// console.log(user5);
// const _name="fatemeh"
// const massage=` I'm from javascript ${_name}`
// massage.includes("from")
// console.log(massage)
// const now = new Date("Mar 25 2022 9:21:30:50");
// console.log(now)
// now.toString()
// console.log(now.toString())
// numbers.unshift(4, "zahra");
// numbers.splice(1, 2);
// console.log(numbers.indexOf(2)); //اگر عدد تکراری داشته باشیم اولین اندیس برای ما برمیگرداند
// numbers.shift()
// const res = numbers.pop();
// console.log(res);
// console.log(numbers);

// const numbers = [1, 2, "ali", "saheb"];
// const user7 = [
//   { firstName: "fatemeh", lastName: "bahrasemani", age: 23 },
//   23,
//   { firstName: "alireza", lastName: "bahrasemani", age: 28 },
//   { firstName: "saheb", lastName: "bahrasemani", age: 27 },
// ];
// const resultTotal = user7.indexOf({
//   firstName: "fatemeh",
//   lastName: "bahrasemani",
//   age: 23,
// });
// user7.unshift({ firstName: "fatima" });
// console.log(user7);
// const findItem = user7.find((item) => {
//   return item.age === 27;
// });
// console.log(findItem);
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(3, 4));
// const original = [1, 2, 3];
// const clone = [...original];
// clone.push(4, 8, 10);
// const concatFirst = original.concat(clone); // not mutate
// console.log(concatFirst);
// console.log(clone);
// const sliceFirst = concatFirst.slice(2, 6);
// console.log(sliceFirst);
// console.log(concatFirst);
// const first = [1, 5, -7, 9, 87];
// const second = [2, 4, 48, 54];
// const combine = [...first, ...second];
// console.log(combine);
// const allpositive = first.some((value) => {
//   console.log(value);
//   return value > 0;
// });
// console.log(allpositive);
// const foreach1 = second.forEach((number) => {
//   console.log(number);
// });
// const filtered = first.filter((item) => {
//   return item > 5;
// });
// console.log(filtered);
// console.log(first);
// const cloneLast = [...user7, ...numbers];
// console.log(cloneLast)

// function sum(a, b) {
//   console.log(arguments);
//   const s = a * b;
//   return s;
// }
// console.log(sum(1, 5, 7, 9, 10));
// function add(discounts, ...args) {
//   console.log(args);
//   let total = 0;
//   for (value of arguments) {
//     total = total + value;
//   }
//   return total * (1 - discounts);
// }
// console.log(add(0.5, 5, 8, 4, 6));
// function scale(student, marks, addedValue) {
//   marks = marks || 18;
//   addedValue = addedValue || 0.5;
//   console.log(student, marks, addedValue);//بهتر است دیفالت ها را اخر بگذاریم
// }
// scale(24);

//Getter and setter
// const person = {
//   firstName: "Fatemeh",
//   lastName: "Bahrasemani",
// fullName() {
//   return `${this.firstName} ${this.lastName}`;
// },
//
// const person2 = {
//   _name: "fatemeh",
//   students: ["a", "b", "c"],
//   teach() {
//     this.students.forEach((s) => {
//       console.log(this._name, s);
//     });
//   },
// };
// person2.teach();

// DOM
// class, tag, id
// const storeTitle = document.getElementById("store_title");
// const store_title1 = document.getElementsByClassName("store_title");
// console.log(storeTitle);
// console.log(store_title1);
// const query = document.querySelector(".store_title .p-1");
// console.log(query);
// const p = document.querySelectorAll("p");
// p.forEach((item) => {
// if (item.textContent.toLocaleLowerCase().includes("god")) {
//   item.remove()
// }
//   item.textContent = "fatemeh bahrasemani";
// });
// console.log(p);
// const result = document.createElement("b");
// result.textContent = "fatemeh265456";
// const body = document.querySelector("body");
// body.appendChild(result);
// const courses = [
//   { title: "course1", isExist: true },
//   { title: "course2", isExist: false },
//   { title: "course3", isExist: true },
//   { title: "course4", isExist: false },
// ];
// const available = courses.filter((item) => item.isExist);
// console.log(available);
// const msg = document.createElement("h3");
// msg.textContent = `number of available: ${available.length}`;
// body.appendChild(msg);
// available.forEach((item) => {
//   const p = document.createElement("p");
//   p.textContent = item.title;
//   body.appendChild(p);
// });
// const pTags = document.querySelectorAll(".product");
// const removeProduct = document.querySelector(".remove-product");
// removeProduct.addEventListener("click", (item) => {
//   pTags.forEach(item =>{
//     item.remove()
//   })
// const p = document.createElement("p");
// p.textContent = "add product";
// body.appendChild(p)
// item.target.textContent="clicked"
// });

//project search

// ||=>

// const body = document.querySelector("body");
// const searchProduct = document.querySelector("#search-product");
// const productsDiv = document.querySelector(".products");
// const products = [
//   { title: "node js course" },
//   { title: "mastering react.js course" },
//   { title: "advanced javascript (js) course" },
//   { title: "git-git hub course" },
// ];
// const filters = {
//   searchItem: " ",
// };
// function renderProducts(_products, _filters) {
//   const filtredProducts = _products.filter((item) => {
//     return item.title.toLowerCase().includes(_filters.searchItem.toLowerCase());
//   });
//   productsDiv.innerHTML = " ";
//   filtredProducts.forEach((element) => {
//     const p = document.createElement("p");
//     p.textContent = element.title;
//     productsDiv.appendChild(p);
//   });
// }
// renderProducts(products, filters);
// searchProduct.addEventListener("input", (e) => {
//   filters.searchItem = e.target.value;
//   renderProducts(products, filters);
// });

//project  counter
// const incrementBtn = document.querySelector(".increment");
// const decrementBtn = document.querySelector(".decrement");
// const resetBtn = document.querySelector(".reset");
// const counterValue = document.querySelector(".counter span");
// let count = 0;
// function increment() {
//   count++;
//   counterValue.textContent = count;
// }
// incrementBtn.addEventListener("click", increment);
// function decrement() {
//   if (count > 0) {
//     count--;
//     counterValue.textContent = count;
//   }
// }
// decrementBtn.addEventListener("click", decrement);
// function reset() {
//   count = 0;
//   counterValue.textContent = count;
// }
// resetBtn.addEventListener("click", reset);

//  answer another

// const counterValue = document.querySelector(".counter span");
// const buttons = document.querySelectorAll(".btn");

// let count = 0;
// buttons.forEach((element) => {
//   element.addEventListener("click", (item) => {
//     const classList = element.classList;
//     if (classList.contains("increment")) count++;
//     else if (classList.contains("decrement") && count > 0) count--;
//     else count = 0;
//     if (count > 0) counterValue.style.color = "green";
//     else counterValue.style.color = "red";
//     counterValue.textContent = count;
//   });
// });
// exa