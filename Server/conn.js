const mongoose=require("mongoose")
// const mongoURI="mongodb://localhost:27017/Money_Records"


// MongoDB connection URL
const conn= async (req,res)=>{
	try{
		await mongoose.connect("mongodb://127.0.0.1:27017/Money_Records").then(()=>{
			console.log("Connected to MongoDB");
		})

	}
	catch(err){
		console.log(err);
		process.exit(0);
	}
}
conn()
module.exports=conn;

// Connection options
// const options = {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// };

// // Establish the connection
// mongoose.connect(mongoURI, options)
// 	.then(() => {
// 		console.log('Connected to MongoDB');
// 	})
// 	.catch((error) => {
// 		console.error('Error connecting to MongoDB:', error.message);

// 		// Handle specific error conditions
// 		if (error.name === 'MongoNetworkError') {
// 			console.error('Network error occurred. Check your MongoDB server.');
// 		} else if (error.name === 'MongooseServerSelectionError') {
// 			console.error('Server selection error. Ensure'
// 				+ ' MongoDB is running and accessible.');
// 		} else {
// 			// Handle other types of errors
// 			console.error('An unexpected error occurred:', error);
// 		}
// 	});

// // Handling connection events
// const db = mongoose.connection;

// db.on('error', (error) => {
// 	console.error('MongoDB connection error:', error);
// });

// db.once('open', () => {
// 	console.log('Connected to MongoDB');
// });

// db.on('disconnected', () => {
// 	console.log('Disconnected from MongoDB');
// });

// // Gracefully close the connection when the application exits
// process.on('SIGINT', () => {
// 	mongoose.connection.close(() => {
// 		console.log('Mongoose connection is disconnected'
// 		+ ' due to application termination');
// 		process.exit(0);
// 	});
// });

// module.exports=db;
