// Fernando Adrián Fuentes Martínez - A01028796

"use strict"

import express from 'express';


const port = 5000;
const app = express();

let cardList = []
let Id = 1

app.use(express.json())

//Rutas API

app.get("/hello", (req, res) => {
    const salute = "Hello from server";
    console.log(req.query); 
    res.status(200).send(salute);
});


app.get('/getcards', (req, res) => {
    if (cardList.length === 0) {
        return res.status(404).json({ message: "No existe ninguna carta" });
    }
    res.json(cardList);
});


app.post('/postcards', (req, res) => {
    const { nombre, descripcion, ataque, defensa } = req.body;
    if (!nombre || !descripcion || ataque == null || defensa == null) {
        return res.status(400).json({ message: "Datos Incompletos" });
    }
    const exists = cardList.some(c => c.nombre === nombre);
    if (exists) {
        return res.status(409).json({ message: "Esta carta ya existe" });
    }
    const newCard = { id: Id++, nombre, descripcion, ataque, defensa };
    cardList.push(newCard);
    res.status(201).json({ message: "Carta añadida.", card: newCard });
});


app.get('/card/:id', (req, res) => {
    const card = cardList.find(c => c.id === parseInt(req.params.id));
    if (!card) {
        return res.status(404).json({ message: "No encontrado" });
    }
    res.json(card);
});

app.delete('/deletecard/:id', (req, res) => {
    const cardId = cardList.findIndex(c => c.id === parseInt(req.params.id));
    if (cardId === -1) {
        return res.status(404).json({ message: "No encontrado." });
    }
    cardList.splice(cardId, 1);
    res.json({ message: "Carta eliminada." });
});

app.put('/updatecard/:id', (req, res) => {
    const card = cardList.find(c => c.id === parseInt(req.params.id));
    if (!card) {
        return res.status(404).json({ message: "No encontrado" });
    }
    const { nombre, descripcion, ataque, defensa } = req.body;
    if (nombre) card.nombre = nombre;
    if (descripcion) card.descripcion = descripcion;
    if (ataque != null) card.ataque = ataque;
    if (defensa != null) card.defensa = defensa;
    res.json({ message: "Card updated successfully.", card });
});


app.listen(port, ()=>{
    console.log(`Running on port ${port}`) // esto se ve en la terminal del server 
}
);
