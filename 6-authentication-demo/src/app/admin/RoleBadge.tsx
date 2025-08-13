interface RoleBadgeProps {
  role?: string;
}

export const RoleBadge = ({ role }: RoleBadgeProps) => {
  const roleConfig = {
    admin: {
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      label: "Admin",
    },
    moderator: {
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      label: "Moderator",
    },
    default: {
      color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
      label: "User",
    },
  };

  const config =
    role && role in roleConfig
      ? roleConfig[role as keyof typeof roleConfig]
      : roleConfig.default;

  return (
    <span
      className={`px-2 py-1 text-xs font-medium rounded-full ${config.color}`}
    >
      {config.label}
    </span>
  );
};
