const express = require("express");
const app = express();
const port = 2000;
const mongoose = require("mongoose");
const alldataa = require("./models/scima");


app.use(express.json());////////
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));


//aauto refresh
 
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});





app.get("/", (req, res) => {
 res.render("index");
});

app.get("/user/add.html", (req, res) => {
 res.render("user/add");
});

app.get("/user/edit.html", (req, res) => {
 res.render("user/edit");
});

app.get("/user/view.html", (req, res) => {
 res.render("user/view");
});

mongoose
  .connect(
    "mongodb+srv://ahhasa842_db_user:enmZzQGjxV8Amg@cluster0.klqnlhj.mongodb.net/all-data?appName=Cluster0",
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// app.post("/add", async (req, res) => {
//   const newData = new alldataa(req.body);
//   newData.save().then(() => {
//     res.redirect("/");
//       console.log(req.body);
//   }
// ).catch((err) => {
// console.error("Error saving data:", err);
// }
// )
// }
// );