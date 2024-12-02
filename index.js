const productRoute = require("./routes/product.route");
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
    res.send("Hello from Node API Server 2");
});

mongoose.connect("mongodb+srv://it22056320:gJf8nH38vQJLruBr@backenddb.ixris.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to DB");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }).catch(() => {
        console.log("Connection Failed");
    });





