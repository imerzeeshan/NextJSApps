import { ReactNode } from "react";

interface BrowserMockupProps {
  children: ReactNode;
}

const BrowserMockup = ({ children }: BrowserMockupProps) => {
  return (
    <div className="mt-16 relative">
      <div className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-xl opacity-75"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="h-6 bg-gray-100 dark:bg-gray-700 flex items-center px-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default BrowserMockup;
