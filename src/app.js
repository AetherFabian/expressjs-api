import express from "express";
import morgan from "morgan";
// import Routes
import defaultRoutes from "./routes/default.routes";
import petsRoutes from "./routes/pets.routes";
import usersRoutes from "./routes/users.routes";
import storeRoutes from "./routes/store.routes";

const app = express();

// Settings
app.set("port", 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/v1", defaultRoutes); // test endpoint
app.use("/api/v1/pets", petsRoutes); // pets endpoint
app.use("/api/v1/user", usersRoutes); // users endpoint
app.use("/api/v1/store", storeRoutes); // store endpoint

export default app;