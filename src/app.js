const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const exphndlbars = require("express-handlebars");
const path = require("path");
const mongoFunctions = require("../src/data/mongoFunctions")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(cookieParser());

const static = express.static(__dirname + "/views");
app.use("/views", static);

app.set("view engine", "handlebars");
app.engine("handlebars", exphndlbars({defaultLayout:""}));

app.listen(81, () => {
  console.log("We've now got a server!");
});

app.get("/",async(req,res)=>{
  res.sendFile(path.join(__dirname,"/views/landingpage.html"))
})

app.get("/login", async(req,res)=>{
  res.sendFile(path.join(__dirname,"/views/loginpage.html"))
})

app.get("/register", async(req,res)=>{
  res.sendFile(path.join(__dirname,"/views/register.html"))
})

app.get("/dashboard",async(req,res)=>{
  res.render(path.join(__dirname,"/views/dashboard.handlebars"))
})

app.get("/allcourses", async(req,res)=>{
  let courses = await mongoFunctions.getAllCourses();
  console.log("Inside route , Courses: ",courses)
  var obj = {
    "courses" : courses
  }
  res.render(path.join(__dirname,"/views/allcourses.handlebars"), obj)
})

          