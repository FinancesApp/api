import { hash } from "bcryptjs";

import prismaClient from "../../database";
import User from "../../entities/User";
import IUsersRepository from "../IUsersRepository";

class PrismaUsersRepository implements IUsersRepository {
	async create({ first_name, last_name, email, password }: User): Promise<User> {
		const passwordMath = await hash(password, 8);

		const user = await prismaClient.user.create({
			data: {
				first_name,
				last_name,
				email,
				password: passwordMath
			}
		});

		return user;
	}

	async get(email: string): Promise<User> {
		const user = await prismaClient.user.findUnique({
			where: {
				email
			}
		});

		return user;
	}

	async exists(email: string): Promise<boolean> {
		const user = await prismaClient.user.findUnique({
			where: {
				email
			}
		});

		return !!user;
	}
}

export default PrismaUsersRepository;