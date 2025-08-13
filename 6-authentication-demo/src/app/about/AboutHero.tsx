import { ReactNode } from "react";

interface AboutHeroProps {
  title: string;
  subtitle: string;
  highlight: string;
}

export const AboutHero = ({ title, subtitle, highlight }: AboutHeroProps) => (
  <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
    <div className="animate-fade-in">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
        {title}{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  </section>
);
