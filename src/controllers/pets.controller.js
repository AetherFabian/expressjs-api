import Pets from "./../models/petsSchema";

// Get requests
const getPets = async (req, res) => {
	try {
		const pets = await Pets.findAll({
			atributes: ["id", "name", "category", "photoUrl", "status"],
		});
		res.json(pets);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

const getPet = async (req, res) => {
	const { id } = req.params;
	try {
		const pet = await Pets.findOne({
			where: {
				id,
			},
		});
		res.json(pet);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

// Post request
const postPet = async (req, res) => {
	const { name, category, status, photoUrl } = req.body;

	const newPet = await Pets.create({
		name,
		category,
		status,
		photoUrl
	});

	console.log(newPet);
};

// Put request
const putPet = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, category, status, photoUrl } = req.body;

		const pet = await Pets.findByPk(id);
		pet.name = name;
		pet.category = category;
		pet.status = status;
		pet.photoUrl = photoUrl;
		await pet.save();

		res.json(pet);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

// Delete request
const deletePet = async (req, res) => {
	const { id } = req.params;
	try {
		await Pets.destroy({
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
	getPets,
	getPet,
	postPet,
	putPet,
	deletePet,
};