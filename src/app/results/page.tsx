'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { QuizAnswer, QuizResult } from '@/lib/types';
import { getQuizResult, getHollandCodeInterpretation } from '@/lib/scoring';
import ResultChart from '@/components/ResultChart';
import MajorCard from '@/components/MajorCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  Share2,
  RefreshCw,
  CheckCircle,
  Info,
  Loader2,
} from 'lucide-react';

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showAllMajors, setShowAllMajors] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get answers from localStorage
    const storedAnswers = localStorage.getItem('quizAnswers');

    if (!storedAnswers) {
      // No answers found, redirect to quiz
      router.push('/quiz');
      return;
    }

    try {
      const answers: QuizAnswer[] = JSON.parse(storedAnswers);

      // Validate answers
      if (!Array.isArray(answers) || answers.length === 0) {
        router.push('/quiz');
        return;
      }

      // Calculate result
      const quizResult = getQuizResult(answers);
      setResult(quizResult);
    } catch {
      router.push('/quiz');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  // Handle retake quiz
  const handleRetake = () => {
    localStorage.removeItem('quizAnswers');
    router.push('/quiz');
  };

  // Handle share (copy to clipboard)
  const handleShare = async () => {
    if (!result) return;

    const shareText = `🎓 Hasil ITB Major Predictor

📊 Holland Code: ${result.hollandCode.join('')}

🏆 Top 5 Jurusan yang Cocok:
${result.recommendations
  .slice(0, 5)
  .map((r, i) => `${i + 1}. ${r.major.name} (${r.matchPercentage}% match)`)
  .join('\n')}

Coba juga di: [URL]`;

    try {
      await navigator.clipboard.writeText(shareText);
      alert('Hasil berhasil disalin ke clipboard!');
    } catch {
      alert('Gagal menyalin hasil');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="text-center relative">
          <Loader2 className="w-16 h-16 text-primary animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Menghitung hasil...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  const displayedMajors = showAllMajors
    ? result.recommendations
    : result.recommendations.slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      {/* Gradient overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      <div className="fixed top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative bg-card/50 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Beranda
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={handleShare} className="gap-2 text-muted-foreground hover:text-foreground">
              <Share2 className="w-4 h-4" />
              Bagikan
            </Button>
            <Button onClick={handleRetake} className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <RefreshCw className="w-4 h-4" />
              Ulangi Test
            </Button>
          </div>
        </div>
      </header>

      <main className="relative max-w-6xl mx-auto px-4 py-8">
        {/* Result Header */}
        <div className="text-center mb-12">
          <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 border-emerald-500/30 gap-2 mb-4">
            <CheckCircle className="w-4 h-4" />
            Test Selesai!
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hasil Analisis RIASEC Kamu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {getHollandCodeInterpretation(result.hollandCode)}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - RIASEC Chart */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <ResultChart
                scores={result.scores}
                hollandCode={result.hollandCode}
              />
            </div>
          </div>

          {/* Right Column - Major Recommendations */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                Rekomendasi Jurusan
              </h2>
              <Badge variant="secondary" className="bg-card/50 border-border/50">
                {result.recommendations.length} jurusan cocok
              </Badge>
            </div>

            <div className="space-y-4">
              {displayedMajors.map((recommendation, index) => (
                <MajorCard
                  key={recommendation.major.code}
                  recommendation={recommendation}
                  rank={index + 1}
                />
              ))}
            </div>

            {/* Show More Button */}
            {!showAllMajors && result.recommendations.length > 5 && (
              <Button
                variant="ghost"
                onClick={() => setShowAllMajors(true)}
                className="w-full mt-6 text-primary hover:text-primary hover:bg-primary/10"
              >
                Lihat {result.recommendations.length - 5} jurusan lainnya
              </Button>
            )}

            {showAllMajors && (
              <Button
                variant="ghost"
                onClick={() => setShowAllMajors(false)}
                className="w-full mt-6 text-muted-foreground"
              >
                Tampilkan lebih sedikit
              </Button>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="mt-16 bg-amber-500/10 border-amber-500/30">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="shrink-0">
                <Info className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-amber-300 mb-1">Catatan</h3>
                <p className="text-sm text-amber-200/80">
                  Hasil ini adalah rekomendasi berdasarkan Holland RIASEC Theory
                  dan bukan keputusan akhir. Gunakan sebagai referensi dan
                  pertimbangkan juga faktor lain seperti passion, prospek karir,
                  dan kemampuan akademik. Konsultasikan dengan guru BK atau
                  konselor karir untuk keputusan yang lebih matang.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="relative py-8 border-t border-border/50 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2026 ITB Major Predictor. Berdasarkan Holland RIASEC Theory.</p>
        </div>
      </footer>
    </div>
  );
}
