/**
 * Admin page — Product JSON editor
 * Accessible at /admin, allows editing products via localStorage
 */
import { useState, useEffect } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { getProducts, saveProducts } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Save, RotateCcw } from "lucide-react";

export default function Admin() {
  const { t } = useLocale();
  const [json, setJson] = useState("");

  useEffect(() => {
    const products = getProducts();
    setJson(JSON.stringify(products, null, 2));
  }, []);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(json);
      if (!Array.isArray(parsed)) throw new Error("Must be an array");
      saveProducts(parsed);
      toast.success(t.admin.saved);
    } catch {
      toast.error(t.admin.invalid);
    }
  };

  const handleReset = () => {
    localStorage.removeItem("arseniy_kim_products");
    const products = getProducts();
    setJson(JSON.stringify(products, null, 2));
    toast.success(t.admin.saved);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 pb-16">
        <div className="container max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold font-[Outfit] mb-2"
          >
            <span className="gradient-text">{t.admin.title}</span>
          </motion.h1>
          <p className="text-muted-foreground mb-6">{t.admin.description}</p>

          <div className="glass-card rounded-xl p-4 gradient-border mb-4">
            <textarea
              value={json}
              onChange={e => setJson(e.target.value)}
              className="w-full h-[60vh] bg-transparent text-foreground text-sm font-mono resize-none focus:outline-none"
              spellCheck={false}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="btn-gradient flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
            >
              <Save className="w-4 h-4" />
              {t.admin.save}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-foreground border border-border/50 hover:border-neon-cyan/30 hover:bg-accent/30 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              {t.admin.reset}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
