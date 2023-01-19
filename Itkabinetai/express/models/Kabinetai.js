const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    pirmadienis: {
        type: Object
    },
    antradienis: {
        type: Object
    },
    treciadienis: {
        type: Object
    },
    ketvirtadienis: {
        type: Object
    },
    penktadienis: {
        type: Object
    }
})

module.exports = mongoose.model('kabinetaiTikras', productSchema)
