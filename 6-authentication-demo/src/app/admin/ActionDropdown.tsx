"use client";

import { setRole, removeRole } from "@/app/admin/action";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

interface ActionDropdownProps {
  userId: string;
  currentRole?: string;
}

export const ActionDropdown = ({
  userId,
  currentRole,
}: ActionDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRoleChange = async (role: string) => {
    const formData = new FormData();
    formData.append("id", userId);
    formData.append("role", role);
    await setRole(formData);
    setIsOpen(false);
  };

  const handleRemoveRole = async () => {
    const formData = new FormData();
    formData.append("id", userId);
    await removeRole(formData);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-full px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
      >
        Actions
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            <button
              onClick={() => handleRoleChange("admin")}
              className={`block px-4 py-2 text-sm w-full text-left ${
                currentRole === "admin"
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Make Admin
            </button>
            <button
              onClick={() => handleRoleChange("moderator")}
              className={`block px-4 py-2 text-sm w-full text-left ${
                currentRole === "moderator"
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Make Moderator
            </button>
            <button
              onClick={handleRemoveRole}
              className="block px-4 py-2 text-sm w-full text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Remove Role
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
