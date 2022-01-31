const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

	name: {
		type: String,
		required: [true, "Name is required."]
	},
	description: {
		type: String,
		required: [true, "Description is required."]
	},
	price: {
		type: Number,
		required: [true, "Price is required."]
	},
	isActive: {
		type: Boolean,
		default: true
	},
	createdOn: {
		type: Date,
		default: new Date()
	},
	orders: [
		{

			orderId: {
				type: String,
				required: [true, "Order Id is required."]
			},
			quantity: {
				type: Number,
				required: [true, "Quantity is required."]
			}
		
		}

	]

})




module.exports = mongoose.model("Products", productSchema);