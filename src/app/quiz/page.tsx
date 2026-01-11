'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { questions, TOTAL_QUESTIONS } from '@/lib/questions';
import { QuizAnswer } from '@/lib/types';
import ProgressBar from '@/components/ProgressBar';
import QuestionCard from '@/components/QuestionCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = questions[currentIndex];

  // Get current answer for this question
  const getCurrentAnswer = (): number | null => {
    const answer = answers.find((a) => a.questionId === currentQuestion.id);
    return answer ? answer.value : null;
  };

  // Handle answer selection
  const handleAnswer = (value: number) => {
    setAnswers((prev) => {
      const existing = prev.findIndex(
        (a) => a.questionId === currentQuestion.id
      );
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = { questionId: currentQuestion.id, value };
        return updated;
      }
      return [...prev, { questionId: currentQuestion.id, value }];
    });
  };

  // Navigate to previous question
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Navigate to next question
  const handleNext = () => {
    if (currentIndex < TOTAL_QUESTIONS - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Submit quiz
  const handleSubmit = () => {
    if (answers.length < TOTAL_QUESTIONS) {
      const unanswered = TOTAL_QUESTIONS - answers.length;
      alert(`Masih ada ${unanswered} pertanyaan yang belum dijawab!`);
      return;
    }

    setIsSubmitting(true);

    // Store answers in localStorage
    localStorage.setItem('quizAnswers', JSON.stringify(answers));

    // Navigate to results
    router.push('/results');
  };

  // Check if all questions are answered
  const isComplete = answers.length === TOTAL_QUESTIONS;
  const isLastQuestion = currentIndex === TOTAL_QUESTIONS - 1;

  return (
    <div className="min-h-screen bg-background">
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      {/* Main Content */}
      <main className="relative max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>
        </Button>

        {/* Progress Bar */}
        <ProgressBar current={currentIndex + 1} total={TOTAL_QUESTIONS} />

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          currentAnswer={getCurrentAnswer()}
          onAnswer={handleAnswer}
          questionNumber={currentIndex + 1}
          totalQuestions={TOTAL_QUESTIONS}
        />

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="gap-2 text-muted-foreground hover:text-foreground disabled:opacity-30"
          >
            <ArrowLeft className="w-4 h-4" />
            Sebelumnya
          </Button>

          {isLastQuestion ? (
            <Button
              onClick={handleSubmit}
              disabled={!isComplete || isSubmitting}
              className="gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/25 disabled:opacity-50 disabled:shadow-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Memproses...
                </>
              ) : (
                <>
                  Lihat Hasil
                  <Check className="w-4 h-4" />
                </>
              )}
            </Button>
          ) : (
            <Button
              variant="ghost"
              onClick={handleNext}
              className="gap-2 text-primary hover:text-primary hover:bg-primary/10"
            >
              Selanjutnya
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
