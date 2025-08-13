import { User } from "@clerk/backend";
import { RoleBadge } from "./RoleBadge";
import { ActionDropdown } from "./ActionDropdown";
import type { EmailAddress } from "@clerk/backend";
import Image from "next/image";

interface UserRowProps {
  user: User;
}

export const UserRow = ({ user }: UserRowProps) => {
  const primaryEmail = user.emailAddresses.find(
    (email: EmailAddress) => email.id === user.primaryEmailAddressId
  )?.emailAddress;

  console.log(user);

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div
            className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center 
              justify-center overflow-hidden"
          >
            {!user.imageUrl ? (
              <Image
                src={user?.imageUrl}
                alt="user profile log"
                className="w-full h-full"
                width={40}
                height={40}
              />
            ) : (
              <>
                {user.firstName?.charAt(0)}
                {user.lastName?.charAt(0)}
              </>
            )}
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {user.firstName} {user.lastName}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              @{user.username || primaryEmail?.split("@")[0]}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {primaryEmail}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <RoleBadge role={user.publicMetadata.role as string} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <ActionDropdown
          userId={user.id}
          currentRole={user.publicMetadata.role as string}
        />
      </td>
    </tr>
  );
};
