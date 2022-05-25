import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database';

const Pets = sequelize.define('pets', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category:{
        type: DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING
    },
    photoUrl:{
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: 'available'
    }},{
    timestamps: false
});

export default Pets;