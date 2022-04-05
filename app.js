const express = require ("express");
const bodyParser = require ("body-parser");

// we have this module ate and we are requiring it 
// this binds all the export to this const called date
const date = require (__dirname+"/date.js");

const app = express();

const path = require("path");

app.use(bodyParser.urlencoded({extended:true}));

const newItems = ["Breathe", "Dream", "Work Smart"];
const workItems=[];
app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');

// testing module creation and exporting
// craeted date.js
// console.log(date);

app.get("/", function(req, res){
    // var today = new Date();
    // console.log(today);
    
    // calling date function
    let finaldate= date.getDate();
    console.log(finaldate);
    res.render("list", {listTitle:finaldate , listItems:newItems});
});

app.post("/", function(req, res){
    // console.log(req.body);
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

//about page
app.get("/about",function(req, res){
    res.render("about");
})

app.listen(process.env.PORT|| 3000,function(){
    console.log("Server is running on port 3000...");
})