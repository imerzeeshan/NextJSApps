import { clerkClient } from "@clerk/nextjs/server";
import { AdminHeader } from "./AdminHeader";
import { StatsOverview } from "./StatsOverview";
import { UserTable } from "./UserTable";
import type { User } from "@clerk/backend";

export const metadata = {
  title: "ShanTech | Admin Dashboard",
  description: "Administration panel for managing users and roles",
  keywords: ["admin", "dashboard", "management"],
  icons: {
    icon: "/icon2.svg",
  },
};

export default async function Admin() {
  const client = await clerkClient();
  const users = (await client.users.getUserList()).data;

  const stats = {
    totalUsers: users.length,
    admins: users.filter((u: User) => u.publicMetadata.role === "admin").length,
    moderators: users.filter((u: User) => u.publicMetadata.role === "moderator")
      .length,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <AdminHeader
          title="Admin Dashboard"
          description="Manage user roles and permissions"
          userCount={users.length}
        />

        <StatsOverview
          users={stats.totalUsers}
          admins={stats.admins}
          moderators={stats.moderators}
        />

        <UserTable users={users} />
      </div>
    </div>
  );
}
