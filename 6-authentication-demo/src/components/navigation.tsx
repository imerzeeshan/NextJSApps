import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export const Navigation = async () => {
  const { sessionClaims } = await auth();

  const isAdmin = sessionClaims?.metadata?.role === "admin";
  console.log(isAdmin);

  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <h1 className="text-xl font-semibold text-[var(--foreground)]">
                Next.js App
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>

            <SignedOut>
              <SignInButton>
                <button
                  className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 
                dark:text-neutral-200 dark:hover:bg-neutral-700"
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button
                  className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 
                dark:text-neutral-200 dark:hover:bg-neutral-700"
                >
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              {/* <UserButton /> */}
              <Link href={"/user-profile"}>Profile</Link>
              {isAdmin && <Link href={"/admin"}>Admin</Link>}
              <SignOutButton>
                <button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                  Sign Out
                </button>
              </SignOutButton>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};
