// components/ui/PageHeader.tsx
import Link from "next/link";

type PageHeaderProps = {
  backHref?: string;
  pill: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({
  backHref,
  pill,
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <header className="mb-16 text-center">
      <div className="flex flex-col items-center gap-8">
        {backHref && (
          <Link href={backHref} className="text-blue-600 hover:underline text-sm">
            ← Back to Home
          </Link>
        )}

        <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full">
          <div className="bg-white rounded-full px-6 py-2">
            <span className="text-sm font-semibold text-gray-700">{pill}</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl text-gray-600 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
