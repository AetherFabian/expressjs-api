import Store from "./../models/storeSchema";
import Pets from "./../models/petsSchema";

const getOrder = async (req, res) => {
	const { id } = req.params;
	try {
		const store = await Store.findOne({
			where: {
				id,
			},
		});
		res.json(store);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

const getInventory = async (req, res) => {
	try {
		const store = await Pets.findAll({
			where: {
				status:"available",
			},
		});
		res.json(store);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

const postOrder = async (req, res) => {
	const { quantity, shipDate, status, complete, petId } = req.body;

	const store = await Store.create({
		quantity,
		shipDate,
		status,
		complete,
		petId
	});

	console.log(store);
};

const deleteOrder = async (req, res) => {
	const { id } = req.params;
	try {
		await Store.destroy({
			where: {
				id,
			},
		});
		return res.sendStatus(204);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const methods = {
	getOrder,
	getInventory,
	postOrder,
	deleteOrder
};