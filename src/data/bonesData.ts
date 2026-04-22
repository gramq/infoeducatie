import { BoneData } from '../types';

export const bonesData: Record<string, BoneData> = {
  skull: {
    id: 'skull',
    name: 'Skull',
    latinName: 'Cranium',
    category: 'Axial Skeleton',
    description:
      'The skull is a bony structure that forms the head and protects the brain. It consists of 22 bones fused together and houses the brain, sensory organs, and forms the face.',
    commonInjuries: [
      {
        name: 'Skull Fracture',
        severity: 'severe',
        description: 'A break in one or more bones of the skull, often caused by blunt force trauma.',
      },
      {
        name: 'Concussion',
        severity: 'moderate',
        description: 'A traumatic brain injury affecting brain function, usually caused by a blow to the head.',
      },
      {
        name: 'Orbital Fracture',
        severity: 'moderate',
        description: 'A fracture of the bones surrounding the eye socket.',
      },
    ],
    recommendations: [
      'Always wear appropriate head protection during contact sports',
      'Seek immediate medical attention for any head trauma',
      'MRI or CT scan recommended for diagnosis',
      'Rest and avoid physical exertion post-concussion',
    ],
    funFact: 'The skull contains 22 bones, 8 of which form the cranium protecting the brain.',
  },
  spine: {
    id: 'spine',
    name: 'Vertebral Column',
    latinName: 'Columna Vertebralis',
    category: 'Axial Skeleton',
    description:
      'The vertebral column, commonly called the spine or backbone, consists of 33 vertebrae divided into 5 regions: cervical (7), thoracic (12), lumbar (5), sacral (5 fused), and coccygeal (4 fused).',
    commonInjuries: [
      {
        name: 'Herniated Disc',
        severity: 'moderate',
        description: 'When the soft inner portion of a spinal disc pushes through the outer layer.',
      },
      {
        name: 'Compression Fracture',
        severity: 'severe',
        description: 'A vertebral break caused by compression forces, common in osteoporosis.',
      },
      {
        name: 'Scoliosis',
        severity: 'moderate',
        description: 'Abnormal lateral curvature of the spine.',
      },
      {
        name: 'Spinal Stenosis',
        severity: 'moderate',
        description: 'Narrowing of the spinal canal that can compress nerves.',
      },
    ],
    recommendations: [
      'Maintain good posture especially when sitting for long periods',
      'Strengthen core muscles to support the spine',
      'Lift heavy objects using leg muscles, not your back',
      'Regular stretching and yoga can improve spinal flexibility',
    ],
    funFact: 'The spine is flexible enough to bend into two-thirds of a circle and acts as a shock absorber.',
  },
  ribcage: {
    id: 'ribcage',
    name: 'Ribcage',
    latinName: 'Thoracic Cage',
    category: 'Axial Skeleton',
    description:
      'The rib cage forms a protective enclosure for the lungs and heart. It consists of 12 pairs of ribs, the sternum, and the thoracic vertebrae. Seven pairs are "true ribs" directly attached to the sternum.',
    commonInjuries: [
      {
        name: 'Rib Fracture',
        severity: 'moderate',
        description: 'A break in one or more of the ribs, often caused by direct impact or stress.',
      },
      {
        name: 'Flail Chest',
        severity: 'severe',
        description: 'Multiple adjacent ribs broken in multiple places, causing paradoxical breathing.',
      },
      {
        name: 'Costochondritis',
        severity: 'mild',
        description: 'Inflammation of the cartilage connecting ribs to the sternum.',
      },
    ],
    recommendations: [
      'Wear a seatbelt — prevents rib fractures in vehicle accidents',
      'Deep breathing exercises help prevent pneumonia after rib injuries',
      'Pain management is crucial for proper breathing recovery',
      'Avoid contact sports during rib fracture recovery',
    ],
    funFact: 'Ribs are among the fastest-healing bones in the body, typically mending within 6 weeks.',
  },
  pelvis: {
    id: 'pelvis',
    name: 'Pelvis',
    latinName: 'Pelvis',
    category: 'Appendicular Skeleton',
    description:
      'The pelvis is a basin-shaped complex of bones that connects the trunk and the legs. It supports and balances the trunk, and houses the pelvic organs including the bladder and reproductive organs.',
    commonInjuries: [
      {
        name: 'Pelvic Fracture',
        severity: 'severe',
        description: 'Breaks in the ring of bones forming the pelvis, often from high-energy trauma.',
      },
      {
        name: 'Hip Stress Fracture',
        severity: 'moderate',
        description: 'Small cracks in the pelvic or femoral bone from repetitive stress.',
      },
      {
        name: 'Sacroiliac Joint Dysfunction',
        severity: 'mild',
        description: 'Pain caused by abnormal motion in the sacroiliac joint.',
      },
    ],
    recommendations: [
      'Pelvic floor exercises strengthen supporting muscles',
      'Maintain calcium and vitamin D intake for bone density',
      'Gradual progression in physical training prevents stress fractures',
      'Immediate stabilization critical for severe pelvic fractures',
    ],
    funFact: 'The female pelvis is wider than the male to accommodate childbirth.',
  },
  femur: {
    id: 'femur',
    name: 'Femur',
    latinName: 'Os Femoris',
    category: 'Appendicular Skeleton',
    description:
      'The femur, or thigh bone, is the longest, strongest, and heaviest bone in the human body. It extends from the hip to the knee and plays a critical role in load-bearing and locomotion.',
    commonInjuries: [
      {
        name: 'Femoral Fracture',
        severity: 'severe',
        description: 'Requires tremendous force to break; commonly seen in car accidents or falls from height.',
      },
      {
        name: 'Hip Fracture',
        severity: 'severe',
        description: 'Fracture near the top of the femur at the hip joint, common in elderly patients.',
      },
      {
        name: 'Avascular Necrosis',
        severity: 'severe',
        description: 'Death of bone tissue due to lack of blood supply in the femoral head.',
      },
    ],
    recommendations: [
      'Weight-bearing exercises improve femoral bone density',
      'Surgical repair usually required for femoral fractures',
      'Hip replacement surgery may be needed for severe cases',
      'Regular bone density scans for high-risk individuals',
    ],
    funFact: 'The femur can support 30 times the weight of the human body.',
  },
  tibia: {
    id: 'tibia',
    name: 'Tibia & Fibula',
    latinName: 'Tibia et Fibula',
    category: 'Appendicular Skeleton',
    description:
      'The tibia (shinbone) is the larger of the two lower leg bones and is the main weight-bearing bone. The fibula runs alongside it. Together they form the lower leg structure connecting the knee to the ankle.',
    commonInjuries: [
      {
        name: 'Tibial Stress Fracture',
        severity: 'moderate',
        description: 'Small cracks from repetitive stress, very common in runners.',
      },
      {
        name: 'Shin Splints',
        severity: 'mild',
        description: 'Pain along the inner edge of the shinbone, caused by overuse.',
      },
      {
        name: 'Tibial Plateau Fracture',
        severity: 'severe',
        description: 'Fracture at the top of the tibia affecting the knee joint surface.',
      },
    ],
    recommendations: [
      'Gradually increase exercise intensity to prevent stress fractures',
      'Proper footwear absorbs impact and protects lower leg bones',
      'Stretch the calf muscles regularly',
      'Ice therapy for acute lower leg pain management',
    ],
    funFact: 'The tibia is the second largest bone in the body and can withstand forces of over 1800 Newtons.',
  },
  humerus: {
    id: 'humerus',
    name: 'Humerus',
    latinName: 'Humerus',
    category: 'Appendicular Skeleton',
    description:
      'The humerus is the bone of the upper arm, running from the shoulder to the elbow. It articulates with the scapula at the shoulder joint (glenohumeral joint) and with the radius and ulna at the elbow.',
    commonInjuries: [
      {
        name: 'Proximal Humerus Fracture',
        severity: 'moderate',
        description: 'Fracture near the shoulder, common in osteoporotic patients from minor falls.',
      },
      {
        name: 'Humeral Shaft Fracture',
        severity: 'moderate',
        description: 'Break in the middle portion of the humerus, can damage the radial nerve.',
      },
      {
        name: 'Rotator Cuff Tear',
        severity: 'moderate',
        description: 'Tear in the muscles and tendons stabilizing the shoulder joint.',
      },
    ],
    recommendations: [
      'Shoulder strengthening exercises prevent rotator cuff injuries',
      'Avoid overhead lifting with poor mechanics',
      'Physical therapy is key to restoring shoulder range of motion',
      'Surgical intervention for complete rotator cuff tears',
    ],
    funFact: 'The humerus contains important nerves — a mid-shaft fracture can cause wrist drop due to radial nerve damage.',
  },
  radius_ulna: {
    id: 'radius_ulna',
    name: 'Radius & Ulna',
    latinName: 'Radius et Ulna',
    category: 'Appendicular Skeleton',
    description:
      'The radius and ulna are the two bones of the forearm. The radius is on the thumb side and rotates to allow forearm supination and pronation. The ulna forms the point of the elbow.',
    commonInjuries: [
      {
        name: "Colles' Fracture",
        severity: 'moderate',
        description: 'Distal radius fracture from falling on an outstretched hand.',
      },
      {
        name: 'Both-Bone Forearm Fracture',
        severity: 'severe',
        description: 'Simultaneous fracture of both radius and ulna, common in children.',
      },
      {
        name: 'Tennis Elbow',
        severity: 'mild',
        description: 'Inflammation of tendons joining the forearm muscles to the lateral epicondyle.',
      },
    ],
    recommendations: [
      'Wrist guards during skating or skiing can prevent Colles fractures',
      'Ergonomic setup prevents repetitive strain injuries',
      'Forearm stretching for prevention of tennis/golfer elbow',
      'Cast immobilization for most forearm fractures',
    ],
    funFact: "The forearm can rotate 180° thanks to the radius rolling over the ulna — unique to primates.",
  },
  patella: {
    id: 'patella',
    name: 'Patella',
    latinName: 'Patella',
    category: 'Appendicular Skeleton',
    description:
      'The patella, commonly known as the kneecap, is a sesamoid bone embedded in the quadriceps tendon. It protects the knee joint and improves the leverage of the quadriceps muscle.',
    commonInjuries: [
      {
        name: 'Patellar Fracture',
        severity: 'moderate',
        description: 'Break in the kneecap from direct blow or forceful contraction of the quadriceps.',
      },
      {
        name: 'Patellar Dislocation',
        severity: 'moderate',
        description: 'The kneecap slides out of its normal position in the groove of the femur.',
      },
      {
        name: "Chondromalacia Patellae",
        severity: 'mild',
        description: 'Softening and breakdown of the cartilage under the kneecap.',
      },
    ],
    recommendations: [
      'Strengthen VMO (vastus medialis oblique) to prevent patellar tracking issues',
      'Proper warm-up before exercise reduces patellar injury risk',
      'Knee bracing for patellar instability',
      'Low-impact exercise during recovery (swimming, cycling)',
    ],
    funFact: 'Babies are born without a kneecap — it fully ossifies between ages 3–5.',
  },
  sternum: {
    id: 'sternum',
    name: 'Sternum',
    latinName: 'Sternum',
    category: 'Axial Skeleton',
    description:
      'The sternum, or breastbone, is a flat T-shaped bone in the center of the chest. It connects to the ribs via cartilage and serves as the front wall of the thoracic cage, protecting the heart and lungs.',
    commonInjuries: [
      {
        name: 'Sternal Fracture',
        severity: 'severe',
        description: 'Break in the breastbone, often from seatbelt injuries or direct blows to the chest.',
      },
      {
        name: 'Costochondral Separation',
        severity: 'moderate',
        description: 'Separation of the rib from the sternum at the cartilage junction.',
      },
    ],
    recommendations: [
      'Seatbelts save lives but can fracture the sternum — unavoidable trade-off',
      'CPR requires sternal compression — trained professionals should perform it',
      'Breathing deeply post-injury prevents pulmonary complications',
    ],
    funFact: 'The sternum is often used for bone marrow biopsies due to its accessibility.',
  },
};
