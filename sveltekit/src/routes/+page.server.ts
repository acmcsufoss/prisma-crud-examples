import db from "$lib/server/db";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, PageServerLoad } from "./$types";

export const load = (async () => {
  await db.$connect();
  const data = await db.posts.findMany();
  await db.$disconnect();
  return {
    posts: data,
  };
}) satisfies PageServerLoad;

export const actions = {
  post: async ({ request }) => {
    const data = await request.formData();
    const title = data.get("title");
    const content = data.get("content");

    if (!title || !content) {
      return fail(400, { content, title, missing: true });
    }

    await db.posts.create({
      data: {
        title: data.get("title") as string,
        content: data.get("content") as string,
      },
    });
    throw redirect(303, "/");
  },
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = Number(data.get("id"));
    await db.posts.delete({
      where: {
        id: id,
      },
    });
  },
}
