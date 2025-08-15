"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export type UploadState = { success?: boolean; error?: string } | undefined;

export async function uploadImage(
  prevState: UploadState,
  formData: FormData
): Promise<UploadState> {
  const file = formData.get("file") as File;
  if (!file.size) return { error: "No file uploaded" };

  try {
    //? First way with call api
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await prisma.photo.create({
      data: { name: file.name, data: buffer },
    });

    revalidatePath("/gallery");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Failed to upload image" };
  }
}
