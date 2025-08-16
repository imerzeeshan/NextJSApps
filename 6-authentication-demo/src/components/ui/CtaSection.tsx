import { ArrowRightIcon } from "lucide-react";
import Button from "./Button";


const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 text-center mt-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to build something amazing?
        </h2>
        <p className="mb-8 text-lg md:text-xl opacity-90">
          Join thousands of developers who have accelerated their workflow with
          our starter template.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/dashboard" variant="accent" icon={<ArrowRightIcon />}>
            Launch Dashboard
          </Button>
          <Button href="#" variant="outline">
            Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
