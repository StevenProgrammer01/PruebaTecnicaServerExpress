import express from "express"
import morgan from "morgan"
import personasRoutes from "./routes/personas.routes"
import authRoutes from "./routes/auth.routes"
const app = express()

app.use(morgan('dev'));
app.use(express.json());
app.get("/",(req, res)=>{
    res.json({author:"Steven"});
});

app.use("/personas",personasRoutes);
app.use("/auth",authRoutes);
export default app