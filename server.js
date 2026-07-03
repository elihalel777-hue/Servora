const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let properties = [];

app.get("/", (req, res) => {
    res.send("Servora backend is running.");
});

app.get("/properties", (req, res) => {
    res.json(properties);
});

app.post("/properties", (req, res) => {
    const property = {
        id: properties.length + 1,
        name: req.body.name,
        address: req.body.address,
        units: req.body.units
    };

    properties.push(property);

    res.json(property);
});

app.listen(PORT, () => {
    console.log(`Servora backend running on port ${PORT}`);
});
