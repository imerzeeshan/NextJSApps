import Image from "next/image";
import loader from "@/../public/loader.png"; // adjust path if needed

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-64">
      <Image
        src={loader}
        alt="Loading..."
        width={150}
        height={150}
        className="animate-spin"
      />
    </div>
  );
}
