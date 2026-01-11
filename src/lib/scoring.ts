import {
  RIASECCategory,
  RIASECScores,
  QuizAnswer,
  QuizResult,
  MajorRecommendation,
  Major,
} from './types';
import { questions, QUESTIONS_PER_CATEGORY } from './questions';
import { majors } from './majors';

// Maximum possible score per category (5 questions × 5 max score)
const MAX_SCORE_PER_CATEGORY = QUESTIONS_PER_CATEGORY * 5;

/**
 * Calculate RIASEC scores from quiz answers
 */
export function calculateRIASECScores(answers: QuizAnswer[]): RIASECScores {
  const scores: RIASECScores = {
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  };

  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    if (question) {
      scores[question.category] += answer.value;
    }
  });

  return scores;
}

/**
 * Get Holland Code (top 3 RIASEC categories)
 */
export function getHollandCode(scores: RIASECScores): RIASECCategory[] {
  const sortedCategories = (
    Object.entries(scores) as [RIASECCategory, number][]
  )
    .sort((a, b) => b[1] - a[1])
    .map(([category]) => category);

  return sortedCategories.slice(0, 3);
}

/**
 * Calculate match score between user's RIASEC profile and a major's profile
 * Uses weighted dot product scoring
 */
export function calculateMajorMatchScore(
  userScores: RIASECScores,
  major: Major
): number {
  const categories: RIASECCategory[] = ['R', 'I', 'A', 'S', 'E', 'C'];

  // Normalize user scores to 0-5 range (they're already 5-25, so divide by 5)
  const normalizedUserScores: RIASECScores = { ...userScores };
  categories.forEach((cat) => {
    normalizedUserScores[cat] = userScores[cat] / QUESTIONS_PER_CATEGORY;
  });

  // Calculate weighted dot product
  let matchScore = 0;
  let maxPossibleScore = 0;

  categories.forEach((cat) => {
    matchScore += normalizedUserScores[cat] * major.riasecProfile[cat];
    maxPossibleScore += 5 * major.riasecProfile[cat]; // Max user score (5) × major weight
  });

  // Normalize to 0-100 percentage
  return (matchScore / maxPossibleScore) * 100;
}

/**
 * Get major recommendations sorted by match score
 */
export function getMajorRecommendations(
  scores: RIASECScores,
  limit: number = 10
): MajorRecommendation[] {
  const recommendations: MajorRecommendation[] = majors.map((major) => {
    const matchScore = calculateMajorMatchScore(scores, major);
    return {
      major,
      matchScore,
      matchPercentage: Math.round(matchScore),
    };
  });

  // Sort by match score (descending)
  recommendations.sort((a, b) => b.matchScore - a.matchScore);

  return recommendations.slice(0, limit);
}

/**
 * Get full quiz result
 */
export function getQuizResult(answers: QuizAnswer[]): QuizResult {
  const scores = calculateRIASECScores(answers);
  const hollandCode = getHollandCode(scores);
  const recommendations = getMajorRecommendations(scores);

  return {
    scores,
    hollandCode,
    recommendations,
  };
}

/**
 * Get score percentage for visualization
 */
export function getScorePercentages(
  scores: RIASECScores
): Record<RIASECCategory, number> {
  const percentages: Record<RIASECCategory, number> = {
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  };

  (Object.keys(scores) as RIASECCategory[]).forEach((cat) => {
    percentages[cat] = Math.round((scores[cat] / MAX_SCORE_PER_CATEGORY) * 100);
  });

  return percentages;
}

/**
 * Get interpretation text for Holland Code
 */
export function getHollandCodeInterpretation(
  hollandCode: RIASECCategory[]
): string {
  const interpretations: Record<RIASECCategory, string> = {
    R: 'praktis dan hands-on',
    I: 'analitis dan penelitian',
    A: 'kreatif dan ekspresif',
    S: 'sosial dan membantu',
    E: 'enterprising dan leadership',
    C: 'terorganisir dan sistematis',
  };

  const traits = hollandCode.map((code) => interpretations[code]);

  if (traits.length === 3) {
    return `Kamu memiliki kecenderungan yang ${traits[0]}, ${traits[1]}, dan ${traits[2]}.`;
  }

  return `Kamu memiliki kecenderungan yang ${traits.join(' dan ')}.`;
}
