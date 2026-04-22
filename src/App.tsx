import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ChevronDown } from 'lucide-react';
import Sidebar from './components/layout/Sidebar';
import HeroSection from './components/sections/HeroSection';
import GlossarySection from './components/sections/GlossarySection';
import QuizSection from './components/sections/QuizSection';
import { NavSection } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('hero');
  const [selectedBone, setSelectedBone] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const glossaryRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);

  function handleNavigate(section: NavSection) {
    setActiveSection(section);
    if (section === 'glossary') {
      glossaryRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'quiz') {
      quizRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <div className="min-h-screen bg-[#050d1a] text-white font-sans overflow-x-hidden">

      {/* ── Top Header ── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 bg-[#050d1a]/80 border-b border-cyan-900/30 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg hover:bg-white/8 text-slate-400 hover:text-slate-200 transition-colors mr-1"
          >
            <div className="flex flex-col gap-1">
              <span className={`block h-0.5 bg-current transition-all duration-200 ${sidebarOpen ? 'w-5' : 'w-3'}`} />
              <span className="block h-0.5 bg-current w-5" />
              <span className={`block h-0.5 bg-current transition-all duration-200 ${sidebarOpen ? 'w-5' : 'w-3'}`} />
            </div>
          </button>
          <Activity size={18} className="text-cyan-400" />
          <span className="font-bold text-white tracking-wide">InfoMed</span>
          <span className="text-cyan-400 font-mono text-xs tracking-widest">3D</span>
          <span className="hidden sm:block text-slate-700 text-xs mx-1">|</span>
          <span className="hidden sm:block text-xs text-slate-500">Human Anatomy Explorer</span>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-1">
            {(['hero', 'glossary', 'quiz'] as NavSection[]).map((s) => (
              <button
                key={s}
                onClick={() => handleNavigate(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                  activeSection === s
                    ? 'text-cyan-300 bg-cyan-500/12'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-white/6'
                }`}
              >
                {s === 'hero' ? 'Explorer' : s === 'glossary' ? 'Glossary' : 'Quiz'}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-mono">LIVE</span>
          </div>
        </div>
      </motion.header>

      {/* ── Main Layout ── */}
      <div className="flex pt-14 h-screen overflow-hidden">

        {/* Sidebar */}
        <AnimatePresence initial={false}>
          {sidebarOpen && (
            <motion.div
              key="sidebar"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 256, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden flex-shrink-0"
            >
              <Sidebar
                activeSection={activeSection}
                onNavigate={handleNavigate}
                selectedBone={selectedBone}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth">

          {/* Hero / 3D Skeleton Explorer */}
          <section className="h-[calc(100vh-56px)] relative">
            <HeroSection
              selectedBone={selectedBone}
              onBoneSelect={setSelectedBone}
              onClear={() => setSelectedBone(null)}
            />
            <motion.button
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              onClick={() => glossaryRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors"
            >
              <span className="text-xs font-mono tracking-widest">SCROLL</span>
              <ChevronDown size={14} />
            </motion.button>
          </section>

          {/* Medical Glossary */}
          <div ref={glossaryRef} onMouseEnter={() => setActiveSection('glossary')}>
            <GlossarySection />
          </div>

          {/* Quick Quiz */}
          <div ref={quizRef} onMouseEnter={() => setActiveSection('quiz')}>
            <QuizSection />
          </div>

          {/* Footer */}
          <footer className="bg-[#020810] border-t border-cyan-900/20 px-8 py-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Activity size={14} className="text-cyan-500" />
              <span className="text-sm font-bold text-slate-400">InfoMed-3D</span>
            </div>
            <p className="text-xs text-slate-700">Interactive 3D Medical Education Platform · Built for competition</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
