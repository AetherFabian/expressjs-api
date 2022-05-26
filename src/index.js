import app from "./app.js";
// import database
import { sequelize } from "./database/database";
//import models to create if the database is empty
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
		return "Connection has been established successfully.";

	} catch (error) {
		return "Connection has been established successfully.";
	}
}

startServer();

main();