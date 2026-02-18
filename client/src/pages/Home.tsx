/**
 * Home page — Dark Luxe Gradient design
 * Hero section with generated banner, How It Works, Featured Courses, About preview
 */
import { Link } from "wouter";
import { useLocale } from "@/contexts/LocaleContext";
import { getProducts } from "@/data/products";
import CourseCard from "@/components/CourseCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Zap, CreditCard, Mail } from "lucide-react";

const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332980412/extRBTLqMYwoqhXL.jpg";

const HOW_IT_WORKS_BG = "https://private-us-east-1.manuscdn.com/sessionFile/xoSobbe3pklqVx34MP9XtT/sandbox/GVtC5HmyYqZULKQWuD7PsO-img-3_1771355600000_na1fn_aG93LWl0LXdvcmtzLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveG9Tb2JiZTNwa2xxVngzNE1QOVh0VC9zYW5kYm94L0dWdEM1SG15WXFaVUxLUVd1RDdQc08taW1nLTNfMTc3MTM1NTYwMDAwMF9uYTFmbl9hRzkzTFdsMExYZHZjbXR6TFdKbi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VlKE3MmmslD1S8Ec1zs2O7GE6T-Ce9C9VVXVRF-NVTykAc5CVxTx4fq6uEJl7dqZsK-dz6R4bXsabZSE0g65CpcpysA~GKGC~tXl~qoCQh--gKrAePiCUPHzYidwdkPFza1yV71L6eLNUJjGlP0SsFBXWlH47hsGc14W5xtRUmCRrArnEMr3ucTCgHoM37bwGqfGzkmZ80JDb1Iioa9530D6-AJ4MPZEMPstY52G7NGR0M6MCvzC~i~WzM-kjupTbR5TZDpW5VRNxq31oc781ScNldJgZK5CGPIsuJLg~zRAaiAcWhlwfSbml-mdzo6TRclcqvcrEPaP5WMZvSTyCg__";

export default function Home() {
  const { t } = useLocale();
  const products = getProducts();
  const featured = products.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" style={{ objectPosition: 'center 10%' }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.13 0.02 270 / 85%) 0%, oklch(0.13 0.02 270 / 50%) 50%, oklch(0.13 0.02 270 / 70%) 100%)" }} />
        </div>
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, oklch(0.65 0.25 300 / 40%), transparent 70%)" }} />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, oklch(0.82 0.17 192 / 40%), transparent 70%)" }} />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[Outfit] leading-tight mb-6"
            >
              <span className="gradient-text">{t.hero.title}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/courses"
                className="btn-gradient inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white"
              >
                {t.hero.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-foreground border border-border/50 hover:border-neon-cyan/30 hover:bg-accent/30 transition-all"
              >
                <PlayCircle className="w-4 h-4" />
                {t.hero.secondary}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HOW_IT_WORKS_BG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-[Outfit] text-center mb-16"
          >
            <span className="gradient-text">{t.howItWorks.title}</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: t.howItWorks.step1title, desc: t.howItWorks.step1desc, num: "01" },
              { icon: CreditCard, title: t.howItWorks.step2title, desc: t.howItWorks.step2desc, num: "02" },
              { icon: Mail, title: t.howItWorks.step3title, desc: t.howItWorks.step3desc, num: "03" },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card rounded-xl p-8 gradient-border text-center"
              >
                <div className="text-5xl font-extrabold font-[Outfit] gradient-text mb-4 opacity-30">{step.num}</div>
                <div className="w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center" style={{ background: "linear-gradient(135deg, oklch(0.7 0.18 230 / 20%), oklch(0.65 0.25 300 / 20%))" }}>
                  <step.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="text-lg font-bold font-[Outfit] text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold font-[Outfit]"
            >
              <span className="gradient-text">{t.featured.title}</span>
            </motion.h2>
            <Link
              href="/courses"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-neon-cyan transition-colors"
            >
              {t.featured.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product, i) => (
              <CourseCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-medium text-neon-cyan"
            >
              {t.featured.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
