const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const exphndlbars = require("express-handlebars");
const path = require("path");
const firebase = require("../src/data/firebaseConfig");
const mongoFunctions = require("../src/data/mongoFunctions");


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

app.get("/login", async(req, res) => {
  res.sendFile(path.join(__dirname,"/views/loginpage.html"))
})

app.post("/login", async(req,res)=>{

  let email = req.body.email;
  let password = req.body.password;

  try
  {
    let login = await firebase.auth().signInWithEmailAndPassword(email, password);
    let userId = login.user.uid;
    res.render(path.join(__dirname,"/views/dashboard.handlebars"))
  }
  catch(e)
  {
    res.sendFile(path.join(__dirname,"/views/loginpage.html"))
  }
})

app.get("/register", async(req, res)=> {
  console.log("register")
  res.sendFile(path.join(__dirname,"/views/register.html"));
})

app.post("/register", async(req,res)=>{

  let email = req.body.email;
  let password = req.body.password;

  try
  {
    let registerUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
    let userId = registerUser.user.uid;

    let data = {
      _id: userId,
      email: email,
      fullName: req.body.full_name,
      countryCode: req.body.country_code,
      phoneNumber: req.body.phone_number,
      department: req.body.department
    }

    console.log(data);

    res.sendFile(path.join(__dirname,"/views/loginpage.html"))    
  }
  catch(e)
  {
    console.log(e);
    res.sendFile(path.join(__dirname,"/views/register.html"));

  }

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

          