const MongoClient 	= require('mongodb').MongoClient;
const url 			= "mongodb://localhost:27017";
let db 				= null;

// todo: token authentication?

const client = new MongoClient(url, {});

async function create(name, email, password) {
	const dbName = 'myproject';
	const collectionName = 'users';

	await client.connect();

	const doc = {name, email, password, balance: 0};
	const db = client.db(dbName);
	var collection = db.collection(collectionName);

	await collection.insertOne(doc, {w:1}, function(err, result) {
		console.log('document inserted');
		err ? reject(err) : resolve(doc);
	});
	await client.close();
	console.log(`Create function completed. Name: ${name}; Email: ${email}; Password: ${password}`);
	return doc;
}

async function all() {
	const dbName = 'myproject';
	const collectionName = 'users';

	await client.connect();

	const db = client.db(dbName);
	var collection = db.collection(collectionName);

	const users = await collection.find({}).toArray(function(err, docs) {
		err ? reject(err) : resolve(docs);
	})
	console.log(users);
	
	await client.close();
	console.log(`All function completed`);
	return users;
};

module.exports = {all, create};