import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'moongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//connect database to application - mongodb.com
const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.dudg3sn.mongodb.net/?retryWrites=true&w=majority' //not secure right now
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL) // {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err));
