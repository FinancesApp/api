import UsersRepositoryInMemory from "../../repositories/in-memory/UsersRepositoryInMemory";
import CategoriesRepositoryInMemory from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import IUsersRepository from "../../repositories/IUsersRepository";
import ICategoriesRepository from "../../repositories/ICategoriesRepository";
import CreateCategoryService from "../../services/CreateCategoryService";

describe("Create Category Service", () => {
	let usersRepository: IUsersRepository;
	let categoriesRepository: ICategoriesRepository;
	let createCategorService: CreateCategoryService;

	beforeAll(() => {
		usersRepository = new UsersRepositoryInMemory();
		categoriesRepository = new CategoriesRepositoryInMemory();
		createCategorService = new CreateCategoryService(usersRepository, categoriesRepository);
	});

	it("Should not be able to create a new category without user not exists", async () => {
		const result = await createCategorService.execute({
			user_id: "000000-0000-000-00000",
			name: "CategoryName",
			type: "income"
		});

		expect(result.status).toBe(401);
		expect(result.code).toBe("NOT_FOUND_USER");
	});

	it("Should be able to crate a anew category with user exists", async () => {
		const user = await usersRepository.create({
			first_name: "FirstName",
			last_name: "LastName",
			email: "user_exists@create_category_service.test",
			password: "1234"
		});

		const result = await createCategorService.execute({
			user_id: user.id,
			name: "CategoryName",
			type: "income"
		});

		expect(result.status).toBe(201);
		expect(result.code).toBe("CATEGORY_CREATED");
		expect(result).toHaveProperty("category");
	});
});