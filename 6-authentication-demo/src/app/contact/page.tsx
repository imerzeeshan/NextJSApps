export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Have questions or feedback? Fill out the form below and we’ll get back to you.
        </p>
      </section>

      <form className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">First Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white" />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white" />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
          <textarea rows={6} className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"></textarea>
        </div>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Send Message
        </button>
      </form>
    </main>
  );
}
