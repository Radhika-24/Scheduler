const express = require('express');
const bodyParser = require('body-parser');
const slotRouter = express.Router();

const Slot = require('../Models/SlotModel');
slotRouter.use(bodyParser.json())
slotRouter
    .route('/:slot')
    .get((req, res) => {
        Slot.findById(req.params.slot)
            .then(slot => {
                console.log(`get ${JSON.stringify(slot)}`)
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(slot);
            }, 
                err => console.log(err)
            )
            .catch(err => console.log(err));
    })
    .put((req, res) => {
        Slot.findOneAndUpdate(
            { _id: req.params.slot },
            req.body,
            { upsert: true, new: true }
        ).then(slot => {
            console.log(`added/updated ${JSON.stringify(slot)}`);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(slot);
        }, 
        err => console.log(err))
        .catch(err => console.log(err))
    });
slotRouter
    .route('/')
    .delete((req, res) => {
        Slot.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(resp);
            }, err => console.log(err))
            .catch(wrr => console.log(err));
    })

module.exports = slotRouter;