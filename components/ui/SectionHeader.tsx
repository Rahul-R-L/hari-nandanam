interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div className={`mx-auto mb-20 flex max-w-4xl flex-col ${alignment}`}>
      {/* Badge */}
      <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#FFF8EC] px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#6B1124]">
        {badge}
      </span>

      {/* Title */}
      <h2 className="mt-8 text-4xl font-bold leading-tight text-[#2F2118] md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {/* Gold Divider */}
      <div
        className={`mt-6 h-1 w-24 rounded-full bg-[#D4AF37] ${
          align === "center" ? "mx-auto" : ""
        }`}
      />

      {/* Description */}
      {description && (
        <p className="mt-8 max-w-3xl text-lg leading-9 text-[#6B7280]">
          {description}
        </p>
      )}
    </div>
  );
}