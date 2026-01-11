import Link from 'next/link';
import LightRays from '@/components/LightRays';
import { RIASEC_LABELS, RIASEC_COLORS, RIASECCategory } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ClipboardList, BarChart3, Building2, Sparkles } from 'lucide-react';
import FloatingLines from '@/components/FloatingLines';
import LightPillar from '@/components/LightPillar';

export default function Home() {
  const categories: RIASECCategory[] = ['R', 'I', 'A', 'S', 'E', 'C'];

  return (
    <div className="min-h-screen bg-background">
      {/* FloatingLines Background */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      
      {/* Gradient overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none z-[1]" />

      {/* Hero Section */}
      <section className="relative overflow-hidden z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            {/* Logo/Badge */}
            <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm border border-border/50 bg-card/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              Berdasarkan Holland RIASEC Theory
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Temukan Jurusan ITB
              <br />
              <span className="text-white from-primary via-accent to-primary">
                yang Tepat Untukmu
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Jawab 30 pertanyaan singkat dan temukan jurusan dari{' '}
              <strong className="text-foreground">50 program studi ITB</strong> yang paling sesuai dengan
              minat dan kepribadianmu.
            </p>

            {/* CTA Button */}
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/25">
              <Link href="/quiz">
                Mulai Test Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-border/50">
                <div className="text-3xl font-bold text-foreground">30</div>
                <div className="text-sm text-muted-foreground">Pertanyaan</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-border/50">
                <div className="text-3xl font-bold text-foreground">50</div>
                <div className="text-sm text-muted-foreground">Jurusan ITB</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-border/50">
                <div className="text-3xl font-bold text-foreground">~5</div>
                <div className="text-sm text-muted-foreground">Menit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RIASEC Section */}
      <section className="relative py-16 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Apa itu Holland RIASEC?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Teori yang dikembangkan oleh John Holland untuk mengidentifikasi 6
              tipe kepribadian dan mencocokkannya dengan karir yang sesuai.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Card
                key={cat}
                className="bg-card/30 backdrop-blur-md border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 text-center group overflow-hidden relative"
              >
                <CardContent className="pt-6 pb-6">
                  <div
                    style={{ 
                      backgroundColor: RIASEC_COLORS[cat],
                      boxShadow: `0 8px 32px ${RIASEC_COLORS[cat]}40`
                    }}
                    className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                  >
                    {cat}
                  </div>
                  <h3 className="font-semibold text-foreground text-sm tracking-wide">
                    {RIASEC_LABELS[cat]}
                  </h3>
                </CardContent>
                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${RIASEC_COLORS[cat]}, transparent)` }}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-16 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cara Kerja
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary mx-auto mb-4 flex items-center justify-center">
                  <ClipboardList className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  1. Jawab Pertanyaan
                </h3>
                <p className="text-muted-foreground text-sm">
                  30 pertanyaan singkat tentang minat dan preferensimu
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 text-accent mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  2. Lihat Profil RIASEC
                </h3>
                <p className="text-muted-foreground text-sm">
                  Dapatkan Holland Code dan visualisasi karakteristikmu
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-2xl bg-chart-4/20 text-chart-4 mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  3. Rekomendasi Jurusan
                </h3>
                <p className="text-muted-foreground text-sm">
                  Top 10 jurusan ITB yang cocok dengan profilmu
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-border/50 z-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>
            © Keluarga Mahasiswa Jambi ITB
          </p>
        </div>
      </footer>
    </div>
  );
}
