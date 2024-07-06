// # import / export

// import { apikey } from "./util.js" // 변수 하나 import

// import apikey from "./util.js"; // default import

// import { apikey, abc} from "./util.js"; // 변수 여러개 import

// import * as util from "./util.js"; // util 자체를 import

// import { apikey, abc as content} from "./util.js"; // as 키워드로 별칭 설정

// console.log(util.default);
// console.log(util.apikey);
// console.log(util.abc);

// console.log(content);

// # 변수와 값

// const userMessage = "Hello, World!";

// console.log(userMessage);

// # 연산자

// console.log("hello" + " world");
// console.log(10 === 10);

// if (10 === 10) console.log("works");

// # 함수와 매개변수

// function greet(userName, message = "Hello"){
//     console.log(userName);
//     console.log(message);
// }

// function createGreeting(userName, message = "Hello"){
//     return "Hi!, I am " + userName + ". " + message;
// }

// greet("Kim", );
// greet("Lee", "Hi");

// let greeting1 = createGreeting("Kim", "Hi");
// console.log(greeting1);

// let greeting2 = createGreeting("Lee", "What's up?");
// console.log(greeting2);

// # 화살표 함수를 export 하기

// export default (userName, message) => {
//     return "Hi!, I am " + userName + ". " + message;
// }

// # 객체와 클래스

// const user = {
//     name : "Max",
//     age : 32,
//     greet() {
//         console.log("Hello!");
//         console.log(this.name);
//         console.log(this.age);
//     }
// };

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// user.greet();

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greet() {
//         console.log("Hello!");
//         console.log(this.name);
//         console.log(this.age);
//     }
// }

// const user1 = new User("Max", 32);
// user1.greet();
// console.log(user1);

// # 배열 및 배열 메소드

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

//
// const index = hobbies.findIndex((item) => {
//     return item === "Sports";
// });

// const index = hobbies.findIndex(item => item === "Sports");

// console.log(hobbies[index]);

// let editedHobbies = hobbies.map((item)=> item + "!");
// let editedHobbies = hobbies.map((item)=> ({text : item}));
// console.log(editedHobbies);

// # 배열 및 배열 메소드 테스트 문제

/*
function transformToObjects(numberArray) {
    Todo: Add your logic
    should return an array of objects
    return numberArray.map(number => ({val : number}));
}*/

// # 디스트럭쳐링

// const userNameData = ["Kim", "Cheoljun"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// const [firstName, lastName] = ["Kim", "Cheoljun"];

// console.log(firstName);
// console.log(lastName);

// const {name : userName, age} = {
//     name : "Max",
//     age : 32
// }

// console.log(userName);
// console.log(age);

// # 스프레드 연산자
//
// const hobbies = ["Sports", "Cooking", "Reading"];
// const newHobbies = ["Gaming"];
//
// const mergeHobbies = [...hobbies ,...newHobbies];
// console.log(mergeHobbies);
//
// const user = {
//     name : "Max",
//     age : 32
// };
//
// const extendedUser = {
//     isAdmin : true,
//     ...user
// }
//
// console.log(extendedUser);

// # 제어 구조

// const password  = prompt("Your Password");
//
// if (password === "Hello") {
//     console.log("Hello, works");
// } else if (password === "hello") {
//     console.log("hello, works");
// } else {
//     console.log("Access not granted.");
// }
//
// const hobbies = ["Sports", "Cooking"];
//
// for (const hobby of hobbies){
//     console.log(hobby);
// }

// # 리액트 없이 DOM 조작하기

// const ul = document.querySelector("ul");
// ul.remove();

// # 함수를 값으로 사용하기

// function handlerTimeout(){
//     console.log("Time out!");
// }
//
// const handlerTimeout2 = ()=>{
//     console.log("Time out!... again!");
// }
//
// setTimeout(handlerTimeout, 2000);
// setTimeout(handlerTimeout2, 3000);
// setTimeout(()=>{
//     console.log("More timing out...")
// }, 4000);
//
// function greeter(greetFn) {
//     greetFn();
// }
//
// greeter(()=> console.log("greet!!"))

// # 함수 내부에서 함수 정의하기

// function init(){
//     function greet(){
//         console.log("Hi!");
//     }
//
//     greet();
// }
//
// init();

// # 참조형과 기본 값 비교

let userMessage = "Hello!";
userMessage = userMessage.concat("!!!"); // 기본형은 그 자체를 변경할 수 없고, 항상 새로운 기본형을 재할당한다.

console.log(userMessage);

const hobbies = ["Sports", "Cooking"];
hobbies.push("Working"); // hobbies가 const로 선언되었음에도 추가가 가능하다.
console.log(hobbies);