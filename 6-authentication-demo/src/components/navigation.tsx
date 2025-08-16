"use client";

import { useState, useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation"; // ✅ added

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { sessionClaims } = useAuth();
  const isAdmin = sessionClaims?.metadata?.role === "admin";
  const pathname = usePathname(); // ✅ added

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // ✅ active tab styling
  const linkClass = (path: string, base: string) =>
    `${base} ${
      pathname === path
        ? "text-blue-600 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300"
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-sm"
          : "bg-white dark:bg-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={"/icon1.svg"}
                alt="ShanTech Logo"
                height={40}
                width={40}
                className="h-10 w-10"
              />
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                ShanTech
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link
                className={linkClass(
                  "/",
                  "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                )}
                href={"/"}
              >
                Home
              </Link>
              <SignedIn>
                <Link
                  className={linkClass(
                    "/dashboard",
                    "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  )}
                  href={"/dashboard"}
                >
                  Dashboard
                </Link>
              </SignedIn>
              <Link
                className={linkClass(
                  "/about",
                  "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                )}
                href={"/about"}
              >
                About
              </Link>
              <Link
                className={linkClass(
                  "/contact",
                  "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                )}
                href={"/contact"}
              >
                Contact
              </Link>
              <Link
                className={linkClass(
                  "/gallery",
                  "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                )}
                href={"/gallery"}
              >
                Gallery
              </Link>
              {isAdmin && (
                <Link
                  className={linkClass(
                    "/admin",
                    "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                  )}
                  href={"/admin"}
                >
                  Admin
                </Link>
              )}
            </div>

            {/* --- existing right side buttons untouched --- */}
            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton>
                  <button className="px-4 py-2 rounded-lg text-sm font-medium bg-transparent text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <div className="relative group">
                  <button
                    className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>Account</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 z-50">
                      <div className="py-1">
                        <Link
                          href="/user-profile"
                          onClick={() => setIsOpen(!isOpen)}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Profile
                        </Link>
                        {isAdmin && (
                          <Link
                            href="/admin"
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Admin Panel
                          </Link>
                        )}
                        <SignOutButton>
                          <button className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                            Sign Out
                          </button>
                        </SignOutButton>
                      </div>
                    </div>
                  )}
                </div>
                <div className="ml-2">
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "h-8 w-8",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>

          {/* Mobile menu button untouched */}
          <div className="md:hidden flex items-center">
            <SignedIn>
              <div className="mr-4">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "h-8 w-8",
                    },
                  }}
                />
              </div>
            </SignedIn>
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className={linkClass(
                "/",
                "block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              )}
              onClick={toggleMobileMenu}
              href={"/"}
            >
              Home
            </Link>
            <SignedIn>
              <Link
                className={linkClass(
                  "/dashboard",
                  "block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
                onClick={toggleMobileMenu}
                href={"/dashboard"}
              >
                Dashboard
              </Link>
            </SignedIn>
            <Link
              className={linkClass(
                "/about",
                "block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              )}
              onClick={toggleMobileMenu}
              href={"/about"}
            >
              About
            </Link>
            <Link
              className={linkClass(
                "/contact",
                "block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              )}
              onClick={toggleMobileMenu}
              href={"/contact"}
            >
              Contact
            </Link>
            <Link
              className={linkClass(
                "/gallery",
                "block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              )}
              onClick={toggleMobileMenu}
              href={"/gallery"}
            >
              Gallery
            </Link>
            {isAdmin && (
              <Link
                className={linkClass(
                  "/admin",
                  "block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
                onClick={toggleMobileMenu}
                href={"/admin"}
              >
                Admin
              </Link>
            )}

            {/* other SignedOut / SignedIn stuff remains same */}
          </div>
        </div>
      )}
    </nav>
  );
};
