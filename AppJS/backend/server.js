const express = require("express");
const connectDB = require("./config/db");
const app = express();
const dotenv = require("dotenv").config();
const port = 3000;

// Connexion à la DB
connectDB();

// Middleware pour traiter les données de la requête
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen(port, () => console.log(`Le serveur a démarré sur le port ${port}`));
