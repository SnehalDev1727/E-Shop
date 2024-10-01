const mongoose = require("mongoose");
const reviewsSchmea = mongoose.Schema({
    Comment: { type: String, required: true },
    rating: { type: Number, required: true },
    user: {
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
        name: { type: String, required: true }
    }
}, {
    Timestamp: true
})
const Review = mongoose.Model("Review", reviewsSchmea)
module.exports = Review;