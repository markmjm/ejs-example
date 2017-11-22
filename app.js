var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs")

app.get("/", function (req, res) {
    res.render("index", {title: "Home"})
})

app.get("/fallinlove/:thing", function (req, res) {
    var thing = req.params.thing;

    res.render("love", {thingVar: thing, title: "Love"});
})


app.get("/posts", function (req, res) {
    var posts = [
        {title: "post1", author: "Susy"},
        {title: "post2", author: "Jim"},
        {title: "post3", author: "Mark"}
    ]

    res.render("posts", {
        posts: posts,
        title: "posts"
    });
})


//must be last
app.get("*", function (req, res) {
    res.send("Sorry, page not found.");
})

//if you want to use a different port
//in DOS command : set PORT=8000 for example.
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
