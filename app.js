//npm init -y  
//npm install express mongoose  
//npm install body-parser  설치
//npm install cors      참조 cors: https://www.npmjs.com/package/cors
//npm install dotenv    env를 쓰기위한 인스톨


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require ("dotenv").config();


const indexRouter  = require("./routes/index");
const core = require("cors");

const app = express();
app.use(bodyParser.json());  //데이터를보기쉽게해주는 함수 문서에 나와있는코드 참조 링크  https://www.npmjs.com/package/body-parser
app.use(core());             // core 함수는 상위에  밑에있을경우 에러남
app.use("/api", indexRouter);


const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD

mongoose.connect(MONGODB_URI_PROD)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));


app.listen(process.env.PORT || 5000, () => {    
    console.log("server on at 5000");     //포트넘버 5000번을 주시하겠다 (포트넘버는 원하는 넘버) 
  });





