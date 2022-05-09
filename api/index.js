const express = require("express");
const path = require("path");

const cookieParser = require("cookie-parser");
const compression = require("compression");

const app = express();

app.use(cookieParser());
app.use(compression());

app.use(express.static(path.join(__dirname, "public")));

app.listen(3002, () => console.log("Server listening on port 3002"));
