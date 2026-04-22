import { QuizQuestion } from '../types';

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: 'How many bones does the adult human skeleton contain?',
    options: ['186', '196', '206', '216'],
    correct: 2,
    explanation:
      'The adult human skeleton contains 206 bones. Babies are born with around 270–300 bones, which gradually fuse together as they grow.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Which is the longest and strongest bone in the human body?',
    options: ['Tibia', 'Fibula', 'Humerus', 'Femur'],
    correct: 3,
    explanation:
      'The femur (thigh bone) is the longest, heaviest, and strongest bone in the body. It can support up to 30 times the weight of the human body.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What type of joint is the knee joint?',
    options: ['Ball and socket', 'Pivot', 'Hinge', 'Saddle'],
    correct: 2,
    explanation:
      'The knee is primarily a hinge joint, allowing flexion and extension. It also allows slight rotation, making it technically a modified hinge joint.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'The vertebral column consists of how many vertebrae?',
    options: ['26', '30', '33', '36'],
    correct: 2,
    explanation:
      'The vertebral column has 33 vertebrae: 7 cervical, 12 thoracic, 5 lumbar, 5 sacral (fused into the sacrum), and 4 coccygeal (fused into the coccyx).',
    difficulty: 'medium',
  },
  {
    id: 5,
    question: "A Colles' fracture specifically involves which bone?",
    options: ['Ulna', 'Radius', 'Humerus', 'Tibia'],
    correct: 1,
    explanation:
      "A Colles' fracture is a fracture of the distal radius, typically within 1 inch of the wrist. It's often caused by falling onto an outstretched hand.",
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'What is the medical term for the kneecap?',
    options: ['Calcaneus', 'Malleolus', 'Patella', 'Scapula'],
    correct: 2,
    explanation:
      'The patella is the kneecap — a sesamoid bone embedded in the quadriceps tendon. It protects the knee and improves the mechanical advantage of the quadriceps muscle.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'Which cells are responsible for BREAKING DOWN bone tissue?',
    options: ['Osteoblasts', 'Osteoclasts', 'Osteocytes', 'Chondrocytes'],
    correct: 1,
    explanation:
      'Osteoclasts are large, multinucleated cells that resorb (break down) bone tissue. Osteoblasts build bone, osteocytes maintain it, and chondrocytes form cartilage.',
    difficulty: 'medium',
  },
  {
    id: 8,
    question: 'What is the name of the membrane covering the outer surface of bones?',
    options: ['Endosteum', 'Periosteum', 'Perichondrium', 'Synovium'],
    correct: 1,
    explanation:
      "The periosteum is the dense fibrous membrane that covers bone surfaces (except at cartilage-covered joint surfaces). It contains blood vessels and is essential for bone repair.",
    difficulty: 'hard',
  },
  {
    id: 9,
    question: 'Which region of the spine has the greatest range of motion?',
    options: ['Thoracic', 'Lumbar', 'Cervical', 'Sacral'],
    correct: 2,
    explanation:
      'The cervical spine (neck) has the greatest range of motion, allowing flexion, extension, lateral bending, and rotation. The thoracic spine is most restricted by the rib cage.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'Ossification of bones begins during which developmental stage?',
    options: ['After birth', 'Fetal development', 'Adolescence', 'Early childhood only'],
    correct: 1,
    explanation:
      'Primary ossification begins during fetal development (around the 8th week). Secondary ossification centers develop after birth, primarily during childhood and adolescence.',
    difficulty: 'hard',
  },
  {
    id: 11,
    question: 'Which bone forms the "point" of the elbow?',
    options: ['Radius', 'Humerus', 'Ulna', 'Carpals'],
    correct: 2,
    explanation:
      "The olecranon process of the ulna forms the bony prominence of the elbow (the 'point'). The ulna is the larger of the two forearm bones on the medial (pinky) side.",
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'What percentage of the body\'s calcium is stored in bones and teeth?',
    options: ['70%', '80%', '90%', '99%'],
    correct: 3,
    explanation:
      'Approximately 99% of the body\'s calcium is stored in bones and teeth. The remaining 1% circulates in the blood and soft tissues and is critical for nerve and muscle function.',
    difficulty: 'hard',
  },
];
