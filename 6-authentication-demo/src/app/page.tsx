import { Counter } from "@/components/counter";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Welcome to My Mini Project
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
          A simple Next.js + Tailwind CSS project with a clean and modern UI.
        </p>
        <a
          href="/dashboard"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Get up and running quickly with Next.js and Tailwind.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Mobile-first UI that works on any device.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Easy to Customize</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Change colors, layouts, and content easily.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to explore?</h2>
        <p className="mb-8 text-lg">
          Start building your project with this clean base.
        </p>
        <a
          href="/dashboard"
          className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Go to Dashboard
        </a>
      </section>
    </main>
  );
}
