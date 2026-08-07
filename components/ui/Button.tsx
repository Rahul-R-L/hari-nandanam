import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const primary =
    "bg-[#6B1124] text-white hover:bg-[#520C1B] shadow-lg hover:shadow-xl";

  const secondary =
    "border-2 border-[#D4AF37] text-[#6B1124] hover:bg-[#D4AF37] hover:text-white";

  return (
    <Link
      href={href}
      className={`
      inline-flex
      items-center
      justify-center
      rounded-full
      px-8
      py-4
      font-semibold
      transition-all
      duration-300
      hover:-translate-y-1
      ${
        variant === "primary"
          ? primary
          : secondary
      }
      `}
    >
      {children}
    </Link>
  );
}