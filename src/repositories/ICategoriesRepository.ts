import Category from "../entities/Category";

interface ICategoriesRepository {
    create(category: Category): Promise<Category>;
    exists(id: string, user_id: string): Promise<boolean>;
    getAll(user_id: string): Promise<Category[]>;
}

export default ICategoriesRepository;