'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { QuizAnswer, QuizResult, RIASEC_LABELS, RIASEC_DESCRIPTIONS, RIASECCategory } from '@/lib/types';
import { getQuizResult, getHollandCodeInterpretation } from '@/lib/scoring';
import ResultChart from '@/components/ResultChart';
import MajorCard from '@/components/MajorCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft,
  Download,
  RefreshCw,
  CheckCircle,
  Info,
  Loader2,
} from 'lucide-react';
import jsPDF from 'jspdf';

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

  // Handle download PDF
  const handleDownloadPDF = () => {
    if (!result) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    let yPos = margin;

    // Helper function to add new page if needed
    const checkNewPage = (height: number) => {
      if (yPos + height > pageHeight - margin) {
        doc.addPage();
        yPos = margin;
        return true;
      }
      return false;
    };

    // Header
    doc.setFillColor(15, 23, 42); // Dark blue background
    doc.rect(0, 0, pageWidth, 50, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('ITB Major Predictor', pageWidth / 2, 25, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Hasil Analisis RIASEC', pageWidth / 2, 35, { align: 'center' });
    
    yPos = 65;

    // Holland Code Section
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Holland Code Kamu', margin, yPos);
    yPos += 12;

    // Holland Code badges
    const hollandCode = result.hollandCode;
    const codeColors: Record<RIASECCategory, [number, number, number]> = {
      R: [255, 107, 107],
      I: [77, 171, 247],
      A: [177, 151, 252],
      S: [81, 207, 102],
      E: [255, 169, 77],
      C: [116, 143, 252],
    };

    let xPos = margin;
    hollandCode.forEach((code) => {
      const color = codeColors[code];
      doc.setFillColor(color[0], color[1], color[2]);
      doc.roundedRect(xPos, yPos, 25, 25, 3, 3, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(code, xPos + 12.5, yPos + 16, { align: 'center' });
      xPos += 30;
    });
    yPos += 35;

    // Interpretation
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const interpretation = getHollandCodeInterpretation(result.hollandCode);
    const splitInterpretation = doc.splitTextToSize(interpretation, pageWidth - 2 * margin);
    doc.text(splitInterpretation, margin, yPos);
    yPos += splitInterpretation.length * 5 + 15;

    // RIASEC Scores Section
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Skor RIASEC', margin, yPos);
    yPos += 12;

    const categories: RIASECCategory[] = ['R', 'I', 'A', 'S', 'E', 'C'];
    const maxScore = Math.max(...Object.values(result.scores));

    categories.forEach((cat) => {
      const score = result.scores[cat];
      const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
      const color = codeColors[cat];

      // Category label
      doc.setTextColor(15, 23, 42);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`${cat} - ${RIASEC_LABELS[cat]}`, margin, yPos);
      
      // Score value
      doc.setTextColor(100, 116, 139);
      doc.setFont('helvetica', 'normal');
      doc.text(`${score}`, pageWidth - margin, yPos, { align: 'right' });
      yPos += 5;

      // Progress bar background
      doc.setFillColor(226, 232, 240);
      doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 6, 2, 2, 'F');

      // Progress bar fill
      const barWidth = ((pageWidth - 2 * margin) * percentage) / 100;
      if (barWidth > 0) {
        doc.setFillColor(color[0], color[1], color[2]);
        doc.roundedRect(margin, yPos, Math.max(barWidth, 4), 6, 2, 2, 'F');
      }
      yPos += 12;
    });

    yPos += 10;

    // Top 10 Recommendations Section
    checkNewPage(20);
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Top 10 Rekomendasi Jurusan', margin, yPos);
    yPos += 15;

    result.recommendations.slice(0, 10).forEach((rec, index) => {
      checkNewPage(35);

      // Rank badge
      const rankColor = index < 3 ? [16, 185, 129] : [100, 116, 139]; // Green for top 3
      doc.setFillColor(rankColor[0], rankColor[1], rankColor[2]);
      doc.circle(margin + 8, yPos + 8, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`${index + 1}`, margin + 8, yPos + 11, { align: 'center' });

      // Major name
      doc.setTextColor(15, 23, 42);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(rec.major.name, margin + 22, yPos + 6);

      // Faculty and match percentage
      doc.setTextColor(100, 116, 139);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text(`${rec.major.faculty}`, margin + 22, yPos + 14);
      
      // Match percentage badge
      doc.setFillColor(16, 185, 129, 0.2);
      const matchText = `${rec.matchPercentage}% Match`;
      const matchWidth = doc.getTextWidth(matchText) + 8;
      doc.setFillColor(220, 252, 231);
      doc.roundedRect(pageWidth - margin - matchWidth, yPos + 2, matchWidth, 12, 2, 2, 'F');
      doc.setTextColor(22, 163, 74);
      doc.setFontSize(9);
      doc.text(matchText, pageWidth - margin - matchWidth + 4, yPos + 10);

      yPos += 25;
    });

    // Footer
    checkNewPage(30);
    yPos = pageHeight - 25;
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, yPos - 10, pageWidth - margin, yPos - 10);
    
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Hasil ini berdasarkan Holland RIASEC Theory dan bukan keputusan akhir.', pageWidth / 2, yPos, { align: 'center' });
    doc.text(`Dibuat pada: ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}`, pageWidth / 2, yPos + 5, { align: 'center' });
    doc.text('© ITB Major Predictor - Keluarga Mahasiswa Jambi ITB', pageWidth / 2, yPos + 10, { align: 'center' });

    // Save PDF
    doc.save(`Hasil-RIASEC-${result.hollandCode.join('')}-${new Date().toISOString().split('T')[0]}.pdf`);
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
            <Button variant="ghost" onClick={handleDownloadPDF} className="gap-2 text-muted-foreground hover:text-foreground">
              <Download className="w-4 h-4" />
              Download Hasil
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
