import Link from "next/link";
import { businessConfig } from "../../src/config/business";
import { mainNavigation } from "../../src/config/navigation";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-slate-900">
          {businessConfig.companyName}
        </Link>

        <nav className="hidden gap-6 md:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={businessConfig.callsToAction.primary.href}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
        >
          {businessConfig.callsToAction.primary.label}
        </Link>
      </div>
    </header>
  );
}
