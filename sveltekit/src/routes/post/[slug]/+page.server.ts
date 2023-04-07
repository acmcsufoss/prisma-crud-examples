import db from "$lib/server/db";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../../$types";


const load = (async () => {
    await db.$connect();
    const data = await db.posts.findFirst({
        where: {
            id: slug
        }
    })
})



    update: async ({ request }) => {
        const data = await request.formData();
        const id = Number(data.get("id"));
        const title = data.get("title") as string;
        const content = data.get("content") as string;
        await db.posts.update({
            where: {
                id: id
            },
            data: {
                id: id,
                title,
                content
            }
        })
    }