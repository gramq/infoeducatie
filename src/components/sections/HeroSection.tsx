import { useRef } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Info, RotateCcw, ZoomIn } from 'lucide-react';
import SkeletonCanvas from '../3d/SkeletonCanvas';
import DiagnosisPanel from '../panels/DiagnosisPanel';
import { bonesData } from '../../data/bonesData';

interface HeroSectionProps {
  selectedBone: string | null;
  onBoneSelect: (id: string) => void;
  onClear: () => void;
}

export default function HeroSection({ selectedBone, onBoneSelect, onClear }: HeroSectionProps) {
  const selectedBoneData = selectedBone ? bonesData[selectedBone] : null;

  return (
    <div className="flex-1 relative overflow-hidden bg-[#050d1a] h-full">
      {/* Top info bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-3 bg-gradient-to-b from-[#050d1a]/90 to-transparent pointer-events-none"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <MousePointer2 size={12} className="text-cyan-500" />
            <span>Faceți clic pe un os pentru inspecție</span>
          </div>
          <div className="w-px h-3 bg-slate-700" />
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <RotateCcw size={12} className="text-cyan-500" />
            <span>Trageți pentru a roti</span>
          </div>
          <div className="w-px h-3 bg-slate-700" />
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ZoomIn size={12} className="text-cyan-500" />
            <span>Derulați pentru a mări</span>
          </div>
        </div>

        {selectedBone && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={onClear}
            className="pointer-events-auto flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 px-2.5 py-1.5 rounded-lg hover:bg-white/8 transition-all"
          >
            <RotateCcw size={11} />
            Ștergeți selecția
          </motion.button>
        )}
      </motion.div>

      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <SkeletonCanvas selectedBone={selectedBone} onBoneSelect={onBoneSelect} />
      </div>

      {/* Center label when nothing selected */}
      {!selectedBone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/4 border border-white/8 backdrop-blur-sm">
            <Info size={12} className="text-cyan-400" />
            <span className="text-xs text-slate-400">Schelet Uman 3D Interactiv — Selectați un os</span>
          </div>
        </motion.div>
      )}

      {/* Diagnosis Panel */}
      <DiagnosisPanel bone={selectedBoneData} onClose={onClear} />

      {/* Vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#020810_100%)]" />
    </div>
  );
}
