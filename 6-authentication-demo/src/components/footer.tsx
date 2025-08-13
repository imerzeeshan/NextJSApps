import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 mt-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            MyNextProject
          </h3>
          <p className="text-sm text-gray-400">
            Building modern web experiences with Next.js and Tailwind CSS.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i> Twitter
            </Link>
            <Link href="#" className="hover:text-blue-400">
              <i className="fab fa-github"></i> GitHub
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyNextProject. All rights reserved.
      </div>
    </footer>
  );
}
