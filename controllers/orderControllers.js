const Order = require("../models/Order");

const Product = require("../models/Product");

module.exports.addOrder = (req,res) => {

	let newOrder = new Order({

		userId: req.user.id,
		totalAmount: req.body.totalAmount,
		products: req.body.products

	});

	newOrder.products.forEach(products => {
		
		console.log(products)
		
		let isProductUpdated = Product.findById(products.productId).then(product =>{

			//console.log(products)

			let addOrder = {

				orderId: newOrder.userId,
				quantity: products.quantity
			}  

			//console.log(addOrder)

		product.orders.push(addOrder)

		return product.save().then(product => true).catch(err => err.message)

		})

	});

	newOrder.save()
	.then(order => res.send(order))
	.catch(err => res.send(err));

}	

	//console.log(req.body.products[0].productId)
	



	//console.log(newOrder)

	


	

	//Product.findById({productId:req.body.productId})
	//.then(result => res.send(result))
	//.catch(err => res.send(err));

	//newOrder.save()
	//.then(results => res.send(results))
	//.catch(err => res.send(err))

	module.exports.getUserOrders = (req,res) => {

		console.log(req.body)
		//Order.findById(req.user.id)
		//.then(result => res.send(result))
		//.catch(err => res.send(err));
	}






