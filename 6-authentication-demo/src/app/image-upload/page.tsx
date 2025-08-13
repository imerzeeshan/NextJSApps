"use client";
import { useEffect, useState } from "react";

type Image = {
  id: number;
  name: string;
};

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [images, setImages] = useState<Image[]>([]);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    console.log(await res.json());
  };

  const getAllImages = async () => {
    const res = await fetch("/api/upload");
    const data = await res.json();
    console.log(data);
    setImages(data);
  };

  useEffect(() => {
    getAllImages();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center space-y-3 pt-25">
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

      <>
        <h1 className="text-2xl mt-10 underline underline-offset-2">
          Image List
        </h1>
        <div className="flex gap-5">
          {images?.map((img) => (
            <div key={img.id} className="space-y-2">
              <p>{img.name}</p>
              <div className="overflow-hidden w-50 h-60">
                <img
                  src={`/api/image/${img.id}`}
                  alt={img.name}
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
