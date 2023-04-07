import { prisma } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const json = await request.json();
  console.log(json);
  await prisma.comments.create({
    data: {
      author: json["author"],
      comment: json["comment"],
      blogPostId: parseInt(json["blogPostId"]),
    },
  });
  return NextResponse.json(json);
}
