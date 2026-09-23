import express, {Application, Request, Response} from "express" ; 
import carRoutes from './routes/cars';
import { env } from "./config/env";

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

console.log("Server is running on port", PORT);  });   