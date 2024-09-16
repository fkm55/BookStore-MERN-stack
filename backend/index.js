import express from "express";
import { port, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import bookRoute from './routes/bookRoute.js';
import cors from 'cors';

const app = express();
//middleware for parsing request body
app.use(express.json());
//middleware for handling CORS POLICY
//option 1: allow all origins with default of cors(*)
//option 2: Allow Custom Origins
app.use(cors());
 //    origin: 'http://localhost:3000',
 //    methods: ['GET', 'POST', 'PUT', 'DELETE'],
//allowHeaders: ['Content-Type'],
//})
//);

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To Mern Stack Tutorial')
})

app.use('/books', bookRoute);

mongoose
.connect(mongoDBURL)
.then(() =>{
    console.log('App connected to database');
    app.listen(port, () =>{
        console.log(`App is listening to port: ${port}`);
    });
})
.catch((error) => {
    console.log(error);
});