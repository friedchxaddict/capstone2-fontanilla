const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000

mongoose.connect("mongodb+srv://adrian:adrian@cluster0.1nbs0.mongodb.net/Capstone2?retryWrites=true&w=majority",

{
	useNewUrlParser: true,
	useUnifiedTopology: true

})

let db = mongoose.connection;
db.on("error",console.error.bind(console, "Connection Error"));
db.once("open",()=>console.log("Connected to MongoDB"));

app.use(express.json());

const userRoutes = require('./routes/userRoutes');

app.use('/users',userRoutes);

const productRoutes = require('./routes/productRoutes');

app.use('/products',productRoutes);

const orderRoutes = require('./routes/orderRoutes')

app.use('/orders',orderRoutes)





app.listen(port,()=>console.log(`Server running at localhost:4000`));