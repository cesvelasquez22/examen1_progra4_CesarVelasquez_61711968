const express = require('express');

const Producto = require('../models/producto');

const app = express();

app.get('/', (req, res) => {
    res.json('Examen 1 Programación 4');
});

// Deberá hacer aquí el método get para producto (Valor 5 puntos)
app.get('/producto', (req, res) =>{
    res.json('GET producto',)
});

// Deberá hacer aquí el método post para producto (Valor 5 puntos)
app.post('/producto', (req, res)=>{
    let body = req.body;

    let producto = new Producto({
        nombre: body.nombre,
        precio: body.precio,
        creadoEn: body.creadoEn
    });

    //Grabando en la DB
    producto.save((err, productoDB) =>{
        //Validar si hubo error
        if(err){
            res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            producto: productoDB
        });
    });
});

app.put('/producto/:id', (req, res)=>{
    let id = req.params.id;
    let body = req.body;
    //Traer el usuario que solicitamos por su ID
    Producto.findByIdAndUpdate(id, body, {new: true}, (err, productoDB)=>{
        //Validar algun error en el llamado
        if(err){
            res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            producto: productoDB
        });
    });
});

module.exports = app;