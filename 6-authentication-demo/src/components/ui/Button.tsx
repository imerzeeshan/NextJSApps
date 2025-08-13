import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "accent";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
}

const Button = ({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white/10",
    accent: "bg-white text-blue-600 hover:bg-gray-100",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && icon}
      {children}
    </Link>
  );
};

export default Button;
