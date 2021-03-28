const mongoose = require("mongoose");

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

const User = mongoose.model('User', userSchema)

module.exports={User}