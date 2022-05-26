import Users from "../models/usersSchema";

// controllers for user
const getUser = async (req, res) => {
	const { username } = req.params;
	try {
		const user = await Users.findOne({
			where: {
				username,
			},
		});
		res.json(user);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};
const postUser = async (req, res) => {
	const { username, firstName, lastName, email, password, phone } = req.body;

	const user = await Users.create({
		username,
		firstName,
		lastName,
		email,
		password,
		phone
	});

	console.log(user);
};
const putUser = async (req, res) => {
	try {
		const {username} = req.params;
		const {firstName, lastName, email, password, phone} = req.body;

		const user = await Users.findOne({
			where: {
				username,
			},
		});
		user.firstName = firstName;
		user.lastName = lastName;
		user.email = email;
		user.password = password;
		user.phone = phone;
		await user.save();

		res.json(user);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
const deleteUser = async (req, res) => {
	const { username } = req.params;
	try {
		await Users.destroy({
			where: {
				username,
			},
		});
		return res.sendStatus(204);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const methods = {
	getUser,
	postUser,
	putUser,
	deleteUser,
};