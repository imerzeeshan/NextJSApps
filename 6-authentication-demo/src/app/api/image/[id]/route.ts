export const dynamic = "force-dynamic";

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
    const fileExtension = (name.split(".").pop() || "jpeg").toLowerCase();

    const validExtensions = ["jpeg", "jpg", "png", "gif", "webp", "avif"];
    const safeExtension = validExtensions.includes(fileExtension)
      ? fileExtension
      : "jpeg";

    const cacheHeader =
      process.env.NODE_ENV === "production"
        ? "public, max-age=31536000, immutable"
        : "no-store, no-cache, must-revalidate, proxy-revalidate";

    return new NextResponse(new Uint8Array(data), {
      headers: {
        "Content-Type": `image/${safeExtension}`,
        "Cache-Control": cacheHeader,
      },
    });
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const photo = await prisma.photo.delete({
      where: { id: Number(id) },
    });

    // console.log(photo);
    return NextResponse.json(
      { success: true, message: "Image Deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to Delete image" },
      { status: 500 }
    );
  }
}
