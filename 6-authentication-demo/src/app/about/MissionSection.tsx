import { ReactNode } from "react";

interface MissionSectionProps {
  title: string;
  description: string;
  items: string[];
}

export const MissionSection = ({
  title,
  description,
  items,
}: MissionSectionProps) => (
  <section className="max-w-6xl mx-auto px-6 py-12 grid gap-12 md:grid-cols-2 items-center">
    <div className="space-y-6">
      <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
        Our Purpose
      </div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
        {description}
      </p>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center text-gray-700 dark:text-gray-300"
          >
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="relative">
      <div className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-xl opacity-75"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 aspect-video flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Innovation Through Simplicity
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our approach combines powerful technology with intuitive design
          </p>
        </div>
      </div>
    </div>
  </section>
);
