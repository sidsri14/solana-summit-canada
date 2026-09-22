import { CreatorCategory, Speaker, ScheduleItem } from './types'

export const CREATOR_CATEGORIES: CreatorCategory[] = [
  {
    id: 'why-canada',
    emoji: '🇨🇦',
    name: 'Why Canada?',
    nameFr: 'Pourquoi le Canada ?',
    reward: '$250 Category Prize + Grand Prize eligible ($2,000)',
    description: 'Showcase why Canada is emerging as a global powerhouse for blockchain builders, AI researchers, and high-growth crypto startups.',
    descriptionFr: 'Montrez pourquoi le Canada devient une puissance mondiale pour les bâtisseurs de blockchain et les startups IA.',
    targetAudience: 'Global Founders, Canadian Diaspora, Investors, Tech Talent',
    hookIdeas: [
      'Canada isn’t just maple syrup and tech hubs — it is quietly becoming Solana’s premier engineering frontier.',
      'From Toronto’s AI corridor to Montreal’s cryptography labs: Why the next wave of Web3 unicorns will be built in Canada.'
    ],
    samplePostEn: `🇨🇦 Canada is quietly building the future of decentralized tech & high-performance compute.

From Toronto's world-leading AI research hubs (Vector Institute) to Montreal's deep cryptographic talent, the northern ecosystem is firing on all cylinders.

This September 23-24, @SuperteamCAN is bringing together founders, researchers, and venture leaders in Toronto for Solana Summit Canada 🍁

If you are building the future on Solana, you cannot afford to miss this.

🎟 Secure your free ticket now: https://luma.com/Solana-Summit-Canada
🌐 More info: https://solanasummit.ca

#Solana #SolanaCanada #Superteam #Web3Toronto`,
    samplePostFr: `🇨🇦 Le Canada construit discrètement l'avenir des technologies décentralisées et du calcul haute performance.

De l'écosystème IA de Toronto aux centres de recherche en cryptographie de Montréal, le pays regorge de talents exceptionnels.

Les 23 et 24 septembre, @SuperteamCAN réunit les meilleurs fondateurs, développeurs et investisseurs à Toronto pour le Solana Summit Canada 🍁

🎟 Réservez votre place : https://luma.com/Solana-Summit-Canada
🌐 Infos : https://solanasummit.ca

#SolanaCanada #Web3 #Technologie`,
    recommendedFormat: 'X Thread'
  },
  {
    id: 'why-im-going',
    emoji: '🚀',
    name: 'Why I’m Going',
    nameFr: 'Pourquoi j’y vais',
    reward: '$250 Category Prize + Grand Prize eligible ($2,000)',
    description: 'Personal, compelling stories about your motivation to attend, network, pitch, and collaborate in Toronto.',
    descriptionFr: 'Vos motivations personnelles pour assister, networker, pitcher et collaborer à Toronto.',
    targetAudience: 'Peers, Builders, Early-stage Founders, Students',
    hookIdeas: [
      'Why I booked my flight to Toronto for Solana Summit Canada (and why you should too).',
      'The single biggest reason I am attending Solana Summit Canada this September.'
    ],
    samplePostEn: `🚀 3 reasons why I'm heading to Toronto for Solana Summit Canada on Sept 23-24:

1️⃣ The Colosseum Hackathon Synergy: We are in the middle of the $840K Crypto World's Fair. Summit is where teams form and mentors advise live.
2️⃣ The AI × Solana Convergence: Canada pioneered modern deep learning; seeing autonomous agents interact on SVM in real-time is unmissable.
3️⃣ Superteam Canada Network: The fastest way to get funded, audited, and deployed on Mainnet.

Who else is landing in Toronto? Let's connect! 🤝

🎟 Join me (Registration free via Luma): https://luma.com/Solana-Summit-Canada

@SuperteamCAN @solanacanada #SolanaSummit`,
    samplePostFr: `🚀 3 raisons pour lesquelles je serai à Toronto pour le Solana Summit Canada les 23-24 septembre :

1️⃣ Synergie avec le Hackathon Colosseum ($840k de prix)
2️⃣ Convergence IA × Solana et agents autonomes
3️⃣ Réseau de premier plan avec @SuperteamCAN

Rencontrons-nous à Toronto ! 🤝
🎟 Inscription : https://luma.com/Solana-Summit-Canada`,
    recommendedFormat: 'LinkedIn Essay'
  },
  {
    id: 'builder-perspective',
    emoji: '👩‍💻',
    name: 'Builder Perspective',
    nameFr: 'Perspective Développeur',
    reward: '$250 Category Prize + Grand Prize eligible ($2,000)',
    description: 'Deep-dive technical breakdown for engineers: Anchor, Firedancer, Token-2022, Solana Mobile SDK, and ZK compression.',
    descriptionFr: 'Analyse technique pour ingénieurs : Anchor, Firedancer, Token-2022 et ZK compression.',
    targetAudience: 'Full-stack Devs, Rust Engineers, Protocol Architects',
    hookIdeas: [
      'Why Solana’s throughput and composability make it the ultimate sandbox for Canadian software engineers.',
      'From Web2 React/Rust to Solana dApp in 48 hours: What you’ll learn at Solana Summit Canada.'
    ],
    samplePostEn: `👩‍💻 If you are a software engineer or Rust builder, Solana Summit Canada is your gateway to the fastest execution layer in crypto.

What’s on the engineering docket:
⚡ Firedancer architecture & gigabit SVM performance
🔐 Zero-Knowledge compression & Token-2022 confidential transfers
🤖 Autonomous AI agents executing micro-transactions via Anchor
📱 Solana Mobile Stack (SMS) dApp building

Whether you're an experienced Solana core dev or transitioning from Web2, the technical workshops and hack rooms in Toronto will level up your stack.

🎟 Register on Luma: https://luma.com/Solana-Summit-Canada
Hosted by @SuperteamCAN 🍁

#RustLang #SolanaDev #BlockchainDev`,
    samplePostFr: `👩‍💻 Développeurs Rust & Web2 : Le Solana Summit Canada est votre passerelle vers l'infrastructure d'exécution la plus rapide au monde.

Au programme technique :
⚡ Architecture Firedancer & performance SVM
🔐 Compression ZK & Token-2022
🤖 Agents IA et micro-transactions
📱 Solana Mobile Stack

🎟 Inscription gratuite : https://luma.com/Solana-Summit-Canada`,
    recommendedFormat: 'X Thread'
  },
  {
    id: 'speaker-spotlight',
    emoji: '🎤',
    name: 'Speaker Spotlight',
    nameFr: 'Projecteur sur les Intervenants',
    reward: '$250 Category Prize + Grand Prize eligible ($2,000)',
    description: 'Highlight industry visionaries, Solana Foundation leaders, ecosystem founders, and Canadian venture capitalists.',
    descriptionFr: 'Mettez en valeur les leaders de l’écosystème, fondateurs et investisseurs.',
    targetAudience: 'DeFi Traders, Angel Investors, Ecosystem Followers',
    hookIdeas: [
      'The speaker lineup at Solana Summit Canada is stacked. Here are 4 talks you cannot miss.',
      'Who is shaping the future of decentralized finance in North America? Meet the leaders speaking in Toronto.'
    ],
    samplePostEn: `🎤 The speaker roster for Solana Summit Canada (Sept 23-24, Toronto) is world-class.

Expect keynote stages and fireside chats featuring:
✨ Core Solana Foundation researchers & ecosystem architects
✨ Leading venture partners from North American Web3 funds
✨ Founders of top Solana DeFi, DePIN, and AI protocols
✨ Canadian tech leaders bridging Web2 giants with on-chain rails

Toronto will be the capital of Solana innovation for 48 hours. Don’t watch from Twitter—be in the room where deals happen.

🎟 Reserve your pass: https://luma.com/Solana-Summit-Canada
@SuperteamCAN @solanacanada #SolanaSummitCanada`,
    samplePostFr: `🎤 Des intervenants de premier plan réunis à Toronto pour le Solana Summit Canada les 23 et 24 septembre.

Retrouvez des chercheurs de la Fondation Solana, des bâtisseurs de DePIN et des fonds d'investissement Web3 majeurs.

🎟 Accès gratuit sur Luma : https://luma.com/Solana-Summit-Canada`,
    recommendedFormat: 'Visual Infographic'
  },
  {
    id: 'convince-community',
    emoji: '🌎',
    name: 'Convince Your Community',
    nameFr: 'Mobilisez votre Communauté',
    reward: '$250 Category Prize + Grand Prize eligible ($2,000)',
    description: 'Rally developer hubs and student clubs from Montreal, Vancouver, Waterloo, NYC, Boston, Chicago, and beyond to travel together.',
    descriptionFr: 'Mobilisez les communautés étudiantes et tech de Montréal, Vancouver, Waterloo, NYC, etc.',
    targetAudience: 'University Hubs (UofT, Waterloo, McGill, UBC), Regional Meetups',
    hookIdeas: [
      'Montreal, Waterloo, Vancouver & NYC builders: We are assembling a delegation for Solana Summit Canada!',
      'Why university students and computer science grads need to be at Solana Summit Toronto.'
    ],
    samplePostEn: `🌎 Calling all builders from Montréal, Waterloo, Vancouver, NYC, and Boston! 🚆✈️

We are gathering delegations across universities and developer communities to descend on Toronto for Solana Summit Canada (Sept 23-24).

Why make the trip?
✅ Direct access to hiring managers and funded startups
✅ Free entry via Luma
✅ Colosseum Hackathon team formation & mentorship
✅ Connect with @SuperteamCAN leaders and grant evaluators

Grab your builder crew, book your train/flight, and let’s put Canada on the global Web3 map!

🎟 Registration link: https://luma.com/Solana-Summit-Canada
#WaterlooTech #UofT #McGill #SolanaCanada`,
    samplePostFr: `🌎 Appel aux communautés de Montréal, Québec, Waterloo et Ottawa ! 🚆

Rejoignez la délégation pour le Solana Summit Canada à Toronto (23-24 septembre).
Rencontrez les recruteurs, formez votre équipe pour les hackathons et échangez avec les leaders @SuperteamCAN.

🎟 Inscription gratuite : https://luma.com/Solana-Summit-Canada`,
    recommendedFormat: 'X Thread'
  },
  {
    id: 'ai-blockchain',
    emoji: '🤖',
    name: 'AI × Blockchain Frontier',
    nameFr: 'Frontière IA × Blockchain',
    reward: '$250 Category Prize + Grand Prize eligible ($2,000)',
    description: 'Explore Canada’s heritage as the birthplace of modern AI (Hinton, Bengio, Vector Institute) fused with Solana’s sub-second latency.',
    descriptionFr: 'Explorez l’héritage IA du Canada fusionné avec la vitesse de Solana.',
    targetAudience: 'AI Researchers, Agent Builders, Data Scientists',
    hookIdeas: [
      'Canada birthed modern Deep Learning. Now it is building autonomous economic agents on Solana.',
      'Why AI agents need Solana: Sub-second finality, micro-penny transactions, and deterministic execution.'
    ],
    samplePostEn: `🤖 Canada has long been the intellectual capital of Artificial Intelligence. Now, it is becoming the hub where AI meets decentralized economics.

At Solana Summit Canada (Toronto, Sept 23-24), explore:
🧠 Autonomous on-chain agents paying each other via Solana Pay
⚡ Model inference verification & decentralized compute (DePIN)
📊 AI trading bots executing via Anchor programs & Jupiter routing
🛡 Cryptographic agent identity & verifiable data proofs

Discover what happens when sub-second blockchain settlement powers artificial intelligence.

🎟 Register today: https://luma.com/Solana-Summit-Canada
Powered by @SuperteamCAN 🍁

#AI #Solana #MachineLearning #CryptoAI`,
    samplePostFr: `🤖 Le Canada, berceau de l'IA moderne, devient le carrefour où l'intelligence artificielle rencontre l'économie décentralisée sur Solana.

Découvrez les agents autonomes, le calcul décentralisé et les micropaiements instantanés au Solana Summit Canada (23-24 sept, Toronto).

🎟 Inscription : https://luma.com/Solana-Summit-Canada`,
    recommendedFormat: 'LinkedIn Essay'
  },
  {
    id: 'wildcard-creative',
    emoji: '🎨',
    name: 'Wildcard & Video Creative',
    nameFr: 'Format Vidéo & Créatif Libre',
    reward: '$250 Category Prize + Grand Prize eligible ($2,000)',
    description: 'Short-form high-energy TikTok/Reels/YouTube Shorts, memes, skits, and cinematic promotional teasers.',
    descriptionFr: 'Vidéos courtes dynamiques (TikTok/Reels/Shorts), mèmes et bandes-annonces percutantes.',
    targetAudience: 'Broader Web3 Community, Gen-Z Builders, Content Creators',
    hookIdeas: [
      'POV: You almost missed the biggest Solana conference in Canada.',
      'What $10,000 in creator prizes and 48 hours in Toronto looks like.'
    ],
    samplePostEn: `🎨 [VIDEO TELEPROMPTER SCRIPT - 45 SECONDS]

(Scene 1 - Fast zoom-in)
"What happens when you take the fastest blockchain on earth and drop it into the heart of Toronto's tech hub?"

(Scene 2 - Dynamic B-roll of Toronto Skyline & code editor)
"Solana Summit Canada. September 23rd and 24th. Two full days of high-velocity hacking, venture networking, and exclusive alpha."

(Scene 3 - Text overlay: $10,000 Creator Challenge + Colosseum Mentorship)
"Whether you're building autonomous AI agents, next-gen DeFi, or looking to join a funded startup — this is where Canada builds."

(Scene 4 - Screen showing Luma registration)
"Registration is completely free on Luma. Link is right here: https://luma.com/Solana-Summit-Canada. Tag your builder co-founder and see you in Toronto!"

@SuperteamCAN @solanacanada #SolanaSummit`,
    samplePostFr: `🎨 [SCRIPT VIDÉO 45 SECONDES]

"Les 23 et 24 septembre, Toronto devient le centre névralgique de Solana au Canada. Deux jours intenses d'innovation, d'IA et de Web3. Rejoignez-nous gratuitement sur Luma : https://luma.com/Solana-Summit-Canada !"`,
    recommendedFormat: 'Video Script'
  }
]

export const SPEAKERS: Speaker[] = [
  {
    name: 'Elena Rostova',
    role: 'Head of Ecosystem Growth',
    company: 'Solana Foundation',
    topic: 'Scaling Global Adoption: The Next 1 Billion On-Chain Users',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    highlight: 'Keynote Speaker'
  },
  {
    name: 'Marcus Vance',
    role: 'Core SVM Architect',
    company: 'Anza / Firedancer',
    topic: 'Firedancer & The 1,000,000 TPS Future of Solana',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    highlight: 'Technical Keynote'
  },
  {
    name: 'Dr. Chloe Dubois',
    role: 'AI & Cryptography Lead',
    company: 'Vector Institute Toronto',
    topic: 'Autonomous Agentic Systems on High-Speed Chains',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
    highlight: 'AI x Web3 Stage'
  },
  {
    name: 'Liam Chen',
    role: 'Managing Partner',
    company: 'Maple Leaf Ventures',
    topic: 'Funding Canadian Web3 & AI Startups in 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    highlight: 'Investor Panel'
  }
]

export const SCHEDULE: ScheduleItem[] = [
  { time: '09:00 AM', day: 'Day 1 (Sept 23)', title: 'Registration, Networking & Maple Breakfast', track: 'Main Stage', speaker: 'Superteam Canada Team' },
  { time: '10:00 AM', day: 'Day 1 (Sept 23)', title: 'Opening Keynote: The State of Solana & Canadian Innovation', track: 'Main Stage', speaker: 'Elena Rostova (Solana Foundation)' },
  { time: '11:30 AM', day: 'Day 1 (Sept 23)', title: 'Deep Dive: Firedancer & Parallel SVM Optimization', track: 'DeFi & Scaling', speaker: 'Marcus Vance (Anza)' },
  { time: '02:00 PM', day: 'Day 1 (Sept 23)', title: 'AI × Blockchain: Building Autonomous Economic Agents', track: 'AI x Solana', speaker: 'Dr. Chloe Dubois (Vector Institute)' },
  { time: '04:00 PM', day: 'Day 1 (Sept 23)', title: 'Colosseum Hackathon Speed Mentorship & Team Formation', track: 'Founders & Demo', speaker: 'Superteam Mentors' },
  { time: '10:00 AM', day: 'Day 2 (Sept 24)', title: 'Investor Panel: What VCs Look For in Canadian Web3 Startups', track: 'Main Stage', speaker: 'Liam Chen & Venture Guests' },
  { time: '01:30 PM', day: 'Day 2 (Sept 24)', title: 'Token-2022 & ZK Compression Hands-on Workshop', track: 'DeFi & Scaling', speaker: 'Ecosystem Core Engineers' },
  { time: '04:30 PM', day: 'Day 2 (Sept 24)', title: 'Live Pitch Competition & Creator Challenge Ceremony', track: 'Founders & Demo', speaker: 'Superteam Canada Judges' }
]
