import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, CheckCircle, Info, Zap, ChevronRight } from 'lucide-react';
import { BoneData } from '../../types';

interface DiagnosisPanelProps {
  bone: BoneData | null;
  onClose: () => void;
}

const severityConfig = {
  mild: { color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/25', icon: CheckCircle },
  moderate: { color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/25', icon: AlertTriangle },
  severe: { color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/25', icon: AlertTriangle },
};

export default function DiagnosisPanel({ bone, onClose }: DiagnosisPanelProps) {
  return (
    <AnimatePresence>
      {bone && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm z-30 pointer-events-none"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="absolute top-0 right-0 h-full w-96 z-40 overflow-y-auto"
          >
            <div className="h-full bg-[#050f20]/95 border-l border-cyan-800/40 backdrop-blur-2xl p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2 mb-1"
                  >
                    <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">{bone.category}</span>
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-2xl font-bold text-white"
                  >
                    {bone.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm text-cyan-400/70 italic font-mono mt-0.5"
                  >
                    {bone.latinName}
                  </motion.p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors mt-1"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Glowing divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent mb-5"
              />

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mb-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Info size={14} className="text-cyan-400" />
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Prezentare Generală</p>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{bone.description}</p>
              </motion.div>

              {/* Common Injuries */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={14} className="text-amber-400" />
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Leziuni Frecvente</p>
                </div>
                <div className="space-y-2">
                  {bone.commonInjuries.map((injury, i) => {
                    const cfg = severityConfig[injury.severity];
                    const Icon = cfg.icon;
                    return (
                      <motion.div
                        key={injury.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + i * 0.07 }}
                        className={`p-3 rounded-lg border text-sm ${cfg.bg}`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon size={13} className={cfg.color} />
                          <span className={`font-semibold text-xs ${cfg.color}`}>{injury.name}</span>
                          <span className={`ml-auto text-xs px-1.5 py-0.5 rounded font-mono capitalize ${cfg.color} bg-current/10`}>
                            {injury.severity}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed pl-5">{injury.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Medical Recommendations */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mb-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle size={14} className="text-emerald-400" />
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Recomandări Medicale
                  </p>
                </div>
                <ul className="space-y-2">
                  {bone.recommendations.map((rec, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.06 }}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <ChevronRight size={13} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      {rec}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Fun Fact */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-auto p-4 rounded-xl bg-gradient-to-br from-cyan-950/60 to-blue-950/60 border border-cyan-800/30"
              >
                <div className="flex items-start gap-2">
                  <Zap size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-cyan-400 mb-1">Ați știut?</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{bone.funFact}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
