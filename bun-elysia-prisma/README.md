# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

Add prisma to devDependencies
```sh
bun add -d prisma
```
Init the prisma
```sh
bunx prisma init
```
Run the postgres db in the Docker 
```sh
docker run --name dev-postgres -p 5432:5432 -e POSTGRES_PASSWORD=xxxxx -d postgres:16-alpine
```
Modify the DATABASE_URL="" in the .env file use the creds above

Run prisma migration
```sh
bunx prisma migrate dev --name create-post-model
```

Add script for prisma in package.json

Open http://localhost:3000/ with your browser to see the result.


Add routes and handlers

Add swagger
```sh
bun add @elysiajs/swagger
```

Visit at swagger endpoints at: 
`host:port/swagger`