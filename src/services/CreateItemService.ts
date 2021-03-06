import IItemsRepository from "../repositories/IItemsRepository";
import ICategoriesRepository from "../repositories/ICategoriesRepository";
import IUsersRepository from "../repositories/IUsersRepository";

type RequestData = {
    user_id: string;
    title: string;
    note: string;
    value: number;
    category_id: number;
	created_at: Date;
};

export default class CreateItemService {
	constructor(private usersRepository: IUsersRepository, private categoriesRepository: ICategoriesRepository, private itemsRepository: IItemsRepository) { }

	async execute({ user_id, title, note, value, category_id, created_at }: RequestData) {
		const userAlreadyExists = await this.usersRepository.exists("id", user_id);
		
		if (!userAlreadyExists) return {
			status: 401,
			code: "NOT_FOUND_USER"
		};

		const categoryAlreadyExists = await this.categoriesRepository.exists(category_id, user_id);

		if (!categoryAlreadyExists) return {
			status: 401,
			code: "NOT_FOUND_CATEGORY"
		};

		const item = await this.itemsRepository.create({
			user_id,
			title,
			note,
			value,
			category_id,
			created_at
		});

		return {
			status: 201,
			code: "ITEM_CREATED",
			item
		};
	}
}