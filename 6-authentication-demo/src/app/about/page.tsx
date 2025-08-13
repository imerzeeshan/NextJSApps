import { AboutCta } from "./AboutCta";
import { AboutHero } from "./AboutHero";
import { MissionSection } from "./MissionSection";
import { TeamSection } from "./TeamSection";
import { ValuesSection } from "./ValuesSection";

export const metadata = {
  title: "ShanTech | About",
  description:
    "This is a website created by Zeeshan using NextJS React Framework",
  keywords: ["imerzeeshan", "iamerzeeshan", "Zeeshan", "shan"],
  icons: {
    icon: "/icon1.svg",
  },
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alice",
      role: "Lead Developer",
      description: "Specializes in frontend architecture and user experience",
    },
    {
      name: "Bob",
      role: "Backend Engineer",
      description: "Focuses on system design and API development",
    },
    {
      name: "Charlie",
      role: "UI/UX Designer",
      description: "Creates beautiful and intuitive interfaces",
    },
  ];

  const coreValues = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions",
      icon: "💡",
    },
    {
      title: "Integrity",
      description: "Honest and transparent in all our interactions",
      icon: "🤝",
    },
    {
      title: "Excellence",
      description: "We settle for nothing less than the best",
      icon: "🏆",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <AboutHero
        title="About"
        highlight="ShanTech"
        subtitle="Learn more about our mission, our team, and what drives this project forward."
      />

      <MissionSection
        title="Our Mission"
        description="We're dedicated to creating simple, elegant, and efficient applications that help people achieve more with less complexity. Our focus on usability, performance, and scalability allows users to concentrate on what truly matters in their work."
        items={[
          "User-centric design principles",
          "Cutting-edge technology stack",
          "Performance optimization",
          "Accessibility for all users",
        ]}
      />

      <TeamSection
        title="Our Talented Team"
        subtitle="A diverse group of professionals dedicated to building exceptional digital experiences"
        members={teamMembers}
      />

      <ValuesSection
        title="Our Core Values"
        subtitle="The principles that guide everything we do"
        values={coreValues}
      />

      <AboutCta
        title="Join Our Journey"
        subtitle="We're always open to collaboration and new ideas. Let's build something amazing together."
        primaryButton={{
          text: "Contact Us",
          href: "/contact",
        }}
        secondaryButton={{
          text: "Career Opportunities",
          href: "/careers",
        }}
      />
    </main>
  );
}
