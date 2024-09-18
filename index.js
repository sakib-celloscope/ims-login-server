const express = require("express");
const cors = require("cors");
const path = require('path')

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.send("IMS Server is running.");
});

app.get('/login', (req, res) =>{
    res.sendFile(__dirname + '/login.html');
})

app.listen(port, () => {
  console.log(`IMS Server is running on port: ${port}`);
});
