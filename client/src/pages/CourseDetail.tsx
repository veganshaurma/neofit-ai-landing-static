/**
 * Course detail page with full description, includes, and buy/cart actions
 */
import { useRoute, Link, useLocation } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, BarChart3, CheckCircle2 } from "lucide-react";

export default function CourseDetail() {
  const [, params] = useRoute("/courses/:slug");
  const [, setLocation] = useLocation();
  const { locale, t } = useLocale();
  const product = params?.slug ? getProductBySlug(params.slug) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold font-[Outfit] text-foreground mb-4">Course not found</h1>
            <Link href="/courses" className="text-neon-cyan hover:underline">
              {t.courseDetail.backToCourses}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const title = locale === "ru" ? product.title_ru : product.title_en;
  const desc = locale === "ru" ? product.fullDescription_ru : product.fullDescription_en;
  const includes = locale === "ru" ? product.includes_ru : product.includes;

  const handleBuyNow = () => {
    setLocation(`/checkout/${product.slug}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 pb-16">
        <div className="container">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t.courseDetail.backToCourses}
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Cover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl overflow-hidden mb-8"
              >
                <img
                  src={product.coverImage}
                  alt={title}
                  className="w-full aspect-video object-cover"
                />
              </motion.div>

              {/* Title & Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h1 className="text-3xl sm:text-4xl font-bold font-[Outfit] text-foreground mb-4">{title}</h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-lg text-xs font-medium text-neon-cyan/80 bg-neon-cyan/10 border border-neon-cyan/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-invert max-w-none mb-8"
              >
                {desc.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-foreground/80 leading-relaxed mb-4">
                    {paragraph.split("**").map((part, j) =>
                      j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part
                    )}
                  </p>
                ))}
              </motion.div>

              {/* What you'll get */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card rounded-xl p-6 gradient-border"
              >
                <h2 className="text-xl font-bold font-[Outfit] text-foreground mb-4">{t.courseDetail.whatYouGet}</h2>
                <ul className="space-y-3">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-neon-cyan shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="glass-card rounded-xl p-6 gradient-border sticky top-24"
              >
                {/* Price */}
                <div className="text-3xl font-bold font-[Outfit] gradient-text mb-6">
                  {formatPrice(product.price, product.currency)}
                </div>

                {/* Meta */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{t.courseDetail.duration}:</span>
                    <span className="text-foreground">{product.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <BarChart3 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{t.courseDetail.level}:</span>
                    <span className="text-foreground">{product.level}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button
                    onClick={handleBuyNow}
                    className="w-full btn-gradient px-6 py-3 rounded-xl text-base font-semibold text-white"
                  >
                    {t.courseDetail.buyNow}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
