"use client";

import { useMagnetic } from "@/hooks/useMagnetic";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: MagneticButtonProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLDivElement>(0.3);

  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  const inner = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseClass} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </div>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }

  return (
    <button type={type} onClick={onClick}>
      {inner}
    </button>
  );
}
