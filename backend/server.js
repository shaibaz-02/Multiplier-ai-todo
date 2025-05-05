const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Todo = require("./models/Todo");

const app = express();

app.use(cors());
app.use(bodyParser.json());


mongoose
  .connect("mongodb://localhost:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));


app.get('/',(req,res)=>{
    res.send("Im working ")
})



app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});


app.post("/todos", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });
  const newTodo = await Todo.create({ text });
  res.json(newTodo);
});


app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ success: true });
});

app.listen(4000, () => {
  console.log(`Server running on http://localhost:4000`);
});
