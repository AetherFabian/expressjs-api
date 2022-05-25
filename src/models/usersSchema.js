import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database';

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    userStatus: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    timestamps: false
});

export default Users;