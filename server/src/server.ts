import express from "express";
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import accountTypeRoutes from './routes/accountTypeRoutes';
import userProfileRoutes from './routes/userProfileRoutes'
import cookieParser from 'cookie-parser'
import fieldOfWorksRouter from './routes/fieldOfWorks'
import authRoutes from './routes/authRoutes'
import contractRoutes from './routes/contractRoutes'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: 'http://127.0.0.1:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 5 minutes)
  standardHeaders: true,
  legacyHeaders: false,
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(helmet())
app.use(limiter)


const usersRouter = require('./routes/users')
app.use('/users',usersRouter);
app.use('/fieldOfWorks',fieldOfWorksRouter);
app.use('/accountTypes', accountTypeRoutes);
app.use('/userProfile',userProfileRoutes)
app.use('/auth',authRoutes)
app.use('/contract',contractRoutes)
mongoose.connect(process.env.ATLAS_URI as string,{


})
    .then(()=>{
        console.log(`Listening on port ${PORT}`)
        app.listen(PORT);
    }
);
