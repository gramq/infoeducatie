import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Search, ChevronDown, Tag } from 'lucide-react';
import { glossaryData } from '../../data/glossaryData';

const categories = ['All', ...Array.from(new Set(glossaryData.map((g) => g.category)))];

const categoryColors: Record<string, string> = {
  Anatomy: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  Trauma: 'text-red-400 bg-red-500/10 border-red-500/20',
  Pathology: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  Treatment: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  Metabolic: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  Inflammatory: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  Cellular: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  Clinical: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  Development: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
  Healing: 'text-lime-400 bg-lime-500/10 border-lime-500/20',
};

export default function GlossarySection() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = glossaryData.filter((item) => {
    const matchSearch =
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.definition.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <section className="min-h-screen bg-[#020810] px-8 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/5 mb-4">
            <BookOpen size={13} className="text-cyan-400" />
            <span className="text-xs text-cyan-400 font-mono tracking-widest uppercase">Reference</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-3">
            Medical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Glossary
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Comprehensive medical terminology for orthopedics, trauma, and musculoskeletal medicine.
          </p>
        </motion.div>

        {/* Search + Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search terms or definitions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                    : 'bg-white/4 border-white/8 text-slate-500 hover:text-slate-300 hover:bg-white/8'
                }`}
              >
                {cat !== 'All' && <Tag size={10} />}
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Count */}
        <p className="text-xs text-slate-600 mb-4 font-mono">
          {filtered.length} of {glossaryData.length} terms
        </p>

        {/* Terms grid */}
        <div className="space-y-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => {
              const isOpen = expanded === item.term;
              const colorClass = categoryColors[item.category] || 'text-slate-400 bg-slate-500/10 border-slate-500/20';

              return (
                <motion.div
                  key={item.term}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, delay: Math.min(i * 0.03, 0.2) }}
                  className="bg-white/3 border border-white/8 rounded-xl overflow-hidden hover:border-cyan-800/40 transition-colors"
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : item.term)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-white font-semibold text-sm">{item.term}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-md border font-medium ${colorClass}`}>
                        {item.category}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={15} className="text-slate-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-0">
                          <div className="h-px bg-white/6 mb-3" />
                          <p className="text-sm text-slate-400 leading-relaxed">{item.definition}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 text-slate-600">
              No terms found matching your search.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
