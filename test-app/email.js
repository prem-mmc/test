var express = require("express");
var app = express();
const port = 4000;
// app.get("/", function(req,res) {
//     res.render("home.ejs");

// });


app.get("/", function(req, res){
    // var thing = req.params.thing;
    res.render("html.ejs", { thingvar: "working" });
    // res.send("helllooo");
});

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("listening");
// });

// process.env.PORT || '3001'
app.listen(port, () => console.log(`Example app listening on port ${port}!`))