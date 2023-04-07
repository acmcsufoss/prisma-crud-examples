import CommentForm from "@/components/CommentForm";
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

  const comments = await prisma.comments.findMany({
    where: {
      blogPostId: parseInt(params.id),
    },
  });

  return (
    <>
      <h1>{blogPost?.title}</h1>
      <div>{blogPost?.content}</div>
      <h2>Comments</h2>
      <CommentForm id={blogPost?.id ?? 0}></CommentForm>
      {comments.map((e) => {
        return (
          <div key={e.id}>
            <h3>{e.author}</h3>
            <div>{e.comment}</div>
          </div>
        );
      })}
    </>
  );
}
