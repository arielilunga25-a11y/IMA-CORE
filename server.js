const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
res.json({
name: "IMA CORE",
status: "online",
version: "1.0.0",
message: "Le cerveau central de IMA AI est prêt."
});
});

app.get("/api/health", (req, res) => {
res.json({
status: "healthy",
system: "IMA CORE"
});
});

app.post("/api/chat", (req, res) => {
const { message } = req.body;

if (!message || typeof message !== "string") {
return res.status(400).json({
error: "Veuillez envoyer un message valide."
});
}

res.json({
system: "IMA CORE",
received: true,
message: "Votre demande a été reçue. Le moteur IA doit encore être connecté."
});
});

app.listen(PORT, () => {
console.log("IMA CORE démarré sur le port ${PORT}");
});
