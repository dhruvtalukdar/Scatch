const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
require("dotenv").config(); 
const { PORT } = require("./config/env");
const errorMiddleware = require("./middlewares/error.middleware");
const arcjetMiddleware = require("./middlewares/arcjetMiddleware");

const connectDB = require("./config/mongoose-connection");

// Import Routes
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const indexRouter = require("./routes/index");

const app = express();

// custom middleware for error handling
app.use(errorMiddleware);
app.use(arcjetMiddleware);

// Session middleware 
app.use(session({
    secret: process.env.JWT_KEY || "your_secret_key", // Change this to a secure secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Use `true` if using HTTPS
}));

// Flash middleware
app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash("sucess");
    res.locals.error_msg = req.flash("error");
    next();
})

// Configure CORS for frontend requests
app.use(cors({
    origin: "http://localhost:8080", 
    credentials: true, // Allow cookies & authentication headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"] // Allowed headers
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(expressSession({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.SESSION_SECRET,
// }));

// Connect to MongoDB
connectDB();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Define Routes
app.use("/index", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// Test Route (Optional)
app.get("/", (req, res) => {
    res.send(body="Welcome to the Subscription Tracker API!");
});

app.get("/api/data", (req, res) => {
    res.json({ message: "CORS is working for localhost:8080" });
});

// Example Route using flash message
app.get("/flash-example", (req, res) => {
    req.flash("success", "This is a success message!");
    res.redirect("/show-messages");
});

app.get("/show-messages", (req, res) => {
    res.send({
        success: req.flash("success"),
        error: req.flash("error")
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
