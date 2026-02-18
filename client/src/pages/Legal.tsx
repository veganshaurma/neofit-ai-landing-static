/**
 * Legal pages: Terms, Privacy, Refund
 */
import { useRoute } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Legal() {
  const [, params] = useRoute("/legal/:type");
  const { t } = useLocale();

  const type = params?.type as "terms" | "privacy" | undefined;
  const page = type && t.legal[type] ? t.legal[type] : null;

  if (!page) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-16">
          <p className="text-muted-foreground">Page not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 pb-16">
        <div className="container max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold font-[Outfit] mb-8"
          >
            <span className="gradient-text">{page.title}</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-xl p-8 gradient-border"
          >
            <div
              className="[&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-2 [&_p]:text-foreground/80 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:text-foreground/80 [&_li]:mb-1 [&_strong]:text-foreground [&_a]:text-neon-cyan [&_a:hover]:underline [&_small]:text-muted-foreground [&_small]:text-sm [&_small]:block [&_small]:mb-6"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
