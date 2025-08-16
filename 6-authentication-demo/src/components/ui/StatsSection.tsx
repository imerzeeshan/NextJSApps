interface StatItem {
  value: string;
  label: string;
  color: "blue" | "purple" | "green" | "indigo";
}

const StatsSection = () => {
  const stats: StatItem[] = [
    { value: "100%", label: "Performance", color: "blue" },
    { value: "24/7", label: "Support", color: "purple" },
    { value: "10x", label: "Faster", color: "green" },
    { value: "99.9%", label: "Uptime", color: "indigo" },
  ];

  return (
    <section
      className="max-w-7xl xl:mx-auto px-6 py-16 md:py-24 mx-5 bg-white dark:bg-gray-800 rounded-2xl 
    shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="p-4">
            <div
              className={`text-3xl md:text-4xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2`}
            >
              {stat.value}
            </div>
            <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
