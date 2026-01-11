import { Major } from './types';

// 50 ITB Majors with RIASEC Profiles
// Scale: 1 (rendah) - 5 (sangat tinggi)
export const majors: Major[] = [
  // ============ FITB - Fakultas Ilmu dan Teknologi Kebumian (4) ============
  {
    code: 'ME',
    name: 'Meteorologi',
    faculty: 'Fakultas Ilmu dan Teknologi Kebumian',
    facultyCode: 'FITB',
    description:
      'Program studi yang mempelajari atmosfer, cuaca, dan iklim untuk prediksi dan analisis fenomena meteorologi.',
    careerProspects: ['Meteorolog', 'Klimatolog', 'Peneliti Atmosfer', 'BMKG'],
    riasecProfile: { R: 3, I: 5, A: 1, S: 2, E: 2, C: 4 },
  },
  {
    code: 'OS',
    name: 'Oseanografi',
    faculty: 'Fakultas Ilmu dan Teknologi Kebumian',
    facultyCode: 'FITB',
    description:
      'Program studi yang mempelajari laut, arus, gelombang, dan ekosistem marine.',
    careerProspects: [
      'Oseanografer',
      'Peneliti Kelautan',
      'Konsultan Lingkungan',
    ],
    riasecProfile: { R: 4, I: 5, A: 1, S: 2, E: 2, C: 3 },
  },
  {
    code: 'GD',
    name: 'Teknik Geodesi dan Geomatika',
    faculty: 'Fakultas Ilmu dan Teknologi Kebumian',
    facultyCode: 'FITB',
    description:
      'Program studi yang mempelajari pengukuran dan pemetaan bumi menggunakan teknologi geospasial.',
    careerProspects: ['Surveyor', 'GIS Specialist', 'Remote Sensing Analyst'],
    riasecProfile: { R: 5, I: 4, A: 1, S: 2, E: 2, C: 4 },
  },
  {
    code: 'GL',
    name: 'Teknik Geologi',
    faculty: 'Fakultas Ilmu dan Teknologi Kebumian',
    facultyCode: 'FITB',
    description:
      'Program studi yang mempelajari struktur bumi, batuan, mineral, dan sumber daya alam.',
    careerProspects: [
      'Geologist',
      'Mining Consultant',
      'Oil & Gas Industry',
      'ESDM',
    ],
    riasecProfile: { R: 5, I: 4, A: 1, S: 2, E: 3, C: 3 },
  },

  // ============ FMIPA - Fakultas Matematika dan IPA (5) ============
  {
    code: 'AK',
    name: 'Aktuaria',
    faculty: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
    facultyCode: 'FMIPA',
    description:
      'Program studi yang menerapkan matematika dan statistik untuk menganalisis risiko finansial dan asuransi.',
    careerProspects: ['Actuary', 'Risk Analyst', 'Insurance Consultant'],
    riasecProfile: { R: 1, I: 5, A: 1, S: 2, E: 3, C: 5 },
  },
  {
    code: 'AS',
    name: 'Astronomi',
    faculty: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
    facultyCode: 'FMIPA',
    description:
      'Program studi yang mempelajari benda-benda langit, alam semesta, dan fenomena kosmik.',
    careerProspects: ['Astronomer', 'Researcher', 'Planetarium Staff', 'LAPAN'],
    riasecProfile: { R: 2, I: 5, A: 2, S: 2, E: 1, C: 3 },
  },
  {
    code: 'FI',
    name: 'Fisika',
    faculty: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
    facultyCode: 'FMIPA',
    description:
      'Program studi yang mempelajari hukum-hukum dasar alam dan fenomena fisis.',
    careerProspects: ['Physicist', 'Researcher', 'Data Scientist', 'Lecturer'],
    riasecProfile: { R: 3, I: 5, A: 1, S: 2, E: 1, C: 3 },
  },
  {
    code: 'KI',
    name: 'Kimia',
    faculty: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
    facultyCode: 'FMIPA',
    description:
      'Program studi yang mempelajari komposisi, struktur, dan reaksi materi.',
    careerProspects: ['Chemist', 'Lab Analyst', 'R&D Scientist', 'QC Engineer'],
    riasecProfile: { R: 4, I: 5, A: 1, S: 2, E: 1, C: 4 },
  },
  {
    code: 'MA',
    name: 'Matematika',
    faculty: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
    facultyCode: 'FMIPA',
    description:
      'Program studi yang mempelajari struktur, pola, dan hubungan kuantitatif secara abstrak.',
    careerProspects: [
      'Mathematician',
      'Data Scientist',
      'Quantitative Analyst',
      'Lecturer',
    ],
    riasecProfile: { R: 1, I: 5, A: 2, S: 2, E: 1, C: 4 },
  },

  // ============ FSRD - Fakultas Seni Rupa dan Desain (5) ============
  {
    code: 'DI',
    name: 'Desain Interior',
    faculty: 'Fakultas Seni Rupa dan Desain',
    facultyCode: 'FSRD',
    description:
      'Program studi yang mempelajari perancangan ruang interior untuk fungsi dan estetika.',
    careerProspects: [
      'Interior Designer',
      'Space Planner',
      'Furniture Designer',
    ],
    riasecProfile: { R: 3, I: 2, A: 5, S: 3, E: 3, C: 2 },
  },
  {
    code: 'DKV',
    name: 'Desain Komunikasi Visual',
    faculty: 'Fakultas Seni Rupa dan Desain',
    facultyCode: 'FSRD',
    description:
      'Program studi yang mempelajari komunikasi visual melalui desain grafis, ilustrasi, dan multimedia.',
    careerProspects: [
      'Graphic Designer',
      'UI/UX Designer',
      'Art Director',
      'Illustrator',
    ],
    riasecProfile: { R: 2, I: 2, A: 5, S: 3, E: 3, C: 2 },
  },
  {
    code: 'DP',
    name: 'Desain Produk',
    faculty: 'Fakultas Seni Rupa dan Desain',
    facultyCode: 'FSRD',
    description:
      'Program studi yang mempelajari perancangan produk industri dengan fokus pada fungsi dan bentuk.',
    careerProspects: [
      'Product Designer',
      'Industrial Designer',
      'UX Researcher',
    ],
    riasecProfile: { R: 4, I: 3, A: 5, S: 2, E: 3, C: 2 },
  },
  {
    code: 'KR',
    name: 'Kriya',
    faculty: 'Fakultas Seni Rupa dan Desain',
    facultyCode: 'FSRD',
    description:
      'Program studi yang mempelajari seni kerajinan dan pembuatan karya dengan keterampilan tangan.',
    careerProspects: ['Craft Artist', 'Artisan', 'Art Curator', 'Art Teacher'],
    riasecProfile: { R: 5, I: 2, A: 5, S: 2, E: 2, C: 2 },
  },
  {
    code: 'SR',
    name: 'Seni Rupa',
    faculty: 'Fakultas Seni Rupa dan Desain',
    facultyCode: 'FSRD',
    description:
      'Program studi yang mempelajari penciptaan karya seni visual seperti lukisan dan patung.',
    careerProspects: ['Fine Artist', 'Art Curator', 'Gallery Manager', 'Muralist'],
    riasecProfile: { R: 3, I: 2, A: 5, S: 2, E: 2, C: 1 },
  },

  // ============ FTMD - Fakultas Teknik Mesin dan Dirgantara (3) ============
  {
    code: 'AE',
    name: 'Teknik Dirgantara',
    faculty: 'Fakultas Teknik Mesin dan Dirgantara',
    facultyCode: 'FTMD',
    description:
      'Program studi yang mempelajari perancangan dan pengembangan pesawat terbang dan wahana antariksa.',
    careerProspects: [
      'Aerospace Engineer',
      'Aircraft Designer',
      'LAPAN',
      'Airline Industry',
    ],
    riasecProfile: { R: 5, I: 5, A: 2, S: 2, E: 3, C: 3 },
  },
  {
    code: 'MT',
    name: 'Teknik Material',
    faculty: 'Fakultas Teknik Mesin dan Dirgantara',
    facultyCode: 'FTMD',
    description:
      'Program studi yang mempelajari sifat, struktur, dan pengolahan material untuk aplikasi teknik.',
    careerProspects: [
      'Materials Engineer',
      'R&D Engineer',
      'Quality Engineer',
      'Metallurgist',
    ],
    riasecProfile: { R: 5, I: 5, A: 1, S: 2, E: 2, C: 3 },
  },
  {
    code: 'MS',
    name: 'Teknik Mesin',
    faculty: 'Fakultas Teknik Mesin dan Dirgantara',
    facultyCode: 'FTMD',
    description:
      'Program studi yang mempelajari perancangan, pembuatan, dan pemeliharaan sistem mekanik.',
    careerProspects: [
      'Mechanical Engineer',
      'Design Engineer',
      'Manufacturing Engineer',
    ],
    riasecProfile: { R: 5, I: 4, A: 2, S: 2, E: 3, C: 3 },
  },

  // ============ FTTM - Fakultas Teknik Pertambangan dan Perminyakan (4) ============
  {
    code: 'TG',
    name: 'Teknik Geofisika',
    faculty: 'Fakultas Teknik Pertambangan dan Perminyakan',
    facultyCode: 'FTTM',
    description:
      'Program studi yang menerapkan prinsip fisika untuk eksplorasi sumber daya bumi.',
    careerProspects: [
      'Geophysicist',
      'Exploration Specialist',
      'Seismic Analyst',
    ],
    riasecProfile: { R: 4, I: 5, A: 1, S: 2, E: 2, C: 3 },
  },
  {
    code: 'MG',
    name: 'Teknik Metalurgi',
    faculty: 'Fakultas Teknik Pertambangan dan Perminyakan',
    facultyCode: 'FTTM',
    description:
      'Program studi yang mempelajari ekstraksi dan pengolahan logam dari bijih.',
    careerProspects: [
      'Metallurgical Engineer',
      'Smelting Engineer',
      'Mining Industry',
    ],
    riasecProfile: { R: 5, I: 4, A: 1, S: 2, E: 2, C: 3 },
  },
  {
    code: 'TM',
    name: 'Teknik Perminyakan',
    faculty: 'Fakultas Teknik Pertambangan dan Perminyakan',
    facultyCode: 'FTTM',
    description:
      'Program studi yang mempelajari eksplorasi, eksploitasi, dan produksi minyak dan gas bumi.',
    careerProspects: [
      'Petroleum Engineer',
      'Reservoir Engineer',
      'Oil & Gas Industry',
    ],
    riasecProfile: { R: 5, I: 4, A: 1, S: 2, E: 4, C: 3 },
  },
  {
    code: 'TA',
    name: 'Teknik Pertambangan',
    faculty: 'Fakultas Teknik Pertambangan dan Perminyakan',
    facultyCode: 'FTTM',
    description:
      'Program studi yang mempelajari teknik penambangan mineral dan batubara.',
    careerProspects: ['Mining Engineer', 'Mine Planner', 'Safety Engineer'],
    riasecProfile: { R: 5, I: 3, A: 1, S: 2, E: 4, C: 3 },
  },

  // ============ FTSL - Fakultas Teknik Sipil dan Lingkungan (5) ============
  {
    code: 'IL',
    name: 'Rekayasa Infrastruktur Lingkungan',
    faculty: 'Fakultas Teknik Sipil dan Lingkungan',
    facultyCode: 'FTSL',
    description:
      'Program studi yang mempelajari perencanaan dan pengelolaan infrastruktur untuk keberlanjutan lingkungan.',
    careerProspects: [
      'Environmental Engineer',
      'Infrastructure Planner',
      'Sustainability Consultant',
    ],
    riasecProfile: { R: 4, I: 4, A: 1, S: 3, E: 3, C: 4 },
  },
  {
    code: 'SA',
    name: 'Teknik dan Pengelolaan Sumber Daya Air',
    faculty: 'Fakultas Teknik Sipil dan Lingkungan',
    facultyCode: 'FTSL',
    description:
      'Program studi yang mempelajari pengelolaan dan rekayasa sumber daya air.',
    careerProspects: ['Water Resources Engineer', 'Hydrologist', 'Dam Engineer'],
    riasecProfile: { R: 4, I: 4, A: 1, S: 3, E: 2, C: 4 },
  },
  {
    code: 'KL',
    name: 'Teknik Kelautan',
    faculty: 'Fakultas Teknik Sipil dan Lingkungan',
    facultyCode: 'FTSL',
    description:
      'Program studi yang mempelajari rekayasa struktur dan sistem di lingkungan laut.',
    careerProspects: [
      'Ocean Engineer',
      'Offshore Engineer',
      'Naval Architect',
      'Port Engineer',
    ],
    riasecProfile: { R: 5, I: 4, A: 1, S: 2, E: 3, C: 3 },
  },
  {
    code: 'TL',
    name: 'Teknik Lingkungan',
    faculty: 'Fakultas Teknik Sipil dan Lingkungan',
    facultyCode: 'FTSL',
    description:
      'Program studi yang mempelajari pengelolaan dan perlindungan lingkungan dari pencemaran.',
    careerProspects: [
      'Environmental Engineer',
      'EHS Specialist',
      'Waste Management Expert',
    ],
    riasecProfile: { R: 3, I: 4, A: 1, S: 4, E: 2, C: 4 },
  },
  {
    code: 'SI',
    name: 'Teknik Sipil',
    faculty: 'Fakultas Teknik Sipil dan Lingkungan',
    facultyCode: 'FTSL',
    description:
      'Program studi yang mempelajari perancangan dan konstruksi infrastruktur seperti jalan, jembatan, dan gedung.',
    careerProspects: [
      'Civil Engineer',
      'Structural Engineer',
      'Project Manager',
      'Contractor',
    ],
    riasecProfile: { R: 5, I: 4, A: 2, S: 2, E: 3, C: 4 },
  },

  // ============ FTI - Fakultas Teknologi Industri (6) ============
  {
    code: 'MR',
    name: 'Manajemen Rekayasa Industri',
    faculty: 'Fakultas Teknologi Industri',
    facultyCode: 'FTI',
    description:
      'Program studi yang memadukan teknik industri dengan manajemen bisnis.',
    careerProspects: [
      'Operations Manager',
      'Supply Chain Manager',
      'Business Analyst',
    ],
    riasecProfile: { R: 2, I: 3, A: 1, S: 3, E: 5, C: 4 },
  },
  {
    code: 'TB',
    name: 'Teknik Bioenergi dan Kemurgi',
    faculty: 'Fakultas Teknologi Industri',
    facultyCode: 'FTI',
    description:
      'Program studi yang mempelajari konversi biomassa menjadi energi dan produk bernilai.',
    careerProspects: [
      'Bioenergy Engineer',
      'Renewable Energy Specialist',
      'R&D Scientist',
    ],
    riasecProfile: { R: 4, I: 5, A: 1, S: 2, E: 2, C: 3 },
  },
  {
    code: 'TF',
    name: 'Teknik Fisika',
    faculty: 'Fakultas Teknologi Industri',
    facultyCode: 'FTI',
    description:
      'Program studi yang menerapkan prinsip fisika untuk solusi teknik industri.',
    careerProspects: [
      'Instrumentation Engineer',
      'Control Engineer',
      'Automation Engineer',
    ],
    riasecProfile: { R: 4, I: 5, A: 1, S: 2, E: 2, C: 4 },
  },
  {
    code: 'TI',
    name: 'Teknik Industri',
    faculty: 'Fakultas Teknologi Industri',
    facultyCode: 'FTI',
    description:
      'Program studi yang mengoptimalkan sistem industri yang kompleks melibatkan manusia, material, dan mesin.',
    careerProspects: [
      'Industrial Engineer',
      'Process Improvement Specialist',
      'Management Consultant',
    ],
    riasecProfile: { R: 3, I: 4, A: 1, S: 3, E: 4, C: 4 },
  },
  {
    code: 'TK',
    name: 'Teknik Kimia',
    faculty: 'Fakultas Teknologi Industri',
    facultyCode: 'FTI',
    description:
      'Program studi yang mempelajari proses transformasi bahan mentah menjadi produk bernilai.',
    careerProspects: [
      'Chemical Engineer',
      'Process Engineer',
      'Plant Manager',
      'Petrochemical Industry',
    ],
    riasecProfile: { R: 4, I: 5, A: 1, S: 2, E: 3, C: 4 },
  },
  {
    code: 'PG',
    name: 'Teknik Pangan',
    faculty: 'Fakultas Teknologi Industri',
    facultyCode: 'FTI',
    description:
      'Program studi yang mempelajari pengolahan, pengawetan, dan pengembangan produk pangan.',
    careerProspects: [
      'Food Technologist',
      'QA Manager',
      'R&D Food Scientist',
      'Food Industry',
    ],
    riasecProfile: { R: 4, I: 4, A: 2, S: 2, E: 2, C: 4 },
  },

  // ============ SAPPK - Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan (2) ============
  {
    code: 'AR',
    name: 'Arsitektur',
    faculty: 'Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan',
    facultyCode: 'SAPPK',
    description:
      'Program studi yang mempelajari perancangan bangunan dengan mempertimbangkan fungsi, estetika, dan lingkungan.',
    careerProspects: [
      'Architect',
      'Urban Designer',
      'Building Consultant',
      'Property Developer',
    ],
    riasecProfile: { R: 4, I: 3, A: 5, S: 3, E: 3, C: 2 },
  },
  {
    code: 'PWK',
    name: 'Perencanaan Wilayah dan Kota',
    faculty: 'Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan',
    facultyCode: 'SAPPK',
    description:
      'Program studi yang mempelajari perencanaan tata ruang dan pengembangan wilayah/kota.',
    careerProspects: [
      'Urban Planner',
      'Regional Planner',
      'Policy Analyst',
      'Government',
    ],
    riasecProfile: { R: 2, I: 4, A: 3, S: 4, E: 3, C: 4 },
  },

  // ============ SBM - Sekolah Bisnis dan Manajemen (2) ============
  {
    code: 'MK',
    name: 'Kewirausahaan',
    faculty: 'Sekolah Bisnis dan Manajemen',
    facultyCode: 'SBM',
    description:
      'Program studi yang mempelajari pengembangan bisnis baru dan inovasi kewirausahaan.',
    careerProspects: ['Entrepreneur', 'Startup Founder', 'Business Developer'],
    riasecProfile: { R: 2, I: 3, A: 3, S: 3, E: 5, C: 3 },
  },
  {
    code: 'MB',
    name: 'Manajemen',
    faculty: 'Sekolah Bisnis dan Manajemen',
    facultyCode: 'SBM',
    description:
      'Program studi yang mempelajari pengelolaan organisasi dan strategi bisnis.',
    careerProspects: [
      'Business Manager',
      'Marketing Manager',
      'HR Manager',
      'Consultant',
    ],
    riasecProfile: { R: 1, I: 3, A: 2, S: 4, E: 5, C: 4 },
  },

  // ============ SF - Sekolah Farmasi (2) ============
  {
    code: 'FKK',
    name: 'Farmasi Klinik dan Komunitas',
    faculty: 'Sekolah Farmasi',
    facultyCode: 'SF',
    description:
      'Program studi yang mempelajari pelayanan kefarmasian langsung kepada pasien dan masyarakat.',
    careerProspects: [
      'Clinical Pharmacist',
      'Community Pharmacist',
      'Hospital Pharmacist',
    ],
    riasecProfile: { R: 3, I: 4, A: 1, S: 5, E: 2, C: 4 },
  },
  {
    code: 'FA',
    name: 'Sains dan Teknologi Farmasi',
    faculty: 'Sekolah Farmasi',
    facultyCode: 'SF',
    description:
      'Program studi yang mempelajari pengembangan dan produksi obat-obatan.',
    careerProspects: [
      'Pharmaceutical Scientist',
      'Drug Developer',
      'QC Analyst',
      'Regulatory Affairs',
    ],
    riasecProfile: { R: 4, I: 5, A: 1, S: 2, E: 2, C: 4 },
  },

  // ============ SITH - Sekolah Ilmu dan Teknologi Hayati (6) ============
  {
    code: 'BI',
    name: 'Biologi',
    faculty: 'Sekolah Ilmu dan Teknologi Hayati',
    facultyCode: 'SITH',
    description:
      'Program studi yang mempelajari kehidupan dan organisme hidup dari tingkat molekuler hingga ekosistem.',
    careerProspects: ['Biologist', 'Researcher', 'Lab Scientist', 'Conservation'],
    riasecProfile: { R: 3, I: 5, A: 1, S: 2, E: 1, C: 3 },
  },
  {
    code: 'BM',
    name: 'Mikrobiologi',
    faculty: 'Sekolah Ilmu dan Teknologi Hayati',
    facultyCode: 'SITH',
    description:
      'Program studi yang mempelajari mikroorganisme seperti bakteri, virus, dan jamur.',
    careerProspects: [
      'Microbiologist',
      'Lab Analyst',
      'Quality Control',
      'Biotech Industry',
    ],
    riasecProfile: { R: 4, I: 5, A: 1, S: 2, E: 1, C: 4 },
  },
  {
    code: 'BE',
    name: 'Rekayasa Hayati',
    faculty: 'Sekolah Ilmu dan Teknologi Hayati',
    facultyCode: 'SITH',
    description:
      'Program studi yang menerapkan prinsip rekayasa pada sistem biologis.',
    careerProspects: [
      'Biotech Engineer',
      'Genetic Engineer',
      'Bioprocess Engineer',
    ],
    riasecProfile: { R: 4, I: 5, A: 1, S: 2, E: 2, C: 3 },
  },
  {
    code: 'BA',
    name: 'Rekayasa Pertanian',
    faculty: 'Sekolah Ilmu dan Teknologi Hayati',
    facultyCode: 'SITH',
    description:
      'Program studi yang menerapkan teknologi untuk meningkatkan produktivitas pertanian.',
    careerProspects: [
      'Agricultural Engineer',
      'Agronomist',
      'Farm Manager',
      'Agribusiness',
    ],
    riasecProfile: { R: 5, I: 4, A: 1, S: 3, E: 3, C: 3 },
  },
  {
    code: 'BW',
    name: 'Rekayasa Kehutanan',
    faculty: 'Sekolah Ilmu dan Teknologi Hayati',
    facultyCode: 'SITH',
    description:
      'Program studi yang mempelajari pengelolaan hutan dan sumber daya alam secara berkelanjutan.',
    careerProspects: [
      'Forest Engineer',
      'Conservation Specialist',
      'Environmental Consultant',
    ],
    riasecProfile: { R: 5, I: 4, A: 1, S: 3, E: 2, C: 3 },
  },
  {
    code: 'BP',
    name: 'Teknologi Pascapanen',
    faculty: 'Sekolah Ilmu dan Teknologi Hayati',
    facultyCode: 'SITH',
    description:
      'Program studi yang mempelajari pengolahan dan penyimpanan hasil pertanian setelah panen.',
    careerProspects: [
      'Postharvest Technologist',
      'Food Processing Specialist',
      'Quality Manager',
    ],
    riasecProfile: { R: 4, I: 4, A: 1, S: 2, E: 2, C: 4 },
  },

  // ============ STEI - Sekolah Teknik Elektro dan Informatika (6) ============
  {
    code: 'II',
    name: 'Sistem dan Teknologi Informasi',
    faculty: 'Sekolah Teknik Elektro dan Informatika',
    facultyCode: 'STEI',
    description:
      'Program studi yang mempelajari pemanfaatan teknologi informasi untuk solusi bisnis dan organisasi.',
    careerProspects: [
      'IT Consultant',
      'System Analyst',
      'Business Analyst',
      'IT Manager',
    ],
    riasecProfile: { R: 2, I: 4, A: 2, S: 3, E: 4, C: 4 },
  },
  {
    code: 'EB',
    name: 'Teknik Biomedis',
    faculty: 'Sekolah Teknik Elektro dan Informatika',
    facultyCode: 'STEI',
    description:
      'Program studi yang menggabungkan teknik dengan ilmu biomedis untuk pengembangan alat kesehatan.',
    careerProspects: [
      'Biomedical Engineer',
      'Medical Device Developer',
      'Clinical Engineer',
    ],
    riasecProfile: { R: 4, I: 5, A: 1, S: 3, E: 2, C: 3 },
  },
  {
    code: 'EL',
    name: 'Teknik Elektro',
    faculty: 'Sekolah Teknik Elektro dan Informatika',
    facultyCode: 'STEI',
    description:
      'Program studi yang mempelajari sistem elektrik, elektronik, dan elektromagnetik.',
    careerProspects: [
      'Electrical Engineer',
      'Electronics Engineer',
      'Embedded Systems Developer',
    ],
    riasecProfile: { R: 5, I: 5, A: 1, S: 2, E: 2, C: 3 },
  },
  {
    code: 'IF',
    name: 'Informatika',
    faculty: 'Sekolah Teknik Elektro dan Informatika',
    facultyCode: 'STEI',
    description:
      'Program studi yang mempelajari komputasi, algoritma, dan pengembangan perangkat lunak.',
    careerProspects: [
      'Software Engineer',
      'Data Scientist',
      'AI Engineer',
      'Tech Entrepreneur',
    ],
    riasecProfile: { R: 3, I: 5, A: 2, S: 2, E: 3, C: 3 },
  },
  {
    code: 'ET',
    name: 'Teknik Telekomunikasi',
    faculty: 'Sekolah Teknik Elektro dan Informatika',
    facultyCode: 'STEI',
    description:
      'Program studi yang mempelajari sistem dan jaringan telekomunikasi.',
    careerProspects: [
      'Telecom Engineer',
      'Network Engineer',
      'RF Engineer',
      'Telecom Industry',
    ],
    riasecProfile: { R: 4, I: 5, A: 1, S: 2, E: 2, C: 3 },
  },
  {
    code: 'EP',
    name: 'Teknik Tenaga Listrik',
    faculty: 'Sekolah Teknik Elektro dan Informatika',
    facultyCode: 'STEI',
    description:
      'Program studi yang mempelajari pembangkitan, transmisi, dan distribusi tenaga listrik.',
    careerProspects: [
      'Power Systems Engineer',
      'Energy Consultant',
      'PLN',
      'Renewable Energy',
    ],
    riasecProfile: { R: 5, I: 4, A: 1, S: 2, E: 3, C: 4 },
  },
];

export const TOTAL_MAJORS = majors.length;

// Get majors by faculty
export const getMajorsByFaculty = (facultyCode: string): Major[] => {
  return majors.filter((m) => m.facultyCode === facultyCode);
};

// Get unique faculties
export const getFaculties = (): { code: string; name: string }[] => {
  const facultyMap = new Map<string, string>();
  majors.forEach((m) => {
    if (!facultyMap.has(m.facultyCode)) {
      facultyMap.set(m.facultyCode, m.faculty);
    }
  });
  return Array.from(facultyMap.entries()).map(([code, name]) => ({
    code,
    name,
  }));
};
