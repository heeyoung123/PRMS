const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
var jwt = require("jsonwebtoken");
// 서버 셋팅 : 포트 넘버(번호) 1234로 세팅
// 맨 마지막에 오든 맨 처음에 오든 순서는 상관 없다
// app.listen(1234);

app.listen((process.env.PORT))

// app.get("/", function(req, res) {
//   var token =jwt.sign({ foo: "bar" }, process.env.PRIVATE_KEY);
//   res.cookie(('jwt',token,{
//     httpOnly:true,
//   })
//
//   app.get('/',  function(req,res){
//     res.send("Hello World!")
//   })
// });
//
//
// app.get('/',  function(req,res){
//   res.send("Hello World!")
// })
app.get('/',function (req,res){
  var token =jwt.sign({ foo: "bar" }, process.env.PRIVATE_KEY);
  res.cookie("jwt",token,{
    httpOnly: true,
  })
res.send("토글 발행 완료")
})