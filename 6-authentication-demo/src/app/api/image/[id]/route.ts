import { db } from "@/config/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const [rows] = await db.execute(
      `SELECT name,data FROM images WHERE id = ?`,
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }
    const { name, data } = rows[0];
    const fileExtension = name.split(".").pop() || "jpeg";

    return new NextResponse(data, {
      headers: {
        "Content-Type": `image/${fileExtension}`,
        "Content-Disposition": `inline; filename="${name}"`,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 }
    );
  }
}
