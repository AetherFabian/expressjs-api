import app from "./app";
// import database
import { sequelize } from "./database/database";
//import models
import "./models/petsSchema";
import "./models/storeSchema";
import "./models/usersSchema";

const main=()=>{
    app.listen(app.get("port"));
        console.log("Server on port", app.get("port"));
};

async function startServer() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false });
        console.log("Connection has been established successfully.");

    } catch (error) {
        console.log(error);
    }
}

startServer();

main();