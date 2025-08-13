interface DashboardHeaderProps {
  title: string;
  description?: string;
}

export const DashboardHeader = ({
  title,
  description,
}: DashboardHeaderProps) => (
  <div className="mb-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
      {title}
    </h1>
    {description && (
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    )}
  </div>
);
