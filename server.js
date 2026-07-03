const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let properties = [];
let buildings = [];
let units = [];
let requests = [];

app.get("/", (req, res) => {
    res.send("Servora backend is running.");
});

// PROPERTIES
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

// BUILDINGS
app.get("/buildings", (req, res) => {
    res.json(buildings);
});

app.post("/buildings", (req, res) => {
    const building = {
        id: buildings.length + 1,
        property: req.body.property,
        name: req.body.name
    };

    buildings.push(building);
    res.json(building);
});

// UNITS
app.get("/units", (req, res) => {
    res.json(units);
});

app.post("/units", (req, res) => {
    const unit = {
        id: units.length + 1,
        property: req.body.property,
        building: req.body.building,
        unit: req.body.unit
    };

    units.push(unit);
    res.json(unit);
});

// REQUESTS
app.get("/requests", (req, res) => {
    res.json(requests);
});

app.post("/requests", (req, res) => {
    const request = {
        id: requests.length + 1,
        ...req.body,
        status: "Pending",
        createdAt: new Date()
    };

    requests.push(request);
    res.json(request);
});

app.listen(PORT, () => {
    console.log(`Servora backend running on port ${PORT}`);
});
