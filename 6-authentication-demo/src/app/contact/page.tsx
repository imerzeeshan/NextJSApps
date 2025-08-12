export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Have questions or feedback? We’d love to hear from you.
        </p>
      </section>

      <form className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            rows={5}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
