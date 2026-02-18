/**
 * Shopping cart page
 */
import { Link } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";
import { useCart } from "@/contexts/CartContext";
import { getProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export default function Cart() {
  const { locale, t } = useLocale();
  const { items, removeItem } = useCart();
  const allProducts = getProducts();

  const cartProducts = items
    .map(item => allProducts.find(p => p.id === item.productId))
    .filter(Boolean) as typeof allProducts;

  const total = cartProducts.reduce((sum, p) => sum + p.price, 0);

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
            <span className="gradient-text">{t.cart.title}</span>
            {cartProducts.length > 0 && (
              <span className="text-muted-foreground text-lg font-normal ml-3">
                ({cartProducts.length} {cartProducts.length === 1 ? t.cart.item : t.cart.items})
              </span>
            )}
          </motion.h1>

          {cartProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">{t.cart.empty}</h2>
              <p className="text-muted-foreground mb-6">{t.cart.emptyDesc}</p>
              <Link
                href="/courses"
                className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              >
                {t.cart.browseCourses}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {cartProducts.map((product, i) => {
                const title = locale === "ru" ? product.title_ru : product.title_en;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card rounded-xl p-4 gradient-border flex items-center gap-4"
                  >
                    <Link href={`/courses/${product.slug}`} className="shrink-0">
                      <img
                        src={product.coverImage}
                        alt={title}
                        className="w-20 h-14 sm:w-28 sm:h-20 object-cover rounded-lg"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link href={`/courses/${product.slug}`} className="block">
                        <h3 className="text-sm sm:text-base font-semibold text-foreground truncate hover:text-neon-cyan transition-colors">{title}</h3>
                      </Link>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {product.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded text-neon-cyan/60 bg-neon-cyan/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-base font-bold font-[Outfit] text-foreground">
                        {formatPrice(product.price, product.currency)}
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="mt-1 inline-flex items-center gap-1 text-xs text-destructive/70 hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                        {t.cart.remove}
                      </button>
                    </div>
                  </motion.div>
                );
              })}

              {/* Total & Checkout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: cartProducts.length * 0.05 }}
                className="glass-card rounded-xl p-6 gradient-border mt-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold text-foreground">{t.cart.total}</span>
                  <span className="text-2xl font-bold font-[Outfit] gradient-text">
                    {formatPrice(total, "RUB")}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  className="btn-gradient w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white"
                >
                  {t.cart.checkout}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
