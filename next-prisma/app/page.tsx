import { prisma } from "@/server/db";
import { Posts } from "@prisma/client";

// we want dynamic rendering because we want to fetch new blog posts with each
// page load
// Read more: https://beta.nextjs.org/docs/api-reference/segment-config
export const dynamic = "force-dynamic";

export default async function Page() {
  // Query the database for a list of blog posts
  const blogPosts = await prisma.posts.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <>
      <h1>title</h1>

      {/* Create a div with the title and content for each post */}
      {blogPosts.map((e: Posts) => {
        return (
          <div key={e.id}>
            <h2>
              <a href={`/blog/${e.id}`}>{e.title}</a>
            </h2>
            <div>{e.content}</div>
          </div>
        );
      })}
    </>
  );
}
