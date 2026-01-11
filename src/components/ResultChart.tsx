'use client';

import {
  RIASECScores,
  RIASECCategory,
  RIASEC_LABELS,
  RIASEC_COLORS,
} from '@/lib/types';
import { getScorePercentages } from '@/lib/scoring';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ResultChartProps {
  scores: RIASECScores;
  hollandCode: RIASECCategory[];
}

export default function ResultChart({ scores, hollandCode }: ResultChartProps) {
  const percentages = getScorePercentages(scores);
  const categories: RIASECCategory[] = ['R', 'I', 'A', 'S', 'E', 'C'];

  return (
    <Card className="bg-card/80 backdrop-blur-xl border-border/50 shadow-2xl shadow-black/20 w-full">
      <CardHeader className="px-3 sm:px-6">
        <CardTitle className="text-foreground text-base sm:text-lg">Profil RIASEC Kamu</CardTitle>
        <CardDescription>
          Holland Code:{' '}
          <span className="font-bold text-primary">{hollandCode.join('')}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6 px-3 sm:px-6">
        {/* Bar Chart */}
        <div className="space-y-3 sm:space-y-4">
          {categories.map((cat) => (
            <div key={cat} className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  style={{ backgroundColor: RIASEC_COLORS[cat] }}
                  className="text-white font-bold w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm shadow-lg shrink-0"
                >
                  {cat}
                </div>
                <span className="text-xs sm:text-sm font-medium flex-1 text-foreground truncate">
                  {RIASEC_LABELS[cat]}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground w-10 sm:w-12 text-right font-mono shrink-0">
                  {percentages[cat]}%
                </span>
              </div>
              <div className="relative h-2.5 sm:h-3 bg-muted/30 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{ 
                    width: `${percentages[cat]}%`,
                    backgroundColor: RIASEC_COLORS[cat],
                    boxShadow: `0 0 12px ${RIASEC_COLORS[cat]}50`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="pt-3 sm:pt-4 border-t border-border/50">
          <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-2 sm:mb-3">
            Top 3 Karakteristik Kamu:
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {hollandCode.map((cat, index) => (
              <Badge
                key={cat}
                style={{ backgroundColor: RIASEC_COLORS[cat] }}
                className="text-white shadow-lg text-xs"
              >
                #{index + 1} {RIASEC_LABELS[cat]}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
