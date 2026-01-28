import { cn } from "@/lib/utils";

export default function AptiTrackLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-8 h-8", className)}
    >
      <path d="M12 3v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M21 12h-2" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M12 21v-2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="M3 12H1" />
      <path d="m6.34 6.34-1.41-1.41" />
      <path d="m14 12-2 2-2-2" />
      <path d="M12 14V8" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
