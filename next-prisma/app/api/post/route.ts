import { prisma } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  const json = await request.json();
  console.log(json);
  await prisma.posts.update({
    where: {
      id: parseInt(json["id"]),
    },
    data: {
      title: json["title"] as string,
      content: json["content"] as string,
    },
  });
  return NextResponse.json(json);
}
