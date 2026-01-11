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
    <Card className="bg-card/80 backdrop-blur-xl border-border/50 shadow-2xl shadow-black/20">
      <CardHeader>
        <CardTitle className="text-foreground">Profil RIASEC Kamu</CardTitle>
        <CardDescription>
          Holland Code:{' '}
          <span className="font-bold text-primary">{hollandCode.join('')}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Bar Chart */}
        <div className="space-y-4">
          {categories.map((cat) => (
            <div key={cat} className="space-y-2">
              <div className="flex items-center gap-3">
                <div
                  style={{ backgroundColor: RIASEC_COLORS[cat] }}
                  className="text-white font-bold w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-lg"
                >
                  {cat}
                </div>
                <span className="text-sm font-medium flex-1 text-foreground">
                  {RIASEC_LABELS[cat]}
                </span>
                <span className="text-sm text-muted-foreground w-12 text-right font-mono">
                  {percentages[cat]}%
                </span>
              </div>
              <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden">
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
        <div className="pt-4 border-t border-border/50">
          <h4 className="text-sm font-semibold text-muted-foreground mb-3">
            Top 3 Karakteristik Kamu:
          </h4>
          <div className="flex flex-wrap gap-2">
            {hollandCode.map((cat, index) => (
              <Badge
                key={cat}
                style={{ backgroundColor: RIASEC_COLORS[cat] }}
                className="text-white shadow-lg"
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
