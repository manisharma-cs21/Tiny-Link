const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const methodOverride = require("method-override");

dotenv.config();
const app = express();

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/api", require("./routes/api"));
app.use("/", require("./routes/pages"));
app.use("/", require("./routes/redirect"));  // last so it doesn't override API

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
