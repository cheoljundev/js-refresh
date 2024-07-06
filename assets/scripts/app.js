// import { apikey } from "./util.js" // 변수 하나 import

// import apikey from "./util.js"; // default import

// import { apikey, abc} from "./util.js"; // 변수 여러개 import

// import * as util from "./util.js"; // util 자체를 import

import { apikey, abc as content} from "./util.js"; // as 키워드로 별칭 설정

// console.log(util.default);
// console.log(util.apikey);
// console.log(util.abc);

console.log(content);