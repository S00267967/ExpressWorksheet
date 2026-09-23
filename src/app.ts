import express, {Application, Request, Response} from "express" ; 
import carRoutes from './routes/cars';
import { env } from "./config/env";
import { connectDB } from "./config/database";

const PORT = env.port; 
const app: Application = express(); 

app.use('/api/v1/cars', carRoutes);
app.use(express.json());
app.use((req, _res, next) => { 
    console.log(`${req.method} ${req.originalUrl}`); 
    next(); 
}); 
app.get("/ping", async (_req : Request, res: Response) => { 
    res.json({ 
        message: "Hello, Message! I am the god of the application." }); }); 
        app.listen(PORT, () => { 
app.get('/templeOS', async (_req : Request, res: Response) => { 
    res.json({ 
        message: "I am Rasta the Pasta", 
    }); 

}); 

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT  }`);
  });

};

startServer(); 

})
