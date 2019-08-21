const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;
require("./app/data/friends.js");
require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function () {
    console.log("App listening on port", PORT);
})
