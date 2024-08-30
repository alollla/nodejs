const express = require("express");
const hbs = require("hbs");
  
const app = express();
  
hbs.registerHelper("getTime", function(){
      
    const myDate = new Date();
    const hour = myDate.getHours();
    let minute = myDate.getMinutes();
    let second = myDate.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return `Текущее время: ${hour}:${minute}:${second}`;
});
  
app.set("view engine", "hbs");
  
app.get("/", function(_, response){
      
    response.render("home.hbs");
});
  
app.listen(3000);