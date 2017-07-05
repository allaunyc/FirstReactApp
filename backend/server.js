import express from 'express';
import dbRoutes from './routes/databaseAccess.js';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(process.env.MONGODB_URI);

// mongoose.connection.on('connected', function() {
//   console.log("Success: connected to MongoDb!");
// });
//
// mongoose.connection.on("error", function() {
//   console.log("Error connecting to MongoDb. Check MONGODB_URI IN ENV.SH")
// });

//This line makes the build folder publicly avaiable
app.use(express.static('build'));

app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log("Server for React Todo App listening on port 3000!");
});
