import { prisma } from "../db";

export async function getAllPosts() {  
  const posts = await prisma.post.findMany();
  return {
    data: posts
  };
}