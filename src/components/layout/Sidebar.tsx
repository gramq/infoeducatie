import { motion } from 'framer-motion';
import { Activity, BookOpen, HelpCircle, Layers, Zap, Circle } from 'lucide-react';
import { NavSection } from '../../types';

interface SidebarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  selectedBone: string | null;
}

const navItems: { id: NavSection; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { id: 'hero', label: 'Explorator Schelet', icon: Layers },
  { id: 'glossary', label: 'Glosar Medical', icon: BookOpen },
  { id: 'quiz', label: 'Test Rapid', icon: HelpCircle },
];

const boneParts = [
  { id: 'skull', label: 'Skull' },
  { id: 'spine', label: 'Vertebral Column' },
  { id: 'ribcage', label: 'Ribcage' },
  { id: 'sternum', label: 'Sternum' },
  { id: 'pelvis', label: 'Pelvis' },
  { id: 'humerus', label: 'Humerus' },
  { id: 'radius_ulna', label: 'Radius & Ulna' },
  { id: 'femur', label: 'Femur' },
  { id: 'patella', label: 'Patella' },
  { id: 'tibia', label: 'Tibia & Fibula' },
];

export default function Sidebar({ activeSection, onNavigate, selectedBone }: SidebarProps) {
  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-64 flex-shrink-0 flex flex-col h-full bg-[#050d1a]/80 border-r border-cyan-900/40 backdrop-blur-xl z-20"
    >
      {/* Logo */}
      <div className="px-6 py-5 border-b border-cyan-900/30">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 rounded-lg bg-cyan-500/20 animate-pulse" />
            <Activity size={20} className="text-cyan-400 relative z-10" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg tracking-wide leading-none">InfoMed</h1>
            <span className="text-cyan-400 text-xs font-mono tracking-widest">3D</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 pt-5 flex-1 overflow-y-auto scrollbar-hide">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 mb-2">Navigare</p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <motion.button
              key={item.id}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/25'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <Icon size={16} className={isActive ? 'text-cyan-400' : 'text-slate-500'} />
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400"
                />
              )}
            </motion.button>
          );
        })}

        {/* Bone quick-select (only show in hero section) */}
        {activeSection === 'hero' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-5"
          >
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-3 mb-2">
              Selectați Os
            </p>
            {boneParts.map((bone) => (
              <motion.button
                key={bone.id}
                whileHover={{ x: 4 }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg mb-0.5 text-xs font-medium transition-all duration-200 ${
                  selectedBone === bone.id
                    ? 'bg-cyan-500/10 text-cyan-300'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                }`}
              >
                <Circle
                  size={6}
                  className={`fill-current ${selectedBone === bone.id ? 'text-cyan-400' : 'text-slate-600'}`}
                />
                {bone.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Stats footer */}
      <div className="px-4 py-4 border-t border-cyan-900/30 grid grid-cols-3 gap-2">
        {[
          { label: 'Oase', value: '206', icon: Layers },
          { label: 'Articulații', value: '360', icon: Zap },
          { label: 'Mușchi', value: '640', icon: Activity },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="text-center">
              <Icon size={12} className="text-cyan-600 mx-auto mb-1" />
              <p className="text-cyan-300 font-bold text-sm">{stat.value}</p>
              <p className="text-slate-600 text-xs">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </motion.aside>
  );
}
