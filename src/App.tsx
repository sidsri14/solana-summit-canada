import { useState } from 'react'
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Ticket, 
  Copy, 
  Check, 
  ExternalLink, 
  Video, 
  Users, 
  Award, 
  Share2, 
  Languages,
  Play,
  Flame
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { CREATOR_CATEGORIES, SPEAKERS, SCHEDULE } from './data'
import { CreatorCategory } from './types'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CreatorCategory>(CREATOR_CATEGORIES[0])
  const [lang, setLang] = useState<'en' | 'fr'>('en')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'campaign' | 'teleprompter' | 'speakers' | 'schedule' | 'prizes'>('campaign')
  const [customHandle, setCustomHandle] = useState<string>('')
  const [teleprompterSpeed, setTeleprompterSpeed] = useState<number>(30)
  const [isTeleprompterRunning, setIsTeleprompterRunning] = useState<boolean>(false)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    })
    setTimeout(() => setCopiedId(null), 2500)
  }

  const triggerLumaConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const getCustomizedPost = (cat: CreatorCategory) => {
    let post = lang === 'en' ? cat.samplePostEn : cat.samplePostFr
    if (customHandle) {
      post = post.replace('@SuperteamCAN', `@SuperteamCAN (by ${customHandle})`)
    }
    return post
  }

  return (
    <div className="min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Top Banner & Header */}
      <header className="border-b border-white/10 glass-panel sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl maple-gradient flex items-center justify-center font-black text-2xl shadow-lg shadow-red-600/30">
              🍁
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
                  Solana Summit <span className="text-red-400">Canada</span>
                </h1>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                  $10,000 USDG Prize Pool
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-red-400" /> Sept 23–24, 2026</span>
                <span>•</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-red-400" /> Toronto, Canada</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card hover:bg-white/10 text-xs font-medium transition"
            >
              <Languages className="w-3.5 h-3.5 text-red-400" />
              <span>{lang === 'en' ? 'EN 🇨🇦' : 'FR 🇨🇦'}</span>
            </button>

            {/* Luma Ticket Button */}
            <a
              href="https://luma.com/Solana-Summit-Canada"
              target="_blank"
              rel="noreferrer"
              onClick={triggerLumaConfetti}
              className="flex items-center gap-2 px-4 py-2 rounded-xl maple-gradient hover:opacity-90 transition text-sm font-semibold text-white shadow-lg shadow-red-500/20"
            >
              <Ticket className="w-4 h-4" />
              <span>{lang === 'en' ? 'Free Luma Pass' : 'Billet Gratuit'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>Creator Challenge Part 1 — Superteam Canada</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
              Inspire the World to Build in <span className="text-gradient">Toronto</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              Canada is uniting developers, founders, AI pioneers, and venture investors for 48 hours of high-throughput alpha. Create content across 7 categories and claim your share of the <strong className="text-white">$10,000 USDG prize pool</strong>.
            </p>

            {/* Quick stats banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-red-400">$10,000</div>
                <div className="text-xs text-slate-400 font-medium">Total Prize Pool</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-emerald-400">$2,000</div>
                <div className="text-xs text-slate-400 font-medium">Grand Prize</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-sky-400">7 Tracks</div>
                <div className="text-xs text-slate-400 font-medium">Content Categories</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-purple-400">Sept 21</div>
                <div className="text-xs text-slate-400 font-medium">Submission Deadline</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('campaign')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'campaign' 
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>7-Category Campaign Suite</span>
          </button>
          <button
            onClick={() => setActiveTab('teleprompter')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'teleprompter' 
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Video Teleprompter & Script</span>
          </button>
          <button
            onClick={() => setActiveTab('speakers')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'speakers' 
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Speakers & Keynotes</span>
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'schedule' 
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Summit Schedule (48h)</span>
          </button>
          <button
            onClick={() => setActiveTab('prizes')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'prizes' 
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Prize Matrix ($10K)</span>
          </button>
        </div>

        {/* TAB 1: 7-Category Campaign Suite */}
        {activeTab === 'campaign' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Category Selector List */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Select Campaign Category ({CREATOR_CATEGORIES.length})
              </h3>
              {CREATOR_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory.id === cat.id
                return (
                  <div
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat)}
                    className={`p-4 rounded-2xl cursor-pointer transition border ${
                      isSelected
                        ? 'bg-red-950/40 border-red-500/50 shadow-lg shadow-red-950/50 ring-1 ring-red-500/30'
                        : 'glass-card border-white/5 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{cat.emoji}</span>
                        <span className="font-bold text-white text-sm">
                          {lang === 'en' ? cat.name : cat.nameFr}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                        {cat.recommendedFormat}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {lang === 'en' ? cat.description : cat.descriptionFr}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Active Category Deep-Dive & Ready-to-Copy Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selectedCategory.emoji}</span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {lang === 'en' ? selectedCategory.name : selectedCategory.nameFr}
                      </h3>
                      <p className="text-xs text-red-400 font-medium">{selectedCategory.reward}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Your @XHandle (optional)"
                      value={customHandle}
                      onChange={(e) => setCustomHandle(e.target.value)}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500/50"
                    />
                  </div>
                </div>

                {/* Target Audience & Hooks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="glass-card p-4 rounded-xl">
                    <div className="text-xs font-semibold text-slate-400 mb-1 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-red-400" /> Target Audience
                    </div>
                    <div className="text-xs font-medium text-slate-200">{selectedCategory.targetAudience}</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl">
                    <div className="text-xs font-semibold text-slate-400 mb-1 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" /> Viral Hook Angle
                    </div>
                    <div className="text-xs font-medium text-slate-200">
                      "{selectedCategory.hookIdeas[0]}"
                    </div>
                  </div>
                </div>

                {/* Post Preview Box */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <Share2 className="w-3.5 h-3.5 text-red-400" />
                      Optimized {selectedCategory.recommendedFormat} ({lang.toUpperCase()})
                    </span>
                    <button
                      onClick={() => handleCopy(getCustomizedPost(selectedCategory), selectedCategory.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg maple-gradient text-xs font-semibold text-white hover:opacity-90 transition shadow-md shadow-red-600/20"
                    >
                      {copiedId === selectedCategory.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-300" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Post</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto max-h-96">
                    {getCustomizedPost(selectedCategory)}
                  </pre>
                </div>

                {/* Tag & Submission Helper */}
                <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span>Required Tags:</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-white font-mono">@SuperteamCAN</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-white font-mono">@solanacanada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Registration Link:</span>
                    <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-300 font-mono">luma.com/Solana-Summit-Canada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Video Teleprompter */}
        {activeTab === 'teleprompter' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <Video className="w-6 h-6 text-red-400" />
                  Creator Video Teleprompter & Script Studio
                </h3>
                <p className="text-xs text-slate-400">
                  Record your 45-60s TikTok, X Video, or YouTube Short with synchronized pacing and scene directions.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsTeleprompterRunning(!isTeleprompterRunning)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                    isTeleprompterRunning
                      ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                      : 'maple-gradient text-white shadow-lg shadow-red-500/20'
                  }`}
                >
                  <Play className="w-4 h-4" />
                  <span>{isTeleprompterRunning ? 'Pause Teleprompter' : 'Start Reading'}</span>
                </button>
                <div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-xl text-xs text-slate-300">
                  <span>Speed:</span>
                  <input
                    type="range"
                    min="15"
                    max="60"
                    value={teleprompterSpeed}
                    onChange={(e) => setTeleprompterSpeed(Number(e.target.value))}
                    className="w-20 accent-red-500"
                  />
                  <span>{teleprompterSpeed} wpm</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Teleprompter Display Box */}
              <div className="lg:col-span-2 p-8 rounded-2xl bg-black/80 border border-red-500/30 font-sans relative min-h-[360px] flex flex-col justify-center">
                <div className="space-y-6 text-center">
                  <p className="text-xl sm:text-2xl font-bold text-red-400 leading-relaxed">
                    "What happens when you bring the world’s fastest blockchain into the heart of Toronto’s tech corridor?"
                  </p>
                  <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed">
                    "Solana Summit Canada. September 23rd and 24th. Two days of intense developer workshops, high-stakes pitch competitions, and $10,000 in creator prizes."
                  </p>
                  <p className="text-lg sm:text-xl font-medium text-slate-300 leading-relaxed">
                    "Whether you're building autonomous AI agents or hunting the $840,000 Colosseum Hackathon—Toronto is where it happens."
                  </p>
                  <p className="text-base sm:text-lg font-bold text-red-300 leading-relaxed">
                    "Claim your free pass on Luma now at luma.com/Solana-Summit-Canada!"
                  </p>
                </div>
              </div>

              {/* Video Production Checklist */}
              <div className="space-y-4">
                <div className="glass-card p-5 rounded-2xl space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Production Checklist
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong>Duration:</strong> Keep between 30 to 90 seconds for peak retention.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong>Captions:</strong> Enable on-screen auto-subtitles for muted viewers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong>Visual B-Roll:</strong> Show Toronto CN Tower, code editors, or Summit graphics.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong>Link Placement:</strong> Pin Luma registration link in top reply/caption.</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleCopy(CREATOR_CATEGORIES[6].samplePostEn, 'video-script')}
                  className="w-full py-3 rounded-xl maple-gradient text-xs font-bold text-white shadow-lg shadow-red-600/20 hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copiedId === 'video-script' ? 'Copied Full Script!' : 'Copy Teleprompter Script'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Speakers & Keynotes */}
        {activeTab === 'speakers' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Featured Ecosystem Speakers & Mentors</h3>
                <p className="text-xs text-slate-400">Pioneers from the Solana Foundation, Anza, Vector Institute, and Venture Capital.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SPEAKERS.map((sp, idx) => (
                <div key={idx} className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-red-500/40 transition group">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-lg group-hover:scale-105 transition">
                    <img src={sp.avatar} alt={sp.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                    {sp.highlight}
                  </span>
                  <h4 className="font-bold text-white text-base mt-2">{sp.name}</h4>
                  <p className="text-xs text-slate-400 font-medium mb-2">{sp.role}, {sp.company}</p>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                    "{sp.topic}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Schedule */}
        {activeTab === 'schedule' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="border-b border-white/10 pb-4 mb-4">
              <h3 className="text-xl font-bold text-white">Solana Summit Canada 48-Hour Itinerary</h3>
              <p className="text-xs text-slate-400">September 23–24, 2026 | Metro Toronto Convention Hub</p>
            </div>

            <div className="space-y-3">
              {SCHEDULE.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl glass-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-white/5 hover:border-white/15 transition">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 text-red-400 font-mono text-xs font-bold whitespace-nowrap">
                      {item.time}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{item.title}</div>
                      <div className="text-xs text-slate-400">Speaker / Host: {item.speaker}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                      {item.day}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                      {item.track}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: Prize Matrix */}
        {activeTab === 'prizes' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                $10,000 USDG Creator Challenge Prize Allocation
              </h3>
              <p className="text-xs text-slate-400">Rewarding multi-format quality, virality, and technical storytelling.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="glass-card p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5">
                <div className="text-3xl mb-2">🥇</div>
                <div className="text-lg font-black text-amber-300">Grand Prize Winner</div>
                <div className="text-2xl font-black text-white mt-1">$2,000 USDG</div>
                <p className="text-xs text-slate-400 mt-2">Overall best content piece across all categories and formats.</p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-slate-300/30 bg-slate-300/5">
                <div className="text-3xl mb-2">🥈</div>
                <div className="text-lg font-black text-slate-200">Second Place</div>
                <div className="text-2xl font-black text-white mt-1">$1,250 USDG</div>
                <p className="text-xs text-slate-400 mt-2">High-impact viral post or technical deep dive.</p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-amber-700/30 bg-amber-700/5">
                <div className="text-3xl mb-2">🥉</div>
                <div className="text-lg font-black text-amber-500">Third Place</div>
                <div className="text-2xl font-black text-white mt-1">$750 USDG</div>
                <p className="text-xs text-slate-400 mt-2">Outstanding engagement and community rally.</p>
              </div>

              <div className="glass-card p-5 rounded-2xl">
                <div className="text-lg font-black text-white">4th & 5th Place</div>
                <div className="text-xl font-black text-red-400 mt-1">$500 USDG Each</div>
                <p className="text-xs text-slate-400 mt-2">Exceptional video or visual infographic.</p>
              </div>

              <div className="glass-card p-5 rounded-2xl">
                <div className="text-lg font-black text-white">7 Category Champions</div>
                <div className="text-xl font-black text-sky-400 mt-1">$250 USDG Each</div>
                <p className="text-xs text-slate-400 mt-2">Best in each of the 7 distinct challenge tracks ($1,750 total).</p>
              </div>

              <div className="glass-card p-5 rounded-2xl">
                <div className="text-lg font-black text-white">10 Honorable Mentions</div>
                <div className="text-xl font-black text-purple-400 mt-1">$250 USDG Each</div>
                <p className="text-xs text-slate-400 mt-2">Recognizing original storytelling & creativity ($2,500 total).</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 glass-panel py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>🍁 Built for <strong>Superteam Canada</strong> & <strong>Solana Summit Canada 2026</strong></span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://solanasummit.ca" target="_blank" rel="noreferrer" className="hover:text-white transition">solanasummit.ca</a>
            <span>•</span>
            <a href="https://luma.com/Solana-Summit-Canada" target="_blank" rel="noreferrer" className="hover:text-white transition">luma.com/Solana-Summit-Canada</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
