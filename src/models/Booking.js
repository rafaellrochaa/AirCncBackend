const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        // Id do usuário que gravou o spot
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        // Id do usuário que gravou o spot
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    },
    
})

module.exports = mongoose.model('Booking', BookingSchema)
