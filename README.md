# :zap: API **|** Finances App

## :thinking: Introduction

This is a repository to store all the API for managing authentication, creating users, items and categories. Search for single or multiple records at once, update items and categories and remove both.

The project is based on [Node.js](https://nodejs.org/), [TypeScript](https://www.typescriptlang.org/) as language, [Prisma](https://www.prisma.io/) as ORM, [Express](https://expressjs.com/pt-br/) as Framework and [PostgreSQL](https://www.postgresql.org/) as Database.

## :door: Available routes
- `GET /users` - List all users registered in the API (Only for Admin).
- `GET /users/@me` - Fetch authenticated user information.
- `GET /categories` - Fetch the Authenticated User Category List.
- `GET /items` - Fetch the Authenticated User Item List
- `POST /auth` - Generate User Access Token.
- `POST /users` - Create a new user.
- `POST /categories` - Create a new category.
- `POST /items` - Create a new item.
- `DELETE /categories/:category_id` - Remove a category by ID.
- `DELETE /items/:item_id` - Remove an item by ID.

## :file_cabinet: Database tables

All database management is being handled by Prisma, to record all migrations, run the command `npm prisma migrate dev` or `yarn prisma migrate dev`.

Then all migrations will be registered in the database, and you can start the application using the command `npm run dev` or `yarn dev`.

To run the application build process, run the command `npm run build` or `yarn dev`. And finally, run the command `npm run start` or `yarn start` to start the server with the files generated by the build process.

## :gear: Contribution

If you are interested in contributing to the project, you can submit an **Issue** stating what you would like to be added, changed, updated or removed. 

Or you can send a **Pull Request** to the repository yourself with your Fork.


## :heart: Project Contributors
| [<img src="https://github.com/TiaGoiNsaNy.png" width=115><br><sub>@TiaGoiNsaNy</sub>](https://github.com/TiaGoiNsaNy) |
| :---: | 