import Button from "@/components/ui/Button";
import { EnvelopeIcon } from "@/components/ui/Icons";

interface AboutCtaProps {
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
}

export const AboutCta = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
}: AboutCtaProps) => (
  <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 text-center mt-10">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      <p className="mb-8 text-lg md:text-xl opacity-90">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          href={primaryButton.href}
          variant="accent"
          icon={<EnvelopeIcon />}
        >
          {primaryButton.text}
        </Button>
        <Button href={secondaryButton.href} variant="outline">
          {secondaryButton.text}
        </Button>
      </div>
    </div>
  </section>
);
