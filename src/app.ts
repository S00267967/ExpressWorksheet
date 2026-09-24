import express, {Application, request, Request, Response} from "express" ; 
import carRoutes from './routes/cars';
import { env } from "./config/env";
import { connectDB } from "./config/database";
import {authenticateKey} from './middleware/auth.middleware';


const PORT = env.port; 
const app: Application = express(); 

app.use(express.json());
    console.log('Request body:', request.body);
app.use('/api/v1/cars', authenticateKey, carRoutes);
app.use((req, _res, next) => { 
    console.log(`${req.method} ${req.originalUrl}`); 
    next(); 
}); 
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT  }`);
  });

};

startServer(); 
/***
 * app.use(express.json());
    console.log('Request body:', request.body);

app.get("/ping", async (_req : Request, res: Response) => { 
    res.json({ 
        message: "Hello, Message! I am the god of the application." }); }); 
        app.listen(PORT, () => { 
app.get('/templeOS', async (_req : Request, res: Response) => { 
    res.json({ 
        message: "I am Rasta the Pasta", 
    }); 

}); 
 
 */