import databaseService from "./../database/database";

console.log(knex.select().from('pets').timeout(1000))

const ifTableExists = async () => {
    let tableExists = knex.select().from('pets').timeout(1000)
    console.log(tableExists);
    if (!tableExists) {
        createTable()
        return true
    }
    else {
        return true
    }
}

const createTable = async () => {
    const schema = petsSchema()
    await databaseService.query(`create table pets (${schema}`)
}

const petsSchema = () => {
    databaseService.createSchema("pets", {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
    });
}