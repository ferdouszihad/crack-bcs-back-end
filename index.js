const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const courses = require("./data.json");
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:cId", (req, res) => {
  const id = parseInt(req.params.cId);
  const course = courses.find((course) => course.id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log("server is running on port: ", port);
});
