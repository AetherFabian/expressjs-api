# EXPRESS JS REST-API
Simple Rest-Api Pet Store commerce system, Built using sequelize with postgres, Express.js and Node.js

# Installation
Requirements
- Node.js
- VS Code or Any Text Editor
- Database motor

Create a folder with your own project name and go in the folder.
Example:
```cmd
> mkdir new-project
> cd new-project
```

## Database
Before installing the project you must need create a database with name as you want.

## Installing dependencies
```cmd
> npm i
```

## Editing File
Edit the required value in folder lib file config.js.
```js
export default {
	host: "",
	database:"",
	user:"",
	password: "",
};
```
And edit the database config sequelize of the database motor you will use
```js
export const sequelize = new Sequelize(config.database, config.user, config.password,{
	host: config.host,
	dialect: "postgres mysql mssql mariadb"
});
```

## Running App
```cmd
> npm start
```

# Usage
Endpoints of APIs, APIs documentation is into the project to check the HTTP requests.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/edf3decccc20d7ae9698?action=collection%2Fimport)

|  Routes  |   EndPoint      |  Query   |
| :------: | :------------:  | :------: |
| Pets     |  /api/v1/pets   |  query   |
| Store    |  /api/v1/store  |  query   |
| Users    |  /api/v1/user   |  query   |

# Tests
```cmd
> npm run test
```

# License
ISC License