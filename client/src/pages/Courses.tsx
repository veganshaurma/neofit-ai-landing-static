/**
 * Courses catalog page with search, filter, sort
 */
import { useState, useMemo } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { getProducts } from "@/data/products";
import CourseCard from "@/components/CourseCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const COURSES_HERO = "https://private-us-east-1.manuscdn.com/sessionFile/xoSobbe3pklqVx34MP9XtT/sandbox/GVtC5HmyYqZULKQWuD7PsO-img-4_1771355613000_na1fn_Y291cnNlcy1oZXJv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveG9Tb2JiZTNwa2xxVngzNE1QOVh0VC9zYW5kYm94L0dWdEM1SG15WXFaVUxLUVd1RDdQc08taW1nLTRfMTc3MTM1NTYxMzAwMF9uYTFmbl9ZMjkxY25ObGN5MW9aWEp2LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PO1aNo0NniddjprHaj0jgIqmtQi8KvwAR~r9XX2sWPdGuG0s6ojDuAYnGkxXfsoNzGxMbq3XlLDZMLnWRLZp48JJTXATMp0eFioWNJcruH6Htgwk1Pmpd-8RA6qIBp3LKpptzWF79ozNVA9oqJ~9JkngnFtpjSoVl3dpWJ4F9Akbp~c9LzAB8vPsj~EsOdyZuZQC3PR5b60ReUEpaRViVHH7OGahxxY9Zg8CFheQWnUQ-QkvbFgyldXo4wRHzKf34liiLRmUBD0ZQHtpApZhqUugPObkft6WVdq6eAocC3VkORNcdsdSUDughMeG8EHacjntKlaxeP13ntmTBBWr8Q__";

type SortOption = "default" | "price-asc" | "price-desc";

export default function Courses() {
  const { locale, t } = useLocale();
  const allProducts = getProducts();
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [sort, setSort] = useState<SortOption>("default");
  const [showFilters, setShowFilters] = useState(false);

  // Collect unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    allProducts.forEach(p => p.tags.forEach(t => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [allProducts]);

  const filtered = useMemo(() => {
    let result = allProducts;

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p => {
        const title = locale === "ru" ? p.title_ru : p.title_en;
        const desc = locale === "ru" ? p.shortDescription_ru : p.shortDescription_en;
        return title.toLowerCase().includes(q) || desc.toLowerCase().includes(q) || p.tags.some(t => t.includes(q));
      });
    }

    // Tag filter
    if (selectedTag) {
      result = result.filter(p => p.tags.includes(selectedTag));
    }

    // Sort
    if (sort === "price-asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [allProducts, search, selectedTag, sort, locale]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img src={COURSES_HERO} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, oklch(0.13 0.02 270 / 60%), oklch(0.13 0.02 270 / 90%))" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-bold font-[Outfit]"
              >
                <span className="gradient-text">{t.courses.title}</span>
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={t.courses.search}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-neon-cyan/40 transition-colors"
              />
            </div>

            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border/50 text-sm text-muted-foreground"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {t.courses.filter}
            </button>

            {/* Sort */}
            <select
              value={sort}
              onChange={e => setSort(e.target.value as SortOption)}
              className="px-4 py-2.5 rounded-lg bg-card border border-border/50 text-foreground text-sm focus:outline-none focus:border-neon-cyan/40 transition-colors"
            >
              <option value="default">{t.courses.sortDefault}</option>
              <option value="price-asc">{t.courses.sortPriceAsc}</option>
              <option value="price-desc">{t.courses.sortPriceDesc}</option>
            </select>
          </div>

          {/* Tags */}
          <div className={`flex flex-wrap gap-2 mb-8 ${showFilters ? "" : "hidden sm:flex"}`}>
            <button
              onClick={() => setSelectedTag("")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                !selectedTag
                  ? "bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30"
                  : "bg-card border border-border/30 text-muted-foreground hover:text-foreground hover:border-border/60"
              }`}
            >
              {locale === "ru" ? "Все" : "All"}
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedTag === tag
                    ? "bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30"
                    : "bg-card border border-border/30 text-muted-foreground hover:text-foreground hover:border-border/60"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, i) => (
                <CourseCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">{t.courses.noResults}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
