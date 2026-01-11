'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <motion.div 
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/15"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-md w-full mx-4 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Animated Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <motion.div 
              className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CurrentIcon className="w-12 h-12 text-primary" />
                </motion.div>
              </AnimatePresence>
            </motion.div>
            {/* Orbiting dots */}
            <motion.div 
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
            </motion.div>
            <motion.div 
              className="absolute inset-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
            </motion.div>
          </div>
        </div>

        {/* Title */}
        <motion.div 
          className="text-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground">
            Menganalisis Hasil
          </h2>
          <p className="text-muted-foreground text-sm">
            Tunggu sebentar ya...
          </p>
        </motion.div>

        {/* Current Step Text */}
        <motion.div 
          className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <AnimatePresence mode="wait">
              <motion.p 
                key={currentStep}
                className="text-foreground font-medium flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <CurrentIcon className="w-5 h-5 text-primary" />
                {ANALYSIS_STEPS[currentStep]?.text}
              </motion.p>
            </AnimatePresence>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>
          
          {/* Progress Bar */}
          <Progress value={progress} className="h-2" />
          
          {/* Step indicator */}
          <div className="flex justify-center gap-2">
            {ANALYSIS_STEPS.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index <= currentStep ? 'bg-primary' : 'bg-muted'
                }`}
                initial={{ scale: 0.75 }}
                animate={{ 
                  scale: index <= currentStep ? 1 : 0.75,
                  backgroundColor: index <= currentStep ? 'var(--primary)' : 'var(--muted)'
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Fun fact */}
        <motion.p 
          className="text-center text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          💡 Tahukah kamu? ITB memiliki 12 Fakultas/Sekolah dengan 50+ program studi!
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
