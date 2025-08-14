import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const photo = await prisma.photo.create({
      data: { name: file.name, data: buffer },
    });

    return NextResponse.json(photo, { status: 201 });
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const photos = await prisma.photo.findMany();
    const result = photos.map((p) => ({
      id: p.id,
      name: p.name,
      data: p.data,
    }));
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
