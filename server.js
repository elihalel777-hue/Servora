const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let requests = [];
let properties = [];
let buildings = [];
let units = [];

app.get("/", (req, res) => {
    res.send("Servora backend is running.");
});

app.get("/requests", (req, res) => {
    res.json(requests);
});

app.post("/requests", (req, res) => {
    const newRequest = {
        id: requests.length + 1,
        ...req.body,
        status: "Pending",
        createdAt: new Date()
    };

    requests.push(newRequest);
    res.json(newRequest);
});

app.get("/properties", (req, res) => {
    res.json(properties);
});

app.post("/properties", (req, res) => {
    const property = {
        id: properties.length + 1,
        ...req.body
    };

    properties.push(property);
    res.json(property);
});

app.listen(PORT, () => {
    console.log(`Servora backend running on port ${PORT}`);
});
