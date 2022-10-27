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

const offers = require("./offer.json");
const offeredCourse = [];
for (const offer of offers) {
  const matchedCourse = courses.find((course) => course.id === offer.id);
  matchedCourse["discount"] = offer.discount;
  offeredCourse.push(matchedCourse);
}
app.get("/offers", (req, res) => {
  res.send(offeredCourse);
});

app.listen(port, () => {
  console.log("server is running on port: ", port);
});
