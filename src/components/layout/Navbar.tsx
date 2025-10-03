"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-royal-blue-300 text-royal-blue-50 text-lg flex items-center justify-center sticky top-0 z-10">
      <div className="max-w-[1200px] w-full">
        <ul className="flex gap-10 py-5">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "font-bold"
                : "font-normal"
            }
          >
            <li className="cursor-pointer">Paises</li>
          </Link>
          <Link
            href="/favoritos"
            className={
              pathname === "/favoritos"
                ? " font-bold"
                : "font-normal"
            }
          >
            <li className="cursor-pointer">Favoritos</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
