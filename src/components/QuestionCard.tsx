'use client';

import { Question } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface QuestionCardProps {
  question: Question;
  currentAnswer: number | null;
  onAnswer: (value: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

const SCALE_OPTIONS = [1, 2, 3, 4, 5];

export default function QuestionCard({
  question,
  currentAnswer,
  onAnswer,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  return (
    <Card className="bg-card/80 backdrop-blur-xl border-border/50 shadow-2xl shadow-black/20">
      <CardHeader className="pb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Badge variant="secondary" className="w-fit mb-6 text-xs font-medium">
            Question {questionNumber} of {totalQuestions}
          </Badge>
        </motion.div>
        <motion.h2 
          className="text-xl font-semibold text-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {question.text}
        </motion.h2>
      </CardHeader>
      <CardContent className="pt-4 pb-8">
        {/* Scale Slider UI */}
        <div className="relative">
          {/* Track Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted-foreground/30 -translate-y-1/2" />
          
          {/* Scale Points */}
          <div className="relative flex justify-between items-center">
            {SCALE_OPTIONS.map((value, index) => (
              <motion.button
                key={value}
                onClick={() => onAnswer(value)}
                className="group relative z-10 focus:outline-none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.2 + index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-8 h-8 md:w-7 md:h-7 rounded-full border-2 transition-colors duration-300 flex items-center justify-center ${
                    currentAnswer === value
                      ? 'bg-primary border-primary shadow-lg shadow-primary/30'
                      : 'bg-background border-muted-foreground/50 hover:border-primary/70'
                  }`}
                  animate={{
                    scale: currentAnswer === value ? 1.25 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {currentAnswer === value && (
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-primary-foreground"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                  )}
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Scale Labels */}
        <motion.div 
          className="flex justify-between mt-6 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <span className="text-muted-foreground">
            Sangat Tidak Setuju
          </span>
          <span className="text-muted-foreground text-right">
            Sangat Setuju
          </span>
        </motion.div>
      </CardContent>
    </Card>
  );
}
