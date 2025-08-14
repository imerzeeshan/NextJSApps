import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const photo = await prisma.photo.findUnique({
      where: { id: Number(id) },
    });

    if (!photo) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    const { name, data } = photo;
    const fileExtension = name.split(".").pop() || "jpeg";

    return new NextResponse(new Uint8Array(data), {
      headers: {
        "Content-Type": `image/${fileExtension}`,
        "Content-Disposition": "no-store", //! Prevents static caching
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
