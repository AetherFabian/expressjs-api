import config from "./../config";

    const databaseService = require("knex")({
        client: "mysql",
        connection: {
            host: config.host,
            port: 3306,
            database: config.database,
            user: config.user,
            password: config.password,
        },
    });

export default databaseService;