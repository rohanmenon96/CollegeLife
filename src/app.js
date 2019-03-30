const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const static = express.static(__dirname + "/public");
let xss = require("xss");

const app = express();

app.use("/public", static);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.listen(3000, () => {
	console.log("Pendikan is now live!");
	console.log("Your routes will be running on http://localhost:3000");
	if (process && process.send) process.send({ done: true });
});

app.get("/login",async(req,res)=>{
    res.send("This is the login Page")
})

app.get("*",async(req,res)=>{
    res.send("Page under construction")
})