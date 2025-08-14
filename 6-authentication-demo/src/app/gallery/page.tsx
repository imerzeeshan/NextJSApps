"use client";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isatty } from "tty";

type Image = {
  id: number;
  name: string;
};

export default function Home() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [images, setImages] = useState<Image[]>([]);
  const { sessionClaims } = useAuth();
  const isAdmin = sessionClaims?.metadata.role === "admin";

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/image", {
      method: "POST",
      body: formData,
    });
    // console.log(await res.json());
    router.refresh();
  };

  const getAllImages = async () => {
    const res = await fetch("/api/image");
    if (!res.ok) throw new Error("Failed to fetch images");
    const data = await res.json();
    // console.log(data);
    setImages(data);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      getAllImages();
    }
  }, []);

  return (
    <div className="min-h-screen px-1 md:max-w-[90%] lg:max-w-[80%] mx-auto flex flex-col items-center space-y-3 pt-25">
      {isAdmin && (
        <div className="space-x-5">
          <input
            className="border rounded p-2"
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 py-2 px-3 rounded transition-all duration-300"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      )}

      <>
        <h1 className="text-2xl mt-10 underline underline-offset-2">
          Image List
        </h1>
        <div className="flex flex-wrap gap-3 justify-center">
          {images?.map((img) => (
            <div key={img.id} className="space-y-2">
              <p className="overflow-hidden">{img.name}</p>
              <div className="overflow-hidden w-50 h-60">
                <Image
                  src={`/api/image/${img.id}`}
                  alt={img.name}
                  width={50}
                  height={60}
                  placeholder="blur"
                  unoptimized
                  className="w-full h-full hover:scale-105 transition-all duration-300 rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}
