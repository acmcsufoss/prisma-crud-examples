import db from "$lib/server/db";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

export const load = (async ({ params }) => {
  const post = await db.posts.findUnique({
    where: { id: Number(params.id) },
  });
  if (!post) {
    throw fail(404, { message: "Post not found" });
  }
  return { post };
}) satisfies PageServerLoad;

export const actions = {
  update: async ({ request, params }) => {
    const { id } = params;
    const postData = await request.formData();

    const title = postData.get("title") as string;
    const content = postData.get("content") as string;

    if (!title || !content) {
      throw fail(400);
    }
    try {
      await db.posts.update({
        where: { id: Number(id) },
        data: {
          title: title,
          content: content,
        },
      });
    } catch (error) {
      console.error(error);
      throw fail(500, { message: "Server Error" });
    }

    throw redirect(303, `/`);
  },
  delete: async ({ params }) => {
    await db.posts.delete({
      where: { id: Number(params.id) },
    });

    throw redirect(303, "/");
  },
} satisfies Actions;
