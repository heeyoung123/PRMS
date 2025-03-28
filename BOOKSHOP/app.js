const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.listen(process.env.PORT);

const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const likesRouter = require("./routes/likes");
const categoryRouter = require("./routes/category");
const cartsRouter = require("./routes/carts");
const ordersRouter = require("./routes/orders");

app.use("/users", usersRouter);
app.use("/books", booksRouter);
app.use("/carts", cartsRouter);
app.use("/likes", likesRouter);
app.use("/orders", ordersRouter);
app.use("/category", categoryRouter);


