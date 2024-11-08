const mongoose = require("mongoose")

const SaleSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer"
  },
  booksId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book"
  }]
},
  { timestamps: true }
)

const Sale = mongoose.model("Sale", SaleSchema)

module.exports = Sale