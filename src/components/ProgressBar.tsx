'use client';

import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-2xl shadow-black/20">
      <div className="flex justify-between items-center mb-4">
        <span className="text-foreground font-medium">
          Question {current} of {total}
        </span>
        <span className="text-primary font-semibold">{percentage}%</span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2 bg-muted/50" 
      />
    </div>
  );
}
