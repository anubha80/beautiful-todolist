const express = require ("express");
var bodyParser = require ("body-parser");
const app = express();
var path = require("path");

app.use(bodyParser.urlencoded({extended:true}));

var newItems = ["Breathe", "Dream", "Work Smart"];
var workItems=[];
app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    // var today = new Date();
    // console.log(today);
    var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    var today  = new Date();
    var finaldate= today.toLocaleDateString("en-US", options);
    res.render("list", {listTitle:finaldate , listItems:newItems});
});
app.post("/", function(req, res){
    let newItem = req.body.task;
    if(req.body.list === "Work"){
        workItems.push(newItem);
        res.redirect("/work");
    }
    else{
        newItems.push(newItem);
        res.redirect("/");
    }
})
// work page
app.get("/work",function(req, res){
    res.render("list",{listTitle:"Work List", listItems:workItems});
})

app.listen(process.env.PORT|| 3000,function(){
    console.log("Server is running on port 3000...");
})