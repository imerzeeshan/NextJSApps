interface ActivityItemProps {
  action: string;
  time: string;
  user?: string;
  amount?: number;
}

export const ActivityItem = ({
  action,
  time,
  user,
  amount,
}: ActivityItemProps) => (
  <li className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
    <div>
      <p className="text-gray-700 dark:text-gray-300">
        {action}
        {user && <span className="font-medium"> {user}</span>}
        {amount && (
          <span className="font-medium"> ${amount.toLocaleString()}</span>
        )}
      </p>
    </div>
    <span className="text-sm text-gray-500 dark:text-gray-400">{time}</span>
  </li>
);
