import { auth, currentUser } from "@clerk/nextjs/server";
import { DashboardHeader } from "./DashboardHeader";
import { ActivityFeed } from "./ActivityFeed";
import { StatsGrid } from "./StatsGrid";
import { resolve } from "path";

export const metadata = {
  title: "ShanTech | Dashboard",
  description: "Your dashboard overview",
  keywords: ["dashboard", "analytics", "stats"],
  icons: {
    icon: "/icon1.svg",
  },
};

export default async function Dashboard() {
  // Uncomment when ready to use
  // const authObj = await auth();
  // const userObj = await currentUser();
  // console.log(authObj, userObj);
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-25 px-6 md:px-10">
      <DashboardHeader
        title="Dashboard Overview"
        description="Welcome back! Here's what's happening with your app today."
      />

      <StatsGrid />
      <ActivityFeed />
    </main>
  );
}
