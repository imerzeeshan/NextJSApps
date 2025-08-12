export const metadata = {
  title: "ShanTech | About",
  description:
    "This is a website create by Zeeshan using NextJS React Framework",
  keywords: ["imerzeeshan", "iamerzeeshan", "Zeeshan", "shan"],
  icons: {
    icon: "/icon1.svg",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Learn more about our mission, our team, and what drives this project.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Our goal is to create simple, elegant, and efficient applications
            that help people achieve more with less complexity. We focus on
            usability, performance, and scalability so our users can focus on
            what matters most.
          </p>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 h-56 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">
            [Mission Image]
          </span>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {["Alice", "Bob", "Charlie"].map((name) => (
            <div
              key={name}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-center">{name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Developer
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="mb-8 text-lg">
          We’re always open to collaboration and new ideas.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
