import { Question } from './types';

// 30 RIASEC Questions - 5 per category
export const questions: Question[] = [
  // ============ REALISTIC (R) - Questions 1-5 ============
  {
    id: 1,
    category: 'R',
    text: 'Saya suka membuat atau memperbaiki sesuatu dengan tangan',
  },
  {
    id: 2,
    category: 'R',
    text: 'Saya lebih suka bekerja dengan benda/mesin daripada ide abstrak',
  },
  {
    id: 3,
    category: 'R',
    text: 'Saya tertarik dengan pekerjaan teknis dan praktis',
  },
  {
    id: 4,
    category: 'R',
    text: 'Saya nyaman dengan pekerjaan yang melibatkan tools/equipment',
  },
  {
    id: 5,
    category: 'R',
    text: 'Saya suka outdoor activities dan kegiatan fisik',
  },

  // ============ INVESTIGATIVE (I) - Questions 6-10 ============
  {
    id: 6,
    category: 'I',
    text: 'Saya suka memecahkan masalah matematika dan logika',
  },
  {
    id: 7,
    category: 'I',
    text: 'Saya tertarik dengan penelitian dan eksperimen',
  },
  {
    id: 8,
    category: 'I',
    text: 'Saya suka menganalisis data dan mencari pola',
  },
  {
    id: 9,
    category: 'I',
    text: 'Saya penasaran tentang bagaimana sesuatu bekerja (how things work)',
  },
  {
    id: 10,
    category: 'I',
    text: 'Saya suka membaca dan mempelajari teori/konsep baru',
  },

  // ============ ARTISTIC (A) - Questions 11-15 ============
  {
    id: 11,
    category: 'A',
    text: 'Saya suka membuat sesuatu yang indah atau artistik',
  },
  {
    id: 12,
    category: 'A',
    text: 'Saya memiliki kemampuan kreatif yang kuat',
  },
  {
    id: 13,
    category: 'A',
    text: 'Saya tertarik dengan desain, musik, atau seni',
  },
  {
    id: 14,
    category: 'A',
    text: 'Saya suka mengekspresikan diri melalui karya kreatif',
  },
  {
    id: 15,
    category: 'A',
    text: 'Saya percaya bahwa estetika dan kreativitas itu penting',
  },

  // ============ SOCIAL (S) - Questions 16-20 ============
  {
    id: 16,
    category: 'S',
    text: 'Saya suka bekerja dengan dan membantu orang lain',
  },
  {
    id: 17,
    category: 'S',
    text: 'Saya memiliki keterampilan komunikasi yang baik',
  },
  {
    id: 18,
    category: 'S',
    text: 'Saya tertarik mengajar atau membimbing orang lain',
  },
  {
    id: 19,
    category: 'S',
    text: 'Saya peduli dengan kesejahteraan masyarakat',
  },
  {
    id: 20,
    category: 'S',
    text: 'Saya suka teamwork dan kolaborasi',
  },

  // ============ ENTERPRISING (E) - Questions 21-25 ============
  {
    id: 21,
    category: 'E',
    text: 'Saya suka memimpin dan membuat keputusan',
  },
  {
    id: 22,
    category: 'E',
    text: 'Saya tertarik dengan bisnis dan entrepreneurship',
  },
  {
    id: 23,
    category: 'E',
    text: 'Saya mampu mempengaruhi dan membujuk orang lain',
  },
  {
    id: 24,
    category: 'E',
    text: 'Saya ambisius dan suka tantangan',
  },
  {
    id: 25,
    category: 'E',
    text: 'Saya suka mengambil inisiatif dan tanggung jawab',
  },

  // ============ CONVENTIONAL (C) - Questions 26-30 ============
  {
    id: 26,
    category: 'C',
    text: 'Saya suka pekerjaan yang terstruktur dan terorganisir',
  },
  {
    id: 27,
    category: 'C',
    text: 'Saya detail-oriented dan presisi dalam pekerjaan',
  },
  {
    id: 28,
    category: 'C',
    text: 'Saya suka mengikuti aturan dan standar yang jelas',
  },
  {
    id: 29,
    category: 'C',
    text: 'Saya nyaman dengan pekerjaan administratif dan sistematis',
  },
  {
    id: 30,
    category: 'C',
    text: 'Saya menghargai efisiensi dan sistem yang teratur',
  },
];

export const QUESTIONS_PER_CATEGORY = 5;
export const TOTAL_QUESTIONS = questions.length;
