const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la raíz del proyecto
app.use(express.static(__dirname));

// Endpoint para servir el JSON
app.get("/data", (req, res) => {
    fs.readFile(path.join(__dirname, "data.json"), "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "Error al leer el archivo JSON" });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});