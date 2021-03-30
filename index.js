const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const config = require("./config/key");
const { User } = require("./models/User");

// application/x-www-form-urlencoded 라는걸 클라이언트에서 받아와서 분석하기 위해 넣어준것
app.use(bodyParser.urlencoded({ extended: true }));
// application/json 이라는걸 클라이언트에서 받아와서 분석하기 위해 넣어준것
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected.... "))
  .catch((err) => console.log(err));

const handleListening = () => {
  console.log(`Listening on: http://localhost:${port}`);
};

app.get("/", (req, res) => res.send("hello World!!!!"));

app.post("/register", (req, res) => {
  // 회원 가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body); // 사용자가 입력한 값이 여기로 들어옴 , bodyparser 덕분임

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      //status(200)은 성공했다는 의미임
      success: true,
    });
  });
});

app.listen(port, handleListening);
