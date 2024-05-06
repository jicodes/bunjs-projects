import * as schema from "./schema";
import { db } from ".";

(async () => {
  await db.insert(schema.todos).values([
    {
      content: "Install dependencies",
    },
    {
      content: "Create .env file",
    },
    {
      content: "Create the database and generate migrations",
    },
    {
      content: "Apply the migrations",
    },
    {
      content: "Seed the database",
    },
  ]);

  console.log(`Seeding complete.`);
})();
