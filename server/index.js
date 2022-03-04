const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("../server/routes/auth.js");
const userRoute = require("../server/routes/users.js");
const sectionRoute = require("../server/routes/sections.js");

const errorController = require("../server/controllers/errorController");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB");
    }
);

app.use(bodyParser.json());

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    next();
});

app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/sections", sectionRoute);

app.use(errorController.error404);
app.use(errorController.error500);

app.listen(3000, () => {
    console.log("Running Backend!");
});