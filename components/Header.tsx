"use client";

import { BookOpen, Code2, LayoutDashboard, Play, Sparkles } from "lucide-react";
import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
function Logo() {
  return (
    <>
      {" "}
      <div className="relative">
        {" "}
        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
          <Code2 className="w-5 h-5 text-white" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
          <Play className="w-2 h-2 text-white fill-white" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg tracking-tight leading-none">
          JESUS{" "}
        </span>
        <span className="text-[10px] uppercase tracking-[0.2rem] text-zinc-500">
          STUDIO{" "}
        </span>
      </div>
    </>
  );
}

const Header = () => {
  const pathname = usePathname();
  const { has } = useAuth();
  const isUltra = has?.({ plan: "ultra" });
  const loggedOutLinks = [
    {
      href: "#courses",
      label: "Cursos",
    },
    {
      href: "/pricing",
      label: "Precios",
    },
    {
      href: "#testimonials",
      label: "Testimonios",
    },
  ];
  const loggedInLinks = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/Dashboard/Courses",
      label: "Cursos",
      icon: BookOpen,
    },

    ...(isUltra
      ? [{ href: "/pricing", label: "Cuenta", icon: Sparkles }]
      : [{ href: "/upgrade", label: "Upgrade", icon: Sparkles }]),
  ];
  return (
    <nav className="relative z-10 flex items-center  px-6 lg:px-12 py-5 max-w-7xl mx-auto">
      <div>
        <SignedIn>
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <Logo />
          </Link>
        </SignedIn>
        <SignedOut>
          <Link href="/" className="flex items-center gap-3 group">
            <Logo />
          </Link>
        </SignedOut>
      </div>
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <SignedOut>
          <div className="flex items-center gap-8 text-sm text-zinc-400">
            {loggedOutLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-1">
            {loggedInLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                pathname === link.href ||
                (link.href !== "/dashboard" && pathname.startsWith(link.href));
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    isActive
                      ? "bg-violet-500/10 text-violet-300"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/50",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};
export default Header;
