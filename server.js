// Essential for starting a server
const express = require("express");
const req = require("express/lib/request");
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

// This is getting information from index.html & CSS
app.use(express.static())

app.listen(PORT, function() {
    console.log("This is a test for my PORT!")
})