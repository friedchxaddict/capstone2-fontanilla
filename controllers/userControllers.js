const User = require("../models/User");

const Product = require("../models/Product");

const bcrypt = require("bcrypt");


module.exports.registerUser = (req,res) => {
	console.log(req.body);


const hashedPW = bcrypt.hashSync(req.body.password,10);


	let newUser = new User({

		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		mobileNo: req.body.mobileNo,
		password: hashedPW
	});

	newUser.save()
	.then(user => res.send(user))
	.catch(err => res.send(err));

}

