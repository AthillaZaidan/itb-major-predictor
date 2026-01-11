'use client';

import { Question } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
        <Badge variant="secondary" className="w-fit mb-6 text-xs font-medium">
          Question {questionNumber} of {totalQuestions}
        </Badge>
        <h2 className="text-xl font-semibold text-foreground leading-relaxed">
          {question.text}
        </h2>
      </CardHeader>
      <CardContent className="pt-4 pb-8">
        {/* Scale Slider UI */}
        <div className="relative">
          {/* Track Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted-foreground/30 -translate-y-1/2" />
          
          {/* Scale Points */}
          <div className="relative flex justify-between items-center">
            {SCALE_OPTIONS.map((value) => (
              <button
                key={value}
                onClick={() => onAnswer(value)}
                className="group relative z-10 focus:outline-none"
              >
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    currentAnswer === value
                      ? 'bg-primary border-primary scale-125 shadow-lg shadow-primary/30'
                      : 'bg-background border-muted-foreground/50 hover:border-primary/70 hover:scale-110'
                  }`}
                >
                  {currentAnswer === value && (
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Scale Labels */}
        <div className="flex justify-between mt-6 text-sm">
          <span className="text-muted-foreground max-w-[120px] md:max-w-[160px]">
            Sangat Tidak Setuju
          </span>
          <span className="text-muted-foreground max-w-[120px] md:max-w-[160px] text-right">
            Sangat Setuju
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
