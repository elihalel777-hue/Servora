let buildings = [];

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

// Leave this below it
app.listen(PORT, () => {
    console.log(`Servora backend running on port ${PORT}`);
});
