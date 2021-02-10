const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slotSchema = new Schema(
    {
        _id: {
            type: String,
            required: true,
        },
        set: {
            type: Boolean,
        },
        name: {
            type: String,
        },
        lastName: {
            type: String,
        },
        phone: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
    {
        _id: false,
    }
);

module.exports = mongoose.model("slot", slotSchema);