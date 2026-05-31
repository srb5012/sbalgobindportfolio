import paths from "./cert-logos.json";

const TITLES: Record<string, string> = {
  ibm: "IBM",
  freecodecamp: "freeCodeCamp",
  udemy: "Udemy",
};

export function CertLogo({
  issuer,
  size = 18,
  className,
}: {
  issuer: "ibm" | "freecodecamp" | "udemy";
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-label={TITLES[issuer]}
      className={className}
    >
      <path d={(paths as Record<string, string>)[issuer]} />
    </svg>
  );
}
