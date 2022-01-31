const Product = require("../models/Product");


module.exports.addProduct = (req,res) => {

	console.log(req,res)

	let newProduct = new Product({

		name: req.body.name,
		description: req.body.description,
		price: req.body.price,

	});

	newProduct.save()
	.then(product => res.send(product))
	.catch(err => res.send(err))
}

module.exports.getActiveProducts = (req,res) => {

	Product.find({isActive:true})
	.then(results => res.send(results))
	.catch(err => res.send(err));


}

module.exports.getSingleProduct = (req, res) => {

	Product.findById(req.params.id)
	.then(result => res.send(result))
	.catch(err => res.send(err));
}

module.exports.updateProduct = (req,res) => {

	let updates = {

		name:req.body.name,
		description: req.body.description,
		price:req.body.price
	}

	Product.findByIdAndUpdate(req.params.id,updates,{new:true})
	.then(updateProduct => res.send(updateProduct))
	.catch(err => res.send(err));

}

module.exports.archiveProduct = (req,res) => {

	let updates = {

		isActive:false
	}

	Product.findByIdAndUpdate(req.params.id,updates,{new:true})
	.then(results => res.send(results))
	.catch(err => res.send(err));

}

















