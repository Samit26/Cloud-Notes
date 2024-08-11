const express = require("express");
const connectToDb = require("../db");
const userdb = require("../routes/Authentication");
const fetchingNotes = require("../routes/FetchNotes");
const creatingNotes = require("../routes/CreateNote");
const UpdateNote = require("../routes/UpdateNote");
const deletenote = require("../routes/DeleteNotes");
const cors = require("cors");

connectToDb();
const app = express();
const port = 3005;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(userdb);
app.use(creatingNotes);
app.use(fetchingNotes);
app.use(UpdateNote);
app.use(deletenote);

app.listen(port, () => {
  console.log("Server started at port 3000");
});

module.exports = app;
