import { Link } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart, Check } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { toast } from "sonner";

interface CourseCardProps {
  product: Product;
  index?: number;
}

export default function CourseCard({ product, index = 0 }: CourseCardProps) {
  const { locale, t } = useLocale();
  const { addItem, isInCart } = useCart();
  const inCart = isInCart(product.id);

  const title = locale === "ru" ? product.title_ru : product.title_en;
  const desc = locale === "ru" ? product.shortDescription_ru : product.shortDescription_en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden glass-card gradient-border hover:shadow-lg transition-all duration-300"
      style={{ transitionProperty: "transform, box-shadow" }}
      whileHover={{ y: -4 }}
    >
      {/* Cover Image */}
      <Link href={`/courses/${product.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={product.coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Price badge */}
          <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg text-sm font-bold text-white" style={{ background: "linear-gradient(135deg, oklch(0.7 0.18 230), oklch(0.65 0.25 300))" }}>
            {formatPrice(product.price, product.currency)}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link href={`/courses/${product.slug}`} className="block">
          <h3 className="text-lg font-bold font-[Outfit] text-foreground mb-2 group-hover:text-neon-cyan transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {desc}
          </p>
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-md text-[11px] font-medium text-neon-cyan/80 bg-neon-cyan/10 border border-neon-cyan/15">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/courses/${product.slug}`}
            className="flex-1 btn-gradient text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white"
          >
            {t.courses.buyNow}
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!inCart) {
                addItem(product.id);
                toast.success(t.courses.added);
              }
            }}
            disabled={inCart}
            className={`p-2.5 rounded-lg border transition-all ${
              inCart
                ? "border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan"
                : "border-border/50 text-muted-foreground hover:text-foreground hover:border-neon-cyan/30 hover:bg-neon-cyan/5"
            }`}
            aria-label={inCart ? t.courses.added : t.courses.addToCart}
          >
            {inCart ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
