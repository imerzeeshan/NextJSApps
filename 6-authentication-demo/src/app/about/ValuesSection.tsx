interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

interface ValuesSectionProps {
  title: string;
  subtitle: string;
  values: ValueItem[];
}

export const ValuesSection = ({
  title,
  subtitle,
  values,
}: ValuesSectionProps) => (
  <section
    className="max-w-6xl mx-auto px-6 py-16 md:py-24 bg-white dark:bg-gray-800 rounded-2xl 
  shadow-lg border border-gray-100 dark:border-gray-700"
  >
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-3">
      {values.map((value, index) => (
        <div key={index} className="text-center p-6">
          <div className="text-4xl mb-4">{value.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);
