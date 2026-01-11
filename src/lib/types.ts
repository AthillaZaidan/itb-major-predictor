// RIASEC Categories
export type RIASECCategory = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export const RIASEC_LABELS: Record<RIASECCategory, string> = {
  R: 'Realistic',
  I: 'Investigative',
  A: 'Artistic',
  S: 'Social',
  E: 'Enterprising',
  C: 'Conventional',
};

export const RIASEC_DESCRIPTIONS: Record<RIASECCategory, string> = {
  R: 'Praktis, hands-on, suka bekerja dengan benda/mesin',
  I: 'Analitik, penelitian, problem-solving, suka logika dan sains',
  A: 'Kreatif, ekspresif, imajinatif, suka seni dan desain',
  S: 'Interpersonal, suka membantu dan bekerja dengan orang lain',
  E: 'Kepemimpinan, persuasi, ambisi, suka bisnis dan memimpin',
  C: 'Teratur, detail-oriented, suka struktur dan organisasi',
};

export const RIASEC_COLORS: Record<RIASECCategory, string> = {
  R: '#ff6b6b', // coral red - warm and practical
  I: '#4dabf7', // sky blue - analytical and calm
  A: '#b197fc', // soft purple - creative and artistic
  S: '#51cf66', // fresh green - social and friendly
  E: '#ffa94d', // warm orange - energetic and ambitious
  C: '#748ffc', // periwinkle - organized and reliable
};

// Question interface
export interface Question {
  id: number;
  category: RIASECCategory;
  text: string;
}

// Major/Jurusan interface
export interface Major {
  code: string;
  name: string;
  faculty: string;
  facultyCode: string;
  description: string;
  careerProspects: string[];
  riasecProfile: Record<RIASECCategory, number>;
}

// RIASEC Scores
export type RIASECScores = Record<RIASECCategory, number>;

// Quiz Answer
export interface QuizAnswer {
  questionId: number;
  value: number; // 1-5 Likert scale
}

// Quiz State
export interface QuizState {
  currentQuestion: number;
  answers: QuizAnswer[];
  isCompleted: boolean;
}

// Result
export interface QuizResult {
  scores: RIASECScores;
  hollandCode: RIASECCategory[];
  recommendations: MajorRecommendation[];
}

// Major Recommendation with match score
export interface MajorRecommendation {
  major: Major;
  matchScore: number;
  matchPercentage: number;
}
