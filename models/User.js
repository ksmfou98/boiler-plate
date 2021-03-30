const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // 비밀번호 암호화 해주는 패키지
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // 공백을 제거해주는 역할
    unique: 1, //똑같은 이메일은 사용못하게
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    // 일반유저 , 관리자를 나누기 위한 객체
    type: Number,
    default: 0,
  },
  image: String,

  token: {
    //유효성 관리
    type: String,
  },

  tokenExp: {
    // token 사용할 수 있는 유효기간
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  // index.js 에서 user.save를 하기전에 이 함수 시작
  let user = this;

  if (user.isModified("password")) {
    // 비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
