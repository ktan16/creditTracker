const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Kenny");
});

app.listen(port, () => {
    console.log(`server has started on port ${port}`)
});