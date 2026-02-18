/**
 * About page
 */
import { useLocale } from "@/contexts/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FlaskConical, Users, Target } from "lucide-react";

const ABOUT_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332980412/QgNFDynaJhmGyHJl.jpg";

export default function About() {
  const { t } = useLocale();

  const values = [
    { icon: FlaskConical, title: t.about.value1, desc: t.about.value1desc },
    { icon: Users, title: t.about.value2, desc: t.about.value2desc },
    { icon: Target, title: t.about.value3, desc: t.about.value3desc },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 pb-16">
        <div className="container">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold font-[Outfit] mb-6">
                <span className="gradient-text">{t.about.title}</span>
              </h1>
              <p className="text-foreground/80 leading-relaxed text-lg">{t.about.bio}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl overflow-hidden"
            >
              <img src={ABOUT_IMG} alt="Arseniy Kim" className="w-full aspect-[3/4] object-top object-cover" />
            </motion.div>
          </div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 sm:p-12 gradient-border mb-20 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold font-[Outfit] mb-4">
              <span className="gradient-text">{t.about.mission}</span>
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">{t.about.missionText}</p>
          </motion.div>

          {/* Values */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold font-[Outfit] text-center mb-12"
            >
              <span className="gradient-text">{t.about.values}</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl p-6 gradient-border text-center"
                >
                  <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: "linear-gradient(135deg, oklch(0.7 0.18 230 / 20%), oklch(0.65 0.25 300 / 20%))" }}>
                    <val.icon className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <h3 className="text-lg font-bold font-[Outfit] text-foreground mb-2">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
