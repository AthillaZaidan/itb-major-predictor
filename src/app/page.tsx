'use client';

import Link from 'next/link';
import LightRays from '@/components/LightRays';
import { RIASEC_LABELS, RIASEC_COLORS, RIASECCategory } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ClipboardList, BarChart3, Building2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const categories: RIASECCategory[] = ['R', 'I', 'A', 'S', 'E', 'C'];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Optimized LightRays for mobile */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={isMobile ? 1.2 : 1.5}
          lightSpread={isMobile ? 1.0 : 0.8}
          rayLength={isMobile ? 1.5 : 1.2}
          followMouse={!isMobile}
          mouseInfluence={isMobile ? 0 : 0.1}
          noiseAmount={isMobile ? 0.15 : 0.1}
          distortion={isMobile ? 0.08 : 0.05}
          fadeDistance={isMobile ? 0.8 : 1.0}
          saturation={isMobile ? 1.2 : 1.0}
          className="custom-rays"
        />
      </div>
      
      {/* Gradient overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none z-[1]" />

      {/* Hero Section */}
      <section className="relative overflow-hidden z-10 min-h-screen flex items-center justify-center">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center">
            {/* Logo/Badge */}
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-6 md:mb-8 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm border border-border/50 bg-card/50 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary" />
                Berdasarkan Holland RIASEC Theory
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-2"
              variants={itemVariants}
            >
              Temukan Jurusan ITB
              <br />
              <motion.span 
                className="text-white from-primary via-accent to-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                yang Tepat Untukmu
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4"
              variants={itemVariants}
            >
              Jawab 30 pertanyaan singkat dan temukan jurusan dari{' '}
              <strong className="text-foreground">50 program studi ITB</strong> yang paling sesuai dengan
              minat dan kepribadianmu.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/25">
                <Link href="/quiz">
                  Mulai Test Sekarang
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 md:mt-12 text-center px-4"
              variants={containerVariants}
            >
              {[
                { value: '30', label: 'Pertanyaan' },
                { value: '50', label: 'Jurusan ITB' },
                { value: '~5', label: 'Menit' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  className="bg-card/50 backdrop-blur-sm rounded-2xl px-5 md:px-6 py-3 md:py-4 border border-border/50 min-w-[100px]"
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  custom={i}
                >
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* RIASEC Section */}
      <section className="relative py-12 md:py-16 z-10">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-8 md:mb-12" variants={itemVariants}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Apa itu Holland RIASEC?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Teori yang dikembangkan oleh John Holland untuk mengidentifikasi 6
              tipe kepribadian dan mencocokkannya dengan karir yang sesuai.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
            variants={containerVariants}
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                custom={i}
              >
                <Card
                  className="bg-card/30 backdrop-blur-md border-border/30 hover:border-primary/30 transition-colors duration-300 hover:shadow-xl hover:shadow-primary/20 text-center group overflow-hidden relative h-full"
                >
                  <CardContent className="pt-4 md:pt-6 pb-4 md:pb-6">
                    <motion.div
                      style={{ 
                        backgroundColor: RIASEC_COLORS[cat],
                        boxShadow: `0 8px 32px ${RIASEC_COLORS[cat]}40`
                      }}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl mx-auto mb-3 md:mb-4 flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {cat}
                    </motion.div>
                    <h3 className="font-semibold text-foreground text-xs md:text-sm tracking-wide">
                      {RIASEC_LABELS[cat]}
                    </h3>
                  </CardContent>
                  {/* Gradient overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${RIASEC_COLORS[cat]}, transparent)` }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="relative py-12 md:py-16 z-10">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-8 md:mb-12" variants={itemVariants}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Cara Kerja
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {[
              { icon: ClipboardList, title: '1. Jawab Pertanyaan', desc: '30 pertanyaan singkat tentang minat dan preferensimu', colorClass: 'bg-primary/20 text-primary' },
              { icon: BarChart3, title: '2. Lihat Profil RIASEC', desc: 'Dapatkan Holland Code dan visualisasi karakteristikmu', colorClass: 'bg-accent/20 text-accent' },
              { icon: Building2, title: '3. Rekomendasi Jurusan', desc: 'Top 10 jurusan ITB yang cocok dengan profilmu', colorClass: 'bg-chart-4/20 text-chart-4' },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                custom={i}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center hover:border-primary/50 transition-colors h-full">
                  <CardContent className="pt-5 md:pt-6 pb-5 md:pb-6">
                    <motion.div 
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${step.colorClass} mx-auto mb-3 md:mb-4 flex items-center justify-center`}
                      whileHover={{ rotate: 5 }}
                    >
                      <step.icon className="w-7 h-7 md:w-8 md:h-8" />
                    </motion.div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm px-2">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="relative py-6 md:py-8 border-t border-border/50 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center text-muted-foreground text-xs md:text-sm">
          <p>
            © Keluarga Mahasiswa Jambi ITB
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
