'use client';

import { MajorRecommendation, RIASECCategory, RIASEC_COLORS } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FACULTY_LOGOS } from '@/lib/faculty-logos';
import Image from 'next/image';

interface MajorCardProps {
  recommendation: MajorRecommendation;
  rank: number;
}

export default function MajorCard({ recommendation, rank }: MajorCardProps) {
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
    <Card className="bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10 overflow-hidden p-0">
      {/* Faculty Logo Header */}
      {FACULTY_LOGOS[major.facultyCode] && (
        <div className="relative h-36 w-full">
          <Image
            src={FACULTY_LOGOS[major.facultyCode]}
            alt={`${major.faculty} logo`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-black/20" />
          {/* Rank Badge overlaid on image */}
          <div
            className={`absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${getRankStyle()}`}
          >
            {rank}
          </div>
          {/* Faculty code badge on image */}
          <div className="absolute bottom-3 left-3">
            <span className="text-xs font-bold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
              {major.facultyCode}
            </span>
          </div>
        </div>
      )}
      <CardContent className={FACULTY_LOGOS[major.facultyCode] ? "p-4" : "p-5"}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Rank Badge - only show if no faculty logo */}
            {!FACULTY_LOGOS[major.facultyCode] && (
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 mb-3 ${getRankStyle()}`}
              >
                {rank}
              </div>
            )}

            {/* Major Info */}
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <Badge variant="secondary" className="font-mono bg-muted/50 border-border/50">
                {major.code}
              </Badge>
              <span className="text-sm font-medium text-primary truncate">
                {major.faculty}
              </span>
            </div>
            <h3 className="font-semibold text-foreground text-lg leading-tight">
              {major.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {major.description}
            </p>

            {/* RIASEC Profile */}
            <div className="flex items-center gap-1.5 mt-3">
              {topRiasec.map((cat) => (
                <div
                  key={cat}
                  style={{ backgroundColor: RIASEC_COLORS[cat] }}
                  className="text-white text-xs font-bold w-6 h-6 rounded-md flex items-center justify-center shadow-md"
                >
                  {cat}
                </div>
              ))}
            </div>

            {/* Career Prospects */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {major.careerProspects.slice(0, 3).map((career) => (
                <Badge key={career} variant="outline" className="text-xs border-border/50 text-muted-foreground">
                  {career}
                </Badge>
              ))}
            </div>
          </div>

          {/* Match Score */}
          <div className="text-right shrink-0">
            <div
              className={`text-2xl font-bold ${
                matchPercentage >= 80
                  ? 'text-emerald-400'
                  : matchPercentage >= 60
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {matchPercentage}%
            </div>
            <div className="text-xs text-muted-foreground">Match</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
