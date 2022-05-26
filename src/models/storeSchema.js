import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

const Store = sequelize.define("store", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	petId: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	quantity: {
		type: DataTypes.INTEGER
	},
	shipDate: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	},
	status: {
		type: DataTypes.STRING,
		defaultValue: "placed"
	},
	complete: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	}},{
	timestamps: false
});

export default Store;