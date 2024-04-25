import express from "express"
import morgan from "morgan"
import userRoutes from "./routes/users.routes"
import authRoutes from "./routes/auth.routes"
import { createRoles } from "./libs/initialSetup";
const app = express()
createRoles();
app.use(morgan('dev'));
app.use(express.json());
app.get("/",(req, res)=>{
    res.json({author:"Steven"});
});

app.use("/users",userRoutes);
app.use("/auth",authRoutes);
export default app