import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle, XCircle, ChevronRight, RotateCcw, Award, Zap } from 'lucide-react';
import { quizData } from '../../data/quizData';

type AnswerState = 'unanswered' | 'correct' | 'incorrect';

interface QuestionState {
  selected: number | null;
  state: AnswerState;
}

export default function QuizSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState<QuestionState[]>(
    quizData.map(() => ({ selected: null, state: 'unanswered' }))
  );
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const current = quizData[currentIndex];
  const currentState = questions[currentIndex];
  const answered = currentState.state !== 'unanswered';

  const score = questions.filter((q) => q.state === 'correct').length;
  const answeredCount = questions.filter((q) => q.state !== 'unanswered').length;

  const difficultyColors = {
    easy: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    medium: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    hard: 'text-red-400 bg-red-500/10 border-red-500/20',
  };

  function handleAnswer(optionIndex: number) {
    if (answered) return;
    const isCorrect = optionIndex === current.correct;
    const updated = [...questions];
    updated[currentIndex] = {
      selected: optionIndex,
      state: isCorrect ? 'correct' : 'incorrect',
    };
    setQuestions(updated);
    setShowExplanation(true);
  }

  function handleNext() {
    setShowExplanation(false);
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setQuizComplete(true);
    }
  }

  function handleReset() {
    setCurrentIndex(0);
    setQuestions(quizData.map(() => ({ selected: null, state: 'unanswered' })));
    setShowExplanation(false);
    setQuizComplete(false);
  }

  const pct = quizComplete ? Math.round((score / quizData.length) * 100) : 0;

  return (
    <section className="min-h-screen bg-[#030c18] px-8 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/5 mb-4">
            <HelpCircle size={13} className="text-cyan-400" />
            <span className="text-xs text-cyan-400 font-mono tracking-widest uppercase">Assessment</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-3">
            Quick{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Quiz
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Test your knowledge of human anatomy and musculoskeletal medicine.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {quizComplete ? (
            /* Results Screen */
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center"
            >
              <div className="bg-white/3 border border-white/10 rounded-2xl p-10 mb-6">
                {/* Score ring */}
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#0f2a40" strokeWidth="8" />
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke={pct >= 70 ? '#22d3ee' : pct >= 50 ? '#f59e0b' : '#ef4444'}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      strokeDashoffset={`${2 * Math.PI * 50 * (1 - pct / 100)}`}
                      initial={{ strokeDashoffset: `${2 * Math.PI * 50}` }}
                      animate={{ strokeDashoffset: `${2 * Math.PI * 50 * (1 - pct / 100)}` }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Award size={20} className="text-cyan-400 mb-1" />
                    <span className="text-3xl font-bold text-white">{pct}%</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {pct >= 80 ? 'Excellent Work!' : pct >= 60 ? 'Good Effort!' : 'Keep Studying!'}
                </h3>
                <p className="text-slate-400 mb-2">
                  You answered{' '}
                  <span className="text-cyan-300 font-semibold">{score}</span> out of{' '}
                  <span className="text-cyan-300 font-semibold">{quizData.length}</span> correctly.
                </p>

                {/* Per-question review */}
                <div className="mt-6 grid grid-cols-6 gap-2">
                  {questions.map((q, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full ${
                        q.state === 'correct' ? 'bg-emerald-500' : 'bg-red-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleReset}
                className="flex items-center gap-2 mx-auto px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-colors"
              >
                <RotateCcw size={16} />
                Try Again
              </motion.button>
            </motion.div>
          ) : (
            /* Question Card */
            <motion.div
              key={`q-${currentIndex}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-500 font-mono">
                  Question {currentIndex + 1} / {quizData.length}
                </span>
                <div className="flex items-center gap-2">
                  <Zap size={12} className="text-cyan-500" />
                  <span className="text-xs text-cyan-400 font-mono">
                    {score} / {answeredCount} correct
                  </span>
                </div>
              </div>

              <div className="h-1.5 bg-white/6 rounded-full mb-6 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex) / quizData.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Question */}
              <div className="bg-white/3 border border-white/10 rounded-2xl p-6 mb-4">
                <div className="flex items-start gap-3 mb-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center">
                    <HelpCircle size={15} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded-md border font-medium capitalize ${difficultyColors[current.difficulty]}`}>
                        {current.difficulty}
                      </span>
                    </div>
                    <p className="text-white font-medium text-base leading-relaxed">{current.question}</p>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-2">
                  {current.options.map((option, idx) => {
                    const isSelected = currentState.selected === idx;
                    const isCorrect = idx === current.correct;

                    let style = 'border-white/10 bg-white/4 text-slate-300 hover:border-cyan-700/50 hover:bg-white/8';
                    if (answered) {
                      if (isCorrect) {
                        style = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300';
                      } else if (isSelected && !isCorrect) {
                        style = 'border-red-500/50 bg-red-500/10 text-red-300';
                      } else {
                        style = 'border-white/6 bg-white/2 text-slate-500';
                      }
                    }

                    return (
                      <motion.button
                        key={idx}
                        whileHover={!answered ? { x: 4 } : {}}
                        whileTap={!answered ? { scale: 0.99 } : {}}
                        onClick={() => handleAnswer(idx)}
                        disabled={answered}
                        className={`w-full flex items-center gap-3 p-3.5 rounded-xl border text-sm font-medium text-left transition-all duration-200 ${style}`}
                      >
                        <span className="w-5 h-5 rounded-md border border-current/30 flex items-center justify-center text-xs font-mono flex-shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="flex-1">{option}</span>
                        {answered && isCorrect && <CheckCircle size={15} className="text-emerald-400 flex-shrink-0" />}
                        {answered && isSelected && !isCorrect && <XCircle size={15} className="text-red-400 flex-shrink-0" />}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mb-4"
                  >
                    <div className={`p-4 rounded-xl border ${
                      currentState.state === 'correct'
                        ? 'bg-emerald-950/50 border-emerald-800/40'
                        : 'bg-red-950/50 border-red-800/40'
                    }`}>
                      <div className="flex items-center gap-2 mb-1.5">
                        {currentState.state === 'correct' ? (
                          <CheckCircle size={14} className="text-emerald-400" />
                        ) : (
                          <XCircle size={14} className="text-red-400" />
                        )}
                        <p className={`text-xs font-semibold ${
                          currentState.state === 'correct' ? 'text-emerald-400' : 'text-red-400'
                        }`}>
                          {currentState.state === 'correct' ? 'Correct!' : 'Incorrect'}
                        </p>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">{current.explanation}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next button */}
              {answered && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNext}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all"
                >
                  {currentIndex < quizData.length - 1 ? (
                    <>Next Question <ChevronRight size={16} /></>
                  ) : (
                    <>View Results <Award size={16} /></>
                  )}
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
