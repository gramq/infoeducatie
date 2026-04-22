export interface BoneData {
  id: string;
  name: string;
  latinName: string;
  category: string;
  description: string;
  commonInjuries: Injury[];
  recommendations: string[];
  funFact: string;
  color?: string;
}

export interface Injury {
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
  description: string;
}

export interface GlossaryTerm {
  term: string;
  category: string;
  definition: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export type NavSection = 'hero' | 'glossary' | 'quiz';

export interface SkeletonBoneMesh {
  boneId: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}
