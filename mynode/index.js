const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({ message: "You Are visiting root" });
  });


app.get("/login", (req, res) => {
  res.json({ message: "You Are visiting Login route" });
});

app.get("/signup", (req, res) => {
    res.json({ message: "You Are visiting signup route" });
  });

app.get("/logout", (req, res) => {
  res.json({ message: "You Are successfully logout" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
