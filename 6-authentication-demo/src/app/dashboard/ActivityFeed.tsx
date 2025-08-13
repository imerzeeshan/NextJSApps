import { ActivityItem } from "./ActivityItem";

export const ActivityFeed = () => {
  const activities = [
    { action: "User registered", user: "John", time: "2 hours ago" },
    { action: "Sale processed", amount: 230, time: "5 hours ago" },
    { action: "New task created", user: "Update UI", time: "Yesterday" },
    { action: "System update completed", time: "2 days ago" },
  ];

  return (
    <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Recent Activity
      </h2>
      <ul className="divide-y divide-gray-100 dark:divide-gray-700">
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            action={activity.action}
            time={activity.time}
            user={activity.user}
            amount={activity.amount}
          />
        ))}
      </ul>
    </div>
  );
};
