'use client';

import { MajorRecommendation, RIASECCategory, RIASEC_COLORS } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FACULTY_LOGOS } from '@/lib/faculty-logos';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MajorCardProps {
  recommendation: MajorRecommendation;
  rank: number;
  index?: number;
}

export default function MajorCard({ recommendation, rank, index = 0 }: MajorCardProps) {
  const { major, matchPercentage } = recommendation;

  // Get top 3 RIASEC for this major
  const topRiasec = (
    Object.entries(major.riasecProfile) as [RIASECCategory, number][]
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([cat]) => cat);

  const getRankStyle = () => {
    if (rank === 1) return 'bg-gradient-to-br from-yellow-400 to-amber-500 text-yellow-900 shadow-lg shadow-yellow-500/30';
    if (rank === 2) return 'bg-gradient-to-br from-slate-300 to-slate-400 text-slate-800 shadow-lg shadow-slate-400/30';
    if (rank === 3) return 'bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/30';
    return 'bg-muted text-muted-foreground';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <Card className="bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-colors hover:shadow-lg hover:shadow-primary/10 overflow-hidden p-0">
        {/* Faculty Logo Header */}
        {FACULTY_LOGOS[major.facultyCode] && (
          <motion.div 
            className="relative h-36 w-full overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={FACULTY_LOGOS[major.facultyCode]}
              alt={`${major.faculty} logo`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-black/20" />
            {/* Rank Badge overlaid on image */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
              className={`absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${getRankStyle()}`}
            >
              {rank}
            </motion.div>
            {/* Faculty code badge on image */}
            <motion.div 
              className="absolute bottom-3 left-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <span className="text-xs font-bold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
                {major.facultyCode}
              </span>
            </motion.div>
          </motion.div>
        )}
        <CardContent className={FACULTY_LOGOS[major.facultyCode] ? "p-3 sm:p-4" : "p-3 sm:p-5"}>
          <div className="flex items-start justify-between gap-2 sm:gap-4">
            <div className="flex-1 min-w-0 overflow-hidden">
              {/* Rank Badge - only show if no faculty logo */}
              {!FACULTY_LOGOS[major.facultyCode] && (
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 mb-3 ${getRankStyle()}`}
                >
                  {rank}
                </motion.div>
              )}

              {/* Major Info */}
              <motion.div 
                className="flex items-center gap-2 mb-1 flex-wrap overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Badge variant="secondary" className="font-mono bg-muted/50 border-border/50 shrink-0">
                  {major.code}
                </Badge>
                <span className="text-xs sm:text-sm font-medium text-primary truncate max-w-[150px] sm:max-w-none">
                  {major.faculty}
                </span>
              </motion.div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg leading-tight line-clamp-2">
                {major.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
                {major.description}
              </p>

              {/* RIASEC Profile */}
              <div className="flex items-center gap-1.5 mt-3">
                {topRiasec.map((cat, i) => (
                  <motion.div
                    key={cat}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    style={{ backgroundColor: RIASEC_COLORS[cat] }}
                    className="text-white text-xs font-bold w-6 h-6 rounded-md flex items-center justify-center shadow-md"
                  >
                    {cat}
                  </motion.div>
                ))}
              </div>

              {/* Career Prospects */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {major.careerProspects.slice(0, 3).map((career, i) => (
                  <motion.div
                    key={career}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 + i * 0.05 }}
                  >
                    <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                      {career}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Match Score */}
            <motion.div 
              className="text-right shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
            >
              <motion.div
                className={`text-xl sm:text-2xl font-bold ${
                  matchPercentage >= 80
                    ? 'text-emerald-400'
                    : matchPercentage >= 60
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {matchPercentage}%
              </motion.div>
              <div className="text-xs text-muted-foreground">Match</div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
