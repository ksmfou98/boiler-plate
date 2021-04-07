if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

// dev.js 생성후 추가
// module.exports = {
//   mongoURI:
//     "mongodb+srv://ksmfou98:비밀번호-@bolierplate.4jsmk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
// };
