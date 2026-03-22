import { Link, useLocation } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";
import { Menu, X, Globe, Send } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TELEGRAM_BOT_URL } from "@/pages/Home";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/";

  const anchorLinks = [
    { href: "#features", label: t.nav.features },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#pricing", label: t.nav.pricing },
  ];

  const pageLinks: { href: string; label: string }[] = [];

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (isHome) {
      e.preventDefault();
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    } else {
      // Navigate to home with hash
      (e.currentTarget as HTMLAnchorElement).href = `/${href}`;
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30"
      style={{ background: "oklch(0.13 0.02 270 / 80%)", backdropFilter: "blur(20px)" }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold font-[Outfit] tracking-tight gradient-text group-hover:opacity-80 transition-opacity">
            Neofit AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {anchorLinks.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.startsWith(link.href)
                  ? "text-neon-cyan bg-accent/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <button
            onClick={() => setLocale(locale === "en" ? "ru" : "en")}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-colors"
            aria-label="Switch language"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{locale}</span>
          </button>

          {/* CTA button (desktop) */}
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 btn-gradient px-4 py-2 rounded-lg text-sm font-semibold text-white"
          >
            <Send className="w-3.5 h-3.5" />
            {t.nav.startBot}
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/30 overflow-hidden"
            style={{ background: "oklch(0.13 0.02 270 / 95%)" }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {anchorLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.startsWith(link.href)
                      ? "text-neon-cyan bg-accent/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-1 border-t border-border/20">
                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 btn-gradient px-4 py-3 rounded-lg text-sm font-semibold text-white w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  <Send className="w-4 h-4" />
                  {t.nav.startBot}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
