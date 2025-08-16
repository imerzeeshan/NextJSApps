import { StatsCard } from "./StatsCard";
import {
  UsersIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "./DashboarIcons";

interface StatsData {
  title: string;
  value: string;
  color: string;
  icon: React.ReactNode;
}

export const StatsGrid = ({ userLength }: { userLength: string }) => {
  const stats: StatsData[] = [
    {
      title: "Total Users",
      value: userLength,
      color: "from-blue-500 to-blue-600",
      icon: <UsersIcon className="w-6 h-6" />,
    },
    {
      title: "Revenue",
      value: "$12,340",
      color: "from-green-500 to-green-600",
      icon: <CurrencyDollarIcon className="w-6 h-6" />,
    },
    {
      title: "Tasks Completed",
      value: "87",
      color: "from-yellow-500 to-yellow-600",
      icon: <CheckCircleIcon className="w-6 h-6" />,
    },
    {
      title: "Pending Issues",
      value: "15",
      color: "from-red-500 to-red-600",
      icon: <ExclamationTriangleIcon className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          value={stat.value}
          color={stat.color}
          icon={stat.icon}
        />
      ))}
    </div>
  );
};
