import BrowserMockup from "./BrowserMakeup";
import Button from "./Button";
import { RocketLaunchIcon } from "./Icons";


const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
      <div className="animate-fade-in">
        <div className="inline-block mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
          New & Improved
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Build Amazing Projects <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            With Ease
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          A powerful Next.js + Tailwind CSS starter with modern UI components,
          animations, and everything you need to launch faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/dashboard"
            variant="primary"
            icon={<RocketLaunchIcon />}
          >
            Get Started
          </Button>
          <Button href="#features" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>

      <BrowserMockup>
        <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Project Preview</p>
        </div>
      </BrowserMockup>
    </section>
  );
};

export default HeroSection;
