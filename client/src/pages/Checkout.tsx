/**
 * Checkout page — product is identified by slug in URL (/checkout/:slug)
 * Can be shared directly as a payment link
 */
import { useState } from "react";
import { Link, useRoute } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Lock } from "lucide-react";

export default function Checkout() {
  const { locale, t } = useLocale();
  const [, params] = useRoute("/checkout/:slug");
  const product = params?.slug ? getProductBySlug(params.slug) : undefined;

  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold font-[Outfit] text-foreground mb-4">
              {locale === "ru" ? "Продукт не найден" : "Product not found"}
            </h1>
            <Link href="/courses" className="text-neon-cyan hover:underline">
              {t.nav.courses}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const title = locale === "ru" ? product.title_ru : product.title_en;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!email.trim()) errs.email = t.checkout.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = t.checkout.emailInvalid;
    if (!agreed) errs.agree = t.checkout.agreeRequired;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setProcessing(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20 pb-16 flex items-center">
          <div className="container max-w-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl p-8 gradient-border text-center"
            >
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "linear-gradient(135deg, oklch(0.7 0.18 230 / 20%), oklch(0.65 0.25 300 / 20%))" }}>
                <CheckCircle2 className="w-8 h-8 text-neon-cyan" />
              </div>
              <h1 className="text-2xl font-bold font-[Outfit] text-foreground mb-3">{t.checkout.successTitle}</h1>
              <p className="text-muted-foreground leading-relaxed mb-8">{t.checkout.successMessage}</p>
              <Link
                href="/"
                className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              >
                {t.checkout.backToHome}
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 pb-16">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t.nav.courses}
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold font-[Outfit] mb-8"
          >
            <span className="gradient-text">{t.checkout.title}</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 glass-card rounded-xl p-6 gradient-border space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t.checkout.email} *</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t.checkout.emailPlaceholder}
                  className="w-full px-4 py-2.5 rounded-lg bg-input/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-neon-cyan/40 transition-colors"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-border/50 accent-neon-cyan"
                  id="agree"
                />
                <label htmlFor="agree" className="text-sm text-muted-foreground leading-relaxed">
                  {t.checkout.agree}
                </label>
              </div>
              {errors.agree && <p className="text-xs text-destructive">{errors.agree}</p>}

              <button
                type="submit"
                disabled={processing}
                className="w-full btn-gradient flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white disabled:opacity-60"
              >
                <Lock className="w-4 h-4" />
                {processing ? t.checkout.processing : `${t.checkout.pay} ${formatPrice(product.price, "RUB")}`}
              </button>
            </motion.form>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 glass-card rounded-xl p-6 gradient-border h-fit"
            >
              <h2 className="text-lg font-bold font-[Outfit] text-foreground mb-4">{t.checkout.orderSummary}</h2>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <img src={product.coverImage} alt={title} className="w-12 h-8 object-cover rounded" />
                  <span className="flex-1 text-sm text-foreground truncate">{title}</span>
                  <span className="text-sm font-semibold text-foreground shrink-0">{formatPrice(product.price, product.currency)}</span>
                </div>
              </div>
              <div className="border-t border-border/30 pt-4 flex items-center justify-between">
                <span className="font-semibold text-foreground">{t.cart.total}</span>
                <span className="text-xl font-bold font-[Outfit] gradient-text">{formatPrice(product.price, "RUB")}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
