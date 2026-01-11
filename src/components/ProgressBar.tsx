'use client';

import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <motion.div 
      className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-2xl shadow-black/20"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-4">
        <motion.span 
          className="text-foreground font-medium"
          key={current}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          Question {current} of {total}
        </motion.span>
        <motion.span 
          className="text-primary font-semibold"
          key={`percentage-${percentage}`}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="relative h-2 bg-muted/50 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ 
            duration: 0.5, 
            ease: [0.25, 0.46, 0.45, 0.94] as const
          }}
        />
      </div>
    </motion.div>
  );
}
