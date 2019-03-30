const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const path = require("path");
let xss = require("xss");
const static = express.static(__dirname + "../views");


const app = express();

app.use("/views", static);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.listen(80, () => {
	console.log("CollegeLife is now live!");
	console.log("Your routes will be running on http://localhost:3000");
});

app.get("/login",async(req,res)=>{
    res.sendFile(path.join(__dirname, "../views/login.html"))
    //res.send("Hello");
})

app.get("*",async(req,res)=>{
    res.send("Page under construction")
})