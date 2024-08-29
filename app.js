const express = require("express"); 

const app = express();
 
app.get("/", function(_, response){
 
    response.end("Hello METANIT.COM");
});

app.listen(3000, function(){ console.log("Сервер начал принимать запросы по адресу http://localhost:3000")});