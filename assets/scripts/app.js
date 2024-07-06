// import { apikey } from "./util.js" // 변수 하나 import

// import apikey from "./util.js"; // default import

// import { apikey, abc} from "./util.js"; // 변수 여러개 import

// import * as util from "./util.js"; // util 자체를 import

// import { apikey, abc as content} from "./util.js"; // as 키워드로 별칭 설정

// console.log(util.default);
// console.log(util.apikey);
// console.log(util.abc);

// console.log(content);

// const userMessage = "Hello, World!";

// console.log(userMessage);

// console.log("hello" + " world");
// console.log(10 === 10);

// if (10 === 10) console.log("works");

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

export default (userName, message) => {
    return "Hi!, I am " + userName + ". " + message;
}