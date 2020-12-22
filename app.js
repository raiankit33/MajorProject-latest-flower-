const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const colors = require("colors");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");
// const connectDB = require("./config/db");

// dotenv.config({ path: "./config/config.env" });

// connectDB();

mongoose.connect(config.database, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log(`Connected to database: ${config.database}`.blue.underline);
});
mongoose.connection.on("error", (err) => {
  console.log(`Database Error: ${err}`.red.underline);
});

const app = express();

const users = require("./routes/users");
const drivers = require("./routes/drivers");
const documentRouter = require('./routes/routes'); 

// CORS Middleware
app.use(cors());

// Body-Parser Middleware
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

// Passport Middlewares
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

// Set Static Folders
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/users", users);
app.use("/drivers", drivers);
app.use('/documents/', documentRouter);

app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

// Port Number
const port = 5000;
app.listen(port, () => {
  console.log(
    `Server listening on ${process.env.NODE_ENV} mode ont port ${port}!`.yellow
      .bold
  );
});
