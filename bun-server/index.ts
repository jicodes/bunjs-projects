import { serve } from "bun";

const PORT = 3000;

interface Post {
  id: string;
  title: string;
  content: string;
}

let blogPosts: Post[] = [];

function handleGetAllPosts(): Response {
  return new Response(JSON.stringify(blogPosts), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

function handleGetPostById(postId: string): Response {
  const post = blogPosts.find((post) => post.id === postId);
  if (post) {
    return new Response(JSON.stringify(post), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
  return new Response(`Post not found`, { status: 404 });
}

function handleCreatePost(title: string, content: string): Response {
  const newPost: Post = {
    id: String(blogPosts.length),
    title,
    content,
  };

  blogPosts.push(newPost);
  return new Response(JSON.stringify(newPost), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}

function handleUpdatePostById(
  postId: string,
  title: string,
  content: string
): Response {
  const index = blogPosts.findIndex((post) => post.id === postId);
  if (index !== -1) {
    const UpdatedPost: Post = {
      ...blogPosts[index],
      title,
      content,
    };

    blogPosts[index] = UpdatedPost;
    return new Response(JSON.stringify(UpdatedPost), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
  return new Response(`Post not found`, { status: 404 });
}

function handleDeletePostById(postId: string): Response {
  const index = blogPosts.findIndex((post) => post.id === postId);
  if (index !== -1) {
    blogPosts.splice(index, 1);
    return new Response(`Post deleted`, { status: 200 });
  }
  return new Response(`Post not found`, { status: 404 });
}

serve({
  port: PORT,
  async fetch(req) {
    const { method } = req;
    const { pathname } = new URL(req.url);
    const pathRegex = /^\/api\/posts\/(\d+)$/;

    // get a single post by ID
    if (method === "GET") {
      const match = pathname.match(pathRegex);
      const postId = match && match[1];
      if (postId) {
        return handleGetPostById(postId);
      }
    }

    // get all posts
    if (method === "GET" && pathname === "/api/posts") {
      return handleGetAllPosts();
    }

    // create a new post
    if (method === "POST" && pathname === "/api/posts") {
      const newPost = await req.json();
      const { title, content } = newPost;
      return handleCreatePost(title, content);
    }

    // update a post by ID
    if (method === "PATCH") {
      const match = pathname.match(pathRegex);
      const postId = match && match[1];
      if (postId) {
        const editedPost = await req.json();
        return handleUpdatePostById(
          postId,
          editedPost.title,
          editedPost.content
        );
      }
    }

    // delete a post by ID
    if (method === "DELETE") {
      const match = pathname.match(pathRegex);
      const postId = match && match[1];
      if (postId) {
        return handleDeletePostById(postId);
      }
    }

    return new Response(`Page Not Found`, { status: 404 });
  },
});

console.log(`Server running at http://localhost:${PORT}`);
