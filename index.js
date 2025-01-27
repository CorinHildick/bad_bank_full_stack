var express 	= require('express');
var app 		= express();
var cors		= require('cors');
var dal 	 	= require('./dal.js');

// todo: add route for current account's data

app.use(express.static('public'));
app.use(cors());

app.get('/account/create/:name/:email/:password', function (req, res) {
	console.log('creating account...');
	dal.create(req.params.name, req.params.email, req.params.password)
		.then((user) => {
			console.log(user);
			res.send(user);
		});
});

app.get('/accounts/all', function (req, res) {
	dal.all()
		.then((docs) => {
			console.log(docs);
			res.send(docs);
		});
});


var port = 3000
app.listen(port);
console.log(`Running on port ${port}`)
console.log(`Link: http://localhost:${port}`)