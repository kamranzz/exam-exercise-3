const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

const CardSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageURL: String,
    country: String,
});
const CardModel = new mongoose.model("Cards", CardSchema);




app.get("/api", (res) => {
    res.send("welcome to out API!");
});

//get all
app.get("/api/cards", async (req, res) => {
    const { title } = req.query;
    const cards = await CardModel.find();
    if (!title) {
        res.status(200).send(cards);
    } else {
        const searchedCards = cards.filter((x) =>
            x.title.toLowerCase().trim().includes(title.toLowerCase().trim())
        );
        res.status(200).send(searchedCards);
    }
});



app.get("/api/cards/:id", async (req, res) => {
    const { id } = req.params;
    const card = await CardModel.findById(id)
    res.status(200).send(card);
});


app.delete("/api/cards/:id", async (req, res) => {
    const id = req.params.id;
    const deleteCard = await CardModel.findByIdAndDelete(id);
    res.status(203).send({
        message: `${deleteCard.title} deleted successfully!`,
    });
});




app.post("/api/cards", async (req, res) => {
    const { title, description, imageURL, country } = req.body;
    const newCard = new CardModel({
        title: title,
        description: description,
        imageURL: imageURL,
        country: country,
    });
    await newCard.save();
    res.status(201).send({
        message: `${newCard.title} posted successfully`,
        payload: newCard,
    });
});



app.put("/api/cards/:id", async (req, res) => {
    const id = req.params.id;
    const { title, description, imageURL, country   } = req.body;
    const updatingCard = { title: title, description: description, imageURL: imageURL, country: country, };
    await CardModel.findByIdAndUpdate(id, updatingCard);
    res.status(200).send(`${updatingCard.title} updated successfully!`);
});




PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`);
});

DB_PASSWORD = process.env.DB_PASSWORD;
DB_CONNECTION = process.env.DB_CONNECTION;

mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
    console.log("MongoDB is connected!!!");
});