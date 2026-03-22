import { Link, useLocation } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";
import { Instagram, Send, Youtube } from "lucide-react";
import { TELEGRAM_BOT_URL } from "@/pages/Home";

export default function Footer() {
  const { t } = useLocale();
  const [location] = useLocation();
  const isHome = location === "/";

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const anchorLinks = [
    { id: "features", label: t.nav.features },
    { id: "how-it-works", label: t.nav.howItWorks },
    { id: "pricing", label: t.nav.pricing },
  ];

  return (
    <footer
      className="border-t border-border/30 mt-auto"
      style={{ background: "oklch(0.1 0.015 270)" }}
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold font-[Outfit] gradient-text mb-2">
              Neofit AI
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/arseniy_kim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-neon-cyan hover:bg-accent/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-neon-cyan hover:bg-accent/30 transition-colors"
                aria-label="Telegram Bot"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@arseniy_kim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-neon-cyan hover:bg-accent/30 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              {t.footer.navigation}
            </h4>
            <div className="flex flex-col gap-2">
              {anchorLinks.map((link) => (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => handleAnchorClick(e, link.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/contacts"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.contacts}
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              {t.footer.legal}
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/legal/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.footer.terms}
              </Link>
              <Link
                href="/legal/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.footer.privacy}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/20 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} ОсОО «К-Трейд ЛТД». {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
