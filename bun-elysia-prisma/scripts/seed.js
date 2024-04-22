const { PrismaClient } = require("@prisma/client");

const client = new PrismaClient();

const postsToCreate = [
  {
    id: 1,
    title: "Hello World",
    content: "This is my first post",
  },
  {
    id: 2,
    title: "Hello Prisma",
    content: "This is my second post",
  },
  {
    id: 3,
    title: "Hello bun-elsiya",
    content: "This is my third post",
  },
  {
    id: 4,
    title: "Hello Seed",
    content: "This is my fourth post",
  },
];

const seed = async (posts) => {
  
  for (const post of posts) {
    console.log("Seeding posts...", post);
    await client.post.upsert({
      where: { id: post.id },
      update: post,
      create: post,
    });
  }
};

seed(postsToCreate)
  .then(() => {
    console.log("Seeding completed!");
  })
  .catch((e) => {
    console.error('Error:', e);
  })
  .finally(() =>{
    client.$disconnect();
    console.log("Disconnected Prisma Client!");
  });