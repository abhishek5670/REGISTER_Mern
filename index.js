// import dotenv from 'dotenv'
// dotenv.config()
import express from 'express'
import mongoose from "mongoose";
const app = express()
import cors from 'cors'
// import routes here...
import router from './route/users.js';
// import authRoute from './route/auth.js';
app.use(cors()) // enable cross-origin resource sharing (CORS)

app.use(express.json())
app.use(cors())


app.use('/api', router);
// app.use('/api/auth',authRoute)

mongoose.connect("mongodb://0.0.0.0:27017/Task" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  }).then(()=> console.log("MongoDb Connected ...........")).catch((error)=> console.error("MongoDB connection failed :", error.message));


  app.get('/', (req, res) => {
    res.send('Server is ready');
  });
  const port = process.env.PORT || 2000;
  app.listen(port, () => {
    console.log(`Serve at http://0.0.0.0:${port}`);
  });
