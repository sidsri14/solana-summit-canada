export interface CreatorCategory {
  id: string;
  emoji: string;
  name: string;
  nameFr: string;
  reward: string;
  description: string;
  descriptionFr: string;
  targetAudience: string;
  hookIdeas: string[];
  samplePostEn: string;
  samplePostFr: string;
  recommendedFormat: 'X Thread' | 'Video Script' | 'LinkedIn Essay' | 'Visual Infographic';
}

export interface Speaker {
  name: string;
  role: string;
  company: string;
  topic: string;
  avatar: string;
  highlight: string;
}

export interface ScheduleItem {
  time: string;
  day: 'Day 1 (Sept 23)' | 'Day 2 (Sept 24)';
  title: string;
  track: 'Main Stage' | 'AI x Solana' | 'DeFi & Scaling' | 'Founders & Demo';
  speaker: string;
}
