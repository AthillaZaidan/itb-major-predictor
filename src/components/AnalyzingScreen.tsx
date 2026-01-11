'use client';

import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Brain, Sparkles, Target, Lightbulb, Rocket } from 'lucide-react';

const ANALYSIS_STEPS = [
  { text: 'Menganalisis kepribadian RIASEC kamu...', icon: Brain, duration: 1500 },
  { text: 'Mencocokkan dengan profil jurusan ITB...', icon: Target, duration: 1500 },
  { text: 'Menemukan potensi tersembunyi...', icon: Lightbulb, duration: 1200 },
  { text: 'Menyusun rekomendasi terbaik...', icon: Sparkles, duration: 1000 },
  { text: 'Hampir selesai, siapkan dirimu!', icon: Rocket, duration: 800 },
];

interface AnalyzingScreenProps {
  onComplete: () => void;
}

export default function AnalyzingScreen({ onComplete }: AnalyzingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate total duration
    const totalDuration = ANALYSIS_STEPS.reduce((acc, step) => acc + step.duration, 0);
    let elapsed = 0;

    // Progress through each step
    const stepTimers: NodeJS.Timeout[] = [];
    
    ANALYSIS_STEPS.forEach((step, index) => {
      const timer = setTimeout(() => {
        setCurrentStep(index);
      }, elapsed);
      stepTimers.push(timer);
      elapsed += step.duration;
    });

    // Smooth progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / (totalDuration / 50));
      });
    }, 50);

    // Complete after all steps
    const completeTimer = setTimeout(() => {
      onComplete();
    }, totalDuration + 500);

    return () => {
      stepTimers.forEach(clearTimeout);
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const CurrentIcon = ANALYSIS_STEPS[currentStep]?.icon || Brain;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 animate-pulse delay-150" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/15 animate-pulse delay-300" />
      </div>

      <div className="relative z-10 max-w-md w-full mx-4 space-y-8">
        {/* Animated Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center animate-pulse">
              <CurrentIcon className="w-12 h-12 text-primary animate-bounce" />
            </div>
            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            Menganalisis Hasil
          </h2>
          <p className="text-muted-foreground text-sm">
            Tunggu sebentar ya...
          </p>
        </div>

        {/* Current Step Text */}
        <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-foreground font-medium flex items-center gap-2">
              <CurrentIcon className="w-5 h-5 text-primary" />
              {ANALYSIS_STEPS[currentStep]?.text}
            </p>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
          
          {/* Progress Bar */}
          <Progress value={progress} className="h-2" />
          
          {/* Step indicator */}
          <div className="flex justify-center gap-2">
            {ANALYSIS_STEPS.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= currentStep 
                    ? 'bg-primary scale-100' 
                    : 'bg-muted scale-75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Fun fact */}
        <p className="text-center text-xs text-muted-foreground">
          💡 Tahukah kamu? ITB memiliki 12 Fakultas/Sekolah dengan 50+ program studi!
        </p>
      </div>
    </div>
  );
}
