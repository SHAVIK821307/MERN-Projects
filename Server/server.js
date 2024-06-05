const express = require("express");
const conn = require("./conn");
const app = express();
const cors = require("cors");
const recordSchema = require("./models/recordSchema");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Money Records...");
});

app.get("/get", (req, res) => {
  recordSchema
    .find()
    .then((data) => {res.json(data)})
    .catch((err) => res.json(err));
});

app.post("/add", (req, res) => {
  const newRecord = req.body.task;
  console.log(newRecord);
  recordSchema
    .create(newRecord)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
app.put("/update/:id", async(req, res) => {
  const {id}=req.params;
  const newRecord = req.body.task;
  
 await recordSchema
    .findByIdAndUpdate(id,newRecord)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
app.delete("/delete/:id", (req, res) => {
 const {id}=req.params;
  
  recordSchema
    .findByIdAndDelete(id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
app.listen(3000, () => {
  console.log("listening to port 3000");
});
