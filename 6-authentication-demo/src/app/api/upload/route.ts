import { db } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.execute(`SELECT id, name FROM images`);
    console.log(rows);

    return NextResponse.json(rows);
  } catch (error) {}
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await db.execute("INSERT INTO images (name, data) VALUES (?, ?)", [
      file.name,
      buffer,
    ]);

    // await db.end();

    return NextResponse.json({ message: "Image uploaded successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
