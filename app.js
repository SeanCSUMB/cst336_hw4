const express = require("express");
const app = express();
const faker = require('faker');
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res){
    var fakeData = ["", ""];
    fakeData[0]  = faker.internet.email();;
    fakeData[1] = faker.phone.phoneNumber();
    res.render("index.ejs", {fakeData:fakeData});
});

app.get("/ip", function(req, res){
    var fakeData = ["", ""];
    fakeData[0]  = faker.internet.email();;
    fakeData[1] = faker.phone.phoneNumber();
    res.render("ip.ejs", {fakeData:fakeData});
});
    
app.get("/routes", function(req, res){
    var fakeData = ["", ""];
    fakeData[0]  = faker.internet.email();;
    fakeData[1] = faker.phone.phoneNumber();
    res.render("routes.ejs", {fakeData:fakeData});
});

app.get("/switch", function(req, res){
    var fakeData = ["", ""];
    fakeData[0]  = faker.internet.email();;
    fakeData[1] = faker.phone.phoneNumber();
    res.render("switch.ejs", {fakeData:fakeData});
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is  running...");
});