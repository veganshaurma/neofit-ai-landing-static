/**
 * Neofit AI — Landing page
 * Sections: Hero · Not ChatGPT · Features · How It Works · Pricing · Audience · Trust · Disclaimer · Final CTA
 */
import { useLocale } from "@/contexts/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Dumbbell,
  Utensils,
  Target,
  CheckCircle,
  Send,
  Shield,
  Clock,
  Zap,
  CreditCard,
  MessageSquare,
} from "lucide-react";

export const TELEGRAM_BOT_URL = "https://t.me/neofit_ai_bot";

const HERO_IMG =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332980412/extRBTLqMYwoqhXL.jpg";

const TRUST_IMG = "/arseniy-trust.jpg";

const PRICING_ROWS_RU = [
  { packs: 1, credits: "500 000", price: "2 499 ₽" },
  { packs: 3, credits: "1 500 000", price: "7 497 ₽" },
  { packs: 5, credits: "2 500 000", price: "12 495 ₽" },
  { packs: 10, credits: "5 000 000", price: "24 990 ₽" },
];

const PRICING_ROWS_EN = [
  { packs: 1, credits: "500 000", price: "$29" },
  { packs: 3, credits: "1 500 000", price: "$87" },
  { packs: 5, credits: "2 500 000", price: "$145" },
  { packs: 10, credits: "5 000 000", price: "$290" },
];

const AUDIENCE_EMOJIS = ["🏋️", "🔄", "💡", "📊"];

export default function Home() {
  const { t, locale } = useLocale();
  const l = t.landing;
  const PRICING_ROWS = locale === "ru" ? PRICING_ROWS_RU : PRICING_ROWS_EN;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ── 1. HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Arseniy Kim"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 10%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.13 0.02 270 / 92%) 0%, oklch(0.13 0.02 270 / 55%) 50%, oklch(0.13 0.02 270 / 80%) 100%)",
            }}
          />
        </div>
        {/* Decorative orbs */}
        <div
          className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.25 300 / 40%), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.82 0.17 192 / 40%), transparent 70%)",
          }}
        />

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            {/* Bot badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: "oklch(0.7 0.18 230 / 15%)",
                border: "1px solid oklch(0.7 0.18 230 / 30%)",
              }}
            >
              <Bot className="w-4 h-4 text-neon-cyan" />
              <span className="text-neon-cyan">Telegram Bot</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[Outfit] leading-tight mb-6"
            >
              <span className="gradient-text">{l.hero.title}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed"
            >
              {l.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white"
              >
                {l.hero.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. NOT JUST CHATGPT ── */}
      <section id="features" className="py-24 overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-[Outfit] mb-4">
              <span className="gradient-text">{l.notChatGPT.title}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {l.notChatGPT.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card rounded-xl overflow-hidden gradient-border">
              {/* Header row */}
              <div className="grid grid-cols-3 border-b border-border/30">
                <div className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide" />
                <div className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide text-center border-x border-border/20">
                  {l.notChatGPT.regular}
                </div>
                <div
                  className="p-4 text-xs font-semibold uppercase tracking-wide text-center"
                  style={{ color: "oklch(0.82 0.17 192)" }}
                >
                  Neofit AI
                </div>
              </div>

              {l.notChatGPT.rows.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 transition-colors hover:bg-accent/10 ${
                    i < l.notChatGPT.rows.length - 1
                      ? "border-b border-border/20"
                      : ""
                  }`}
                >
                  <div className="p-4 text-sm font-medium text-foreground/80">
                    {row.feature}
                  </div>
                  <div className="p-4 text-sm text-muted-foreground text-center border-x border-border/20">
                    {row.regular}
                  </div>
                  <div
                    className="p-4 text-sm text-center font-medium"
                    style={{ color: "oklch(0.82 0.17 192)" }}
                  >
                    <div className="flex items-start justify-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                      <span>{row.neofit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. FEATURES ── */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.65 0.25 300 / 5%), transparent 70%)",
          }}
        />
        <div className="container relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-[Outfit] text-center mb-16"
          >
            <span className="gradient-text">{l.features.title}</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Dumbbell,
                data: l.features.workout,
                color: "oklch(0.82 0.17 192)",
                bg: "oklch(0.82 0.17 192 / 15%)",
              },
              {
                icon: Target,
                data: l.features.technique,
                color: "oklch(0.65 0.25 300)",
                bg: "oklch(0.65 0.25 300 / 15%)",
              },
              {
                icon: Utensils,
                data: l.features.nutrition,
                color: "oklch(0.7 0.22 340)",
                bg: "oklch(0.7 0.22 340 / 15%)",
              },
            ].map(({ icon: Icon, data, color, bg }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-xl p-8 gradient-border"
              >
                <div
                  className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: bg }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-xl font-bold font-[Outfit] text-foreground mb-4">
                  {data.title}
                </h3>
                <ul className="space-y-2">
                  {data.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, oklch(0.7 0.18 230 / 5%), transparent 60%)",
          }}
        />
        <div className="container relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-[Outfit] text-center mb-16"
          >
            <span className="gradient-text">{l.howItWorks.title}</span>
          </motion.h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {l.howItWorks.steps.map((step, i) => {
                const StepIcons = [Bot, Send, CreditCard, Zap, MessageSquare];
                const StepIcon = StepIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card rounded-xl p-6 text-center gradient-border relative"
                  >
                    <div className="text-4xl font-extrabold font-[Outfit] gradient-text mb-3 opacity-25">
                      {step.num}
                    </div>
                    <div
                      className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.7 0.18 230 / 20%), oklch(0.65 0.25 300 / 20%))",
                      }}
                    >
                      <StepIcon className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <h3 className="text-sm font-bold font-[Outfit] text-foreground mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PRICING ── */}
      <section id="pricing" className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-[Outfit] mb-4">
              <span className="gradient-text">{l.pricing.title}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <div className="glass-card rounded-xl overflow-hidden gradient-border mb-4">
              {/* Table header */}
              <div className="grid grid-cols-3 border-b border-border/30 bg-accent/20">
                <div className="p-4 text-xs font-semibold text-foreground uppercase tracking-wide text-center">
                  {l.pricing.headerPacks}
                </div>
                <div className="p-4 text-xs font-semibold text-foreground uppercase tracking-wide text-center border-x border-border/20">
                  {l.pricing.headerCredits}
                </div>
                <div className="p-4 text-xs font-semibold text-foreground uppercase tracking-wide text-center">
                  {l.pricing.headerPrice}
                </div>
              </div>

              {PRICING_ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 transition-colors hover:bg-accent/10 ${
                    i < PRICING_ROWS.length - 1 ? "border-b border-border/20" : ""
                  } ${i === 0 ? "bg-accent/5" : ""}`}
                >
                  <div className="p-4 text-sm font-semibold text-foreground text-center">
                    {row.packs}{" "}
                    <span className="text-muted-foreground font-normal text-xs">
                      {l.pricing.packUnit}
                    </span>
                  </div>
                  <div className="p-4 text-sm font-bold text-center border-x border-border/20 text-neon-cyan">
                    {row.credits}
                  </div>
                  <div className="p-4 text-sm font-bold text-foreground text-center">
                    {row.price}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground text-sm mb-1">
              {l.pricing.subtitle}
            </p>
            <p className="text-center text-muted-foreground text-xs mb-8">
              {l.pricing.validity} · {l.pricing.note}
            </p>

            <div className="text-center">
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white"
              >
                <Send className="w-4 h-4" />
                {l.pricing.cta}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. AUDIENCE ── */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, oklch(0.82 0.17 192 / 4%), transparent 60%)",
          }}
        />
        <div className="container relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-[Outfit] text-center mb-16"
          >
            <span className="gradient-text">{l.audience.title}</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {l.audience.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 gradient-border text-center"
              >
                <div className="text-3xl mb-3">{AUDIENCE_EMOJIS[i]}</div>
                <h3 className="text-base font-bold font-[Outfit] text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TRUST ── */}
      <section id="trust" className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-card rounded-2xl p-8 sm:p-12 gradient-border"
          >
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              <div className="flex-shrink-0">
                <div
                  className="w-28 h-28 rounded-2xl overflow-hidden"
                  style={{
                    border: "2px solid oklch(0.82 0.17 192 / 30%)",
                  }}
                >
                  <img
                    src={TRUST_IMG}
                    alt="Arseniy Kim"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                  style={{
                    background: "oklch(0.82 0.17 192 / 12%)",
                    color: "oklch(0.82 0.17 192)",
                    border: "1px solid oklch(0.82 0.17 192 / 30%)",
                  }}
                >
                  <Shield className="w-3 h-3" />
                  {l.trust.badge}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-[Outfit] mb-4">
                  <span className="gradient-text">{l.trust.title}</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {l.trust.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. DISCLAIMER ── */}
      <section className="py-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto rounded-xl p-5 text-center"
            style={{
              background: "oklch(0.17 0.025 270 / 60%)",
              border: "1px solid oklch(0.4 0.04 270 / 20%)",
            }}
          >
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground/60">
                {l.disclaimer.title}:{" "}
              </span>
              {l.disclaimer.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[600px] h-[400px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, oklch(0.65 0.25 300), transparent 70%)",
            }}
          />
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[Outfit] mb-8">
              <span className="gradient-text">{l.finalCta.title}</span>
            </h2>

            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-2 px-10 py-4 rounded-xl text-lg font-semibold text-white mb-5"
            >
              <Send className="w-5 h-5" />
              {l.finalCta.cta}
            </a>

            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {l.finalCta.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
