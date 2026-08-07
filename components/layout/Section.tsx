import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 ${className}`}
    >
      <div className="mx-auto max-w-[1440px]">
        {children}
      </div>
    </section>
  );
}