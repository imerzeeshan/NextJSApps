interface AdminHeaderProps {
  title: string;
  description: string;
  userCount: number;
}

export const AdminHeader = ({
  title,
  description,
  userCount,
}: AdminHeaderProps) => (
  <div className="mb-8">
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      </div>
      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
        {userCount} Users
      </div>
    </div>
  </div>
);
