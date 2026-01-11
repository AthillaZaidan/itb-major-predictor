'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { questions, TOTAL_QUESTIONS } from '@/lib/questions';
import { QuizAnswer } from '@/lib/types';
import ProgressBar from '@/components/ProgressBar';
import QuestionCard from '@/components/QuestionCard';
import AnalyzingScreen from '@/components/AnalyzingScreen';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAnalyzing, setShowAnalyzing] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

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
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Navigate to next question
  const handleNext = () => {
    // Check if current question is answered
    const currentAnswer = getCurrentAnswer();
    if (currentAnswer === null) {
      alert('Silakan jawab pertanyaan ini terlebih dahulu!');
      return;
    }
    
    if (currentIndex < TOTAL_QUESTIONS - 1) {
      setDirection(1);
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

    // Show analyzing screen
    setShowAnalyzing(true);
  };

  // Handle analysis complete - navigate to results
  const handleAnalysisComplete = () => {
    router.push('/results');
  };

  // Check if all questions are answered
  const isComplete = answers.length === TOTAL_QUESTIONS;
  const isLastQuestion = currentIndex === TOTAL_QUESTIONS - 1;
  const isCurrentAnswered = getCurrentAnswer() !== null;

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  // Show analyzing screen when submitting
  if (showAnalyzing) {
    return <AnalyzingScreen onComplete={handleAnalysisComplete} />;
  }

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      {/* Main Content */}
      <main className="relative max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Link>
          </Button>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ProgressBar current={currentIndex + 1} total={TOTAL_QUESTIONS} />
        </motion.div>

        {/* Question Card with AnimatePresence for transitions */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <QuestionCard
              question={currentQuestion}
              currentAnswer={getCurrentAnswer()}
              onAnswer={handleAnswer}
              questionNumber={currentIndex + 1}
              totalQuestions={TOTAL_QUESTIONS}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <motion.div 
          className="flex items-center justify-between pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div whileHover={{ x: -3 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="ghost"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="gap-2 text-muted-foreground hover:text-foreground disabled:opacity-30"
            >
              <ArrowLeft className="w-4 h-4" />
              Sebelumnya
            </Button>
          </motion.div>

          {isLastQuestion ? (
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
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
            </motion.div>
          ) : (
            <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="ghost"
                onClick={handleNext}
                disabled={!isCurrentAnswered}
                className="gap-2 text-primary hover:text-primary hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Selanjutnya
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </main>
    </motion.div>
  );
}
