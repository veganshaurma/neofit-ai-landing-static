/**
 * Contacts page
 */
import { useLocale } from "@/contexts/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Instagram, Send, Youtube } from "lucide-react";

export default function Contacts() {
  const { t } = useLocale();

  const socials = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/arseniy_kim", color: "from-pink-500 to-purple-500" },
    { icon: Send, label: "Telegram", href: "https://t.me/arseniy_kim", color: "from-blue-400 to-cyan-400" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@arseniy_kim", color: "from-red-500 to-red-600" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 pb-16">
        <div className="container max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold font-[Outfit] text-center mb-4"
          >
            <span className="gradient-text">{t.contacts.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-muted-foreground mb-12"
          >
            {t.contacts.message}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xl font-bold font-[Outfit] text-center mb-6"
          >
            {t.contacts.social}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-xl p-5 gradient-border flex items-center gap-4 hover:scale-[1.02] transition-transform"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${social.color}`}>
                  <social.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-base font-semibold text-foreground">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
