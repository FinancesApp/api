import IUsersRepository from "../repositories/IUsersRepository";

type RequestData = {
    first_name: string;
    last_name: string;
    email: string;
	role?: "USER" | "ADMIN";
    password: string;
};

export default class CreateUserService {
	constructor(private usersRepository: IUsersRepository) { }

	async execute({ first_name, last_name, email, password, role = "USER" }: RequestData) {
		const userAlreadyExists = await this.usersRepository.exists("email", email);

		if (userAlreadyExists) return {
			status: 401,
			code: "USER_ALREADY_EXISTS"
		};

		const user = await this.usersRepository.create({
			first_name,
			last_name,
			email,
			role,
			password
		});

		return {
			status: 201,
			code: "USER_CREATED",
			user: {
				id: user.id,
				first_name: user.first_name,
				last_name: user.last_name,
				role: user.role,
				email: user.email,
				is_checked: user.is_checked,
				created_at: user.created_at,
				updated_at: user.updated_at
			}
		};
	}
}