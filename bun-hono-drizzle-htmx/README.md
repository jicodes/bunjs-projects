## Todo list app built with Bun, Hono, Drizzle ORM, HTMX and Tailwind 
A simple ToDo app meant to show some of the HTMX basics. It is all running using Bun, with Hono for the routing, Drizzle as the ORM for the SQLite database and Tailwind for styling.

### Setup
Install all dependencies
```
bun install
```
Create a `.env` file
```
PORT=3042
```
Create SQLite DB + Generate migrations
```
bunx drizzle-kit generate:sqlite --schema ./db/schema.ts
```
Apply migrations
```
bun run ./db/migrate.ts 
```
Run the seed script
```
bun run ./db/seed.ts
```

### Start
Everything should be set up now! All we have left to do is run:
```
bun run dev
```

Acknowledgement: [video here](https://youtu.be/arVNHfFCJfU).

## TODO:
initial todos can be retrieved from ssr 