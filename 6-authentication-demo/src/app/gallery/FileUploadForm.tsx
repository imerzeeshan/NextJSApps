"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface FileUploadFormProps {
  formAction: (formData: FormData) => void | Promise<void>;
  isPending: boolean;
}

export default function FileUploadForm({ formAction, isPending }: FileUploadFormProps) {
  const [fileName, setFileName] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0]);
    }
  };

  const handleRemove = () => {
    setFileName(null);
  };

  return (
    <form action={formAction} className="flex flex-col gap-5 items-center md:flex-row">
      <div className="flex items-center justify-between w-80 border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm">
        {/* Choose File button */}
        <label
          htmlFor="file"
          className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded cursor-pointer hover:bg-blue-700 transition"
        >
          Choose File
          <input
            id="file"
            type="file"
            name="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* Selected file name & remove */}
        {fileName ? (
          <div className="flex items-center space-x-2">
            <span className="text-blue-600 truncate max-w-[120px]">
              {fileName.name}
            </span>
            <button
              type="button"
              onClick={handleRemove}
              className="text-red-500 hover:cursor-pointer hover:text-red-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <span className="text-sm text-gray-400">No file chosen</span>
        )}
      </div>

      {/* Upload button */}
      <button
        type="submit"
        disabled={isPending}
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded shadow 
        transition duration-300 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isPending ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
}
