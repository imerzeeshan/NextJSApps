export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} My Next.js Project. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="/" className="hover:text-white">
            Home
          </a>
          <a href="/about" className="hover:text-white">
            About
          </a>
          <a href="/contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
