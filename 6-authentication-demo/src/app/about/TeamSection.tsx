import Card from "@/components/ui/Card";

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

interface TeamSectionProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export const TeamSection = ({ title, subtitle, members }: TeamSectionProps) => (
  <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
        Meet The Team
      </div>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member, index) => (
        <Card key={index} className="group text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <span className="text-4xl font-bold text-gray-500 dark:text-gray-300">
              {member.name.charAt(0)}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
            {member.role}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            {member.description}
          </p>
        </Card>
      ))}
    </div>
  </section>
);
