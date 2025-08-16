"use client";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useActionState, useEffect, useState } from "react";
import { UploadState, uploadImage } from "./gallery.action";
import { Trash } from "lucide-react";
import Loading from "./loading";
import FileUploadForm from "./FileUploadForm";

type Image = {
  id: number;
  name: string;
};

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(10);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const { sessionClaims } = useAuth();
  const isAdmin = sessionClaims?.metadata.role === "admin";

  const [state, formAction, isPending] = useActionState<UploadState, FormData>(
    uploadImage,
    undefined
  );

  // console.log(isPending);

  const getAllImages = async () => {
    try {
      const res = await fetch("/api/image", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch images");
      const data = await res.json();
      // console.log(data);
      setImages(data);
      setLoading(false);
    } catch (error) {
      throw new Error("Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePhoto = async (imageId: number) => {
    const res = await fetch(`/api/image/${imageId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setImages((prev) => prev.filter((img) => img.id !== imageId));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      getAllImages();
    }
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        setVisibleCount((prev) => prev + 5);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [state?.success]);

  return (
    <div
      className="min-h-screen md:max-w-[90%] lg:max-w-[80%] mx-auto flex flex-col items-center 
    space-y-3 pt-25 pb-10"
    >
      {isAdmin && (
        <div>
          <FileUploadForm formAction={formAction} isPending={isPending} />
        </div>
      )}

      <>
        <h1 className="text-2xl my-15 text-violet-500 underline underline-offset-3">
          Image List
        </h1>
        <div className="flex flex-wrap gap-3 justify-center">
          {images?.slice(0, visibleCount)?.map((img) => (
            <div
              key={img.id}
              className="space-y-2 bg-purple-200 rounded text-gray-500 group"
            >
              <div className="overflow-hidden w-[200px] h-[240px] relative">
                {isAdmin && (
                  <Trash
                    onClick={() => handleDeletePhoto(img.id)}
                    className="absolute right-1 top-1 z-10 w-8 h-8 text-red-400 bg-gray-200/50 rounded-full 
                p-2 hover:scale-115 transition-all duration-300 cursor-pointer"
                  />
                )}
                <Image
                  src={`/api/image/${img.id}`}
                  alt={img.name}
                  width={200}
                  height={240}
                  loading="lazy"
                  quality={100}
                  priority={false}
                  unoptimized
                  className="w-full h-full group-hover:scale-105 transition-all duration-300 rounded-t"
                />
              </div>
              <p className="text-xl p-3">{img.name.slice(0, 15)}</p>
            </div>
          ))}
        </div>
        {loading && <Loading />}
      </>
    </div>
  );
}
