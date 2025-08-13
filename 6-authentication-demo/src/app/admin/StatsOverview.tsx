interface StatsOverviewProps {
  users: number;
  admins: number;
  moderators: number;
}

export const StatsOverview = ({
  users,
  admins,
  moderators,
}: StatsOverviewProps) => {
  const stats = [
    { name: "Total Users", value: users, trend: "up" },
    { name: "Admins", value: admins, trend: "stable" },
    { name: "Moderators", value: moderators, trend: "up" },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    {stat.name}
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600 dark:text-green-400">
                      {stat.trend === "up" ? (
                        <>
                          <svg
                            className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Increased by</span>
                        </>
                      ) : (
                        <span className="text-gray-500 dark:text-gray-400">
                          →
                        </span>
                      )}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
