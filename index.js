const express = require("express");
const blade = require("blade");
const rootRouter = require("./app/views/routes/rootRouter");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(blade.middleware(__dirname + '/views')); //for client-side templates
app.use(express.static(__dirname + "/app/public")); //maybe we have some static files

app.set('views', __dirname + '/app/views'); //tells Express where our views are stored
app.set('view engine', 'blade'); //Yes! Blade works with Express out of the box!

// app.get('/', function (req, res) {
    
//     res.render('index', { title: "hello" });
// });

app.use(rootRouter);

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})