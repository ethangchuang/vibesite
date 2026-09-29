import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/practice", label: "Practice" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-3xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-semibold">
          Learning
        </Link>
        <ul className="flex gap-4 text-sm text-slate-600">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-slate-900">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
