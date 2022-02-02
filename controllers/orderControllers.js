const Order = require("../models/Order");


module.exports.addOrder = (req,res) => {

	

	let newOrder = new Order({

		userId: req.user.id,
		totalAmount: req.body.totalAmount,
		products: req.body.products
			
			
	});

	console.log(newOrder)

	let newOrderId = newOrder.Id

	order.OrderIds.push(newOrderId);

	//newOrder.save()
	//.then(results => res.send(results))
	//.catch(err => res.send(err))
}