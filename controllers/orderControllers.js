const Order = require("../models/Order");

const Product = require("../models/Product");

module.exports.addOrder = (req,res) => {

	

	let newOrder = new Order({

		userId: req.user.id,
		totalAmount: req.body.totalAmount,
		products: req.body.products
			
			
	});

	let isProductUpdated = Product.findById(req.body.products[0].productId).then(product =>{


	let addOrder = {

		orderId: newOrder.Id,
		quantity: req.body.products[0].productId
	}  

	product.orders.push(addOrder);

	return product.save().then(product => true).catch(err => err.message)

	})

	

	//console.log(req.body.products[0].productId)
	



	//console.log(newOrder)

	


	

	//Product.findById({productId:req.body.productId})
	//.then(result => res.send(result))
	//.catch(err => res.send(err));

	//newOrder.save()
	//.then(results => res.send(results))
	//.catch(err => res.send(err))
}