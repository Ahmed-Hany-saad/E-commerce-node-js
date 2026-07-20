const express = require("express");
const app = express();
const port = 2000;
const mongoose = require("mongoose");
const alldataa = require("./models/scima");


app.use(express.json());////////
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  alldataa.find().then((data) => {
    res.render("index", { data: data });
  }).catch((err) => {
    console.error("Error fetching data:", err);
    res.status(500).send("Internal Server Error");
  }
    )
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

app.post("/add", async (req, res) => {
  const newData = new alldataa(req.body);
  newData.save().then(() => {
    res.redirect("/");
      console.log(req.body);
  }
).catch((err) => {
console.error("Error saving data:", err);
}
)
}
);