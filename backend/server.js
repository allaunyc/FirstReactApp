import express from 'express';
import dbRoutes from './routes/databaseAccess.js';
import mongoose from 'mongoose';

const app = express();

//This line makes the build folder publicly avaiable
app.use(express.static('build'));

app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log("Server for React Todo App listening on port 3000!");
});
