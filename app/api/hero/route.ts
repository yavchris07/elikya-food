import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const lead = await prisma.hero.create({
    data: {
      title: body.title,
      subtitle: body.subtitle,
      tagline: body.tagline,
      backgroundImageId: body.backgroundImageId,
    },
  });

  return NextResponse.json(lead, { status: 201 });
}

export async function GET() {
  const contact = await prisma.hero.findFirst();

  return NextResponse.json(contact);
}