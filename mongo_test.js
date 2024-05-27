const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://localhost:27017"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

	await modifications(client);

  } catch (e) {
	console.error(e);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

async function modifications(client) {
	console.log('Modifications function called');

	const dbName = 'myproject';
	const db = await client.db(dbName);

	if (db) {
		console.log('Database detected! Continuing');
	}

	// new user
	var name = 'user' + Math.floor(Math.random()*10000);
	var email = name + '@mit.edu'

	var customers = await db.collection('customers').find().toArray(function(err, docs) {
		console.log('Collection:',docs);
	});
	console.log("Customers:")
	console.log(customers);

	var collection = await db.collection('customers');
	var doc = {name, email};
	await collection.insertOne(doc, {w:1}, function(err, result) {
		console.log('Document insert');
;	});
}