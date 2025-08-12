import { auth, currentUser } from "@clerk/nextjs/server";

export const metadata = {
  title: "ShanTech | About",
  description:
    "This is a website create by Zeeshan using NextJS React Framework",
  keywords: ["imerzeeshan", "iamerzeeshan", "Zeeshan", "shan"],
  icons: {
    icon: "/icon1.svg",
  },
};

export default function Dashboard() {
  //   const authObj = await auth();
  //   const userObj = await currentUser();

  //   console.log(authObj, userObj);
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Users", value: "1,245", color: "bg-blue-500" },
          { title: "Sales", value: "$12,340", color: "bg-green-500" },
          { title: "Tasks", value: "87", color: "bg-yellow-500" },
        ].map((card, i) => (
          <div
            key={i}
            className={`${card.color} p-6 rounded-xl text-white shadow hover:shadow-lg transition`}
          >
            <h2 className="text-lg">{card.title}</h2>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li>✅ User John registered</li>
          <li>💰 Sale of $230 processed</li>
          <li>📌 New task added: Update website UI</li>
        </ul>
      </div>
    </main>
  );
}
