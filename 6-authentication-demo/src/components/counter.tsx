"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  //   const { isLoaded, userId, sessionId, getToken } = useAuth();
  //   if (!isLoaded || !userId) return null;

  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) return null;

  return (
    <div className="flex flex-col items-center gap-4">
      <p>Count: {count}</p>
      <button
        className="bg-blue-500 px-3 py-2 rounded hover:bg-blue-600 transition-all ease-in-out duration-300"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};
