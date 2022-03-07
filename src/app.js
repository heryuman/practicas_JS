import express from "express";
import config from "./config";
import  produtsRoutes from './routes/product.routes'
const app=express()
//let port=6000; SE CAMBIA PORT por una variable de entorno que exportamos de config
app.set('port',config.port)
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(produtsRoutes);
export default app