import BlogForm from "@/components/BlogForm";
import { prisma } from "@/server/db";

// we want dynamic rendering because we want to fetch new blog posts with each
// page load
export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { id: string } }) {
  // Query the database for a list of blog posts
  const blogPost = await prisma.posts.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  return (
    <>
      <BlogForm
        id={parseInt(params.id)}
        title={blogPost?.title as string}
        content={blogPost?.content as string}
        method="PATCH"
      ></BlogForm>
    </>
  );
}
