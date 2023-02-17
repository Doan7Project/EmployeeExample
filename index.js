const express = require("express");
const path = require("path");
// const blade = require("blade");
const rootRouter = require("./app/routes/rootRouter");
const dbConnect = require("./app/config/dbConnect");
const { notFound, errorHandler } = require("./app/middleware/errorhandler");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

// app.use(blade.middleware(__dirname + '/views')); //for client-side templates
// app.use(express.static(__dirname + "/app/public")); //maybe we have some static files

// app.set('views', __dirname + '/app/views'); //tells Express where our views are stored
// app.set('view engine', 'blade'); //Yes! Blade works with Express out of the box!
dbConnect();
//set view engine
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");

//set json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set static file
const publicDirectory = path.join(__dirname, "app/public");
app.use(express.static(publicDirectory));

app.use(rootRouter);

app.use(notFound);
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})