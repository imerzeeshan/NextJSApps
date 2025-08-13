import { CloudLightningIcon, PencilIcon } from "lucide-react";
import Card from "./Card";
import { DeviceIcon } from "./Icons";


interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeaturesGrid = () => {
  const features: Feature[] = [
    {
      icon: <CloudLightningIcon className="text-blue-600 dark:text-blue-400" />,
      title: "Lightning Fast",
      description:
        "Optimized for performance with Next.js static generation and dynamic rendering.",
    },
    {
      icon: <DeviceIcon className="text-purple-600 dark:text-purple-400" />,
      title: "Responsive Design",
      description:
        "Mobile-first UI that works flawlessly on any device size and orientation.",
    },
    {
      icon: <PencilIcon className="text-green-600 dark:text-green-400" />,
      title: "Easy Customization",
      description:
        "Modular components and Tailwind classes make styling a breeze.",
    },
  ];

  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {features.map((feature, index) => (
        <Card key={index}>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {feature.description}
          </p>
        </Card>
      ))}
    </section>
  );
};

export default FeaturesGrid;
