import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, Award } from 'lucide-react';

const EVENTS = [
  {
    id: 'debate',
    title: 'Debate',
    category: 'Creative',
    description:
      'Engage in high-impact discussions on contemporary topics. Teams argue for and against with logical clarity and persuasion.',
    rules: ['Teams of 2', 'Prep time: 15 minutes', 'Time limit per speaker: 3 minutes'],
    eligibility: 'Classes 9–12',
    prizes: 'Prizes worth ₹20,000',
  },
  {
    id: 'hackathon',
    title: 'Hackathon',
    category: 'Technical',
    description:
      'Build impactful solutions in 6 hours. Solve real challenges with code, design, and collaboration.',
    rules: ['Teams of 3–4', 'Any tech stack', 'Problem statements revealed on day of event'],
    eligibility: 'Classes 9–12',
    prizes: 'Prizes worth ₹40,000',
  },
  {
    id: 'quiz',
    title: 'Quiz',
    category: 'Technical',
    description:
      'A fast-paced, multi-round general + STEM quiz that tests wit, memory, and teamwork.',
    rules: ['Teams of 2', 'Buzzer rounds included', 'No electronic devices'],
    eligibility: 'Classes 8–12',
    prizes: 'Prizes worth ₹15,000',
  },
  {
    id: 'art',
    title: 'Art Attack',
    category: 'Cultural',
    description:
      'Unleash your creativity on canvas. Themes revealed on spot. Bring your favorite tools!',
    rules: ['Solo participation', 'Time: 90 minutes', 'Only eco-friendly materials'],
    eligibility: 'Classes 6–12',
    prizes: 'Prizes worth ₹10,000',
  },
  {
    id: 'music',
    title: 'Music Jam',
    category: 'Cultural',
    description:
      'Bands and solo artists bring the stage alive with rhythm and harmony. Backline provided.',
    rules: ['Solo or team up to 5', 'Time limit: 6 minutes', 'Originals encouraged'],
    eligibility: 'Classes 6–12',
    prizes: 'Prizes worth ₹20,000',
  },
];

const categories = ['All', 'Technical', 'Cultural', 'Creative'];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return EVENTS;
    return EVENTS.filter((e) => e.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="events" className="relative bg-gradient-to-b from-[#0a0f1f] to-[#0b1224] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Events</h2>
            <p className="mt-2 text-blue-200/80 max-w-2xl">Choose from technical, cultural, and creative challenges designed to inspire collaboration and excellence.</p>
          </div>
          <div className="flex items-center gap-3">
            <Filter className="text-blue-300" size={18} />
            <div className="flex rounded-full bg-white/10 p-1 backdrop-blur">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-sm transition ${
                    activeCategory === c ? 'bg-blue-600' : 'text-blue-200 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ev) => (
            <motion.div
              key={ev.id}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg shadow-xl hover:shadow-2xl hover:shadow-blue-950/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{ev.title}</h3>
                <span className="rounded-full bg-blue-600/20 text-blue-200 text-xs px-3 py-1">{ev.category}</span>
              </div>
              <p className="mt-3 text-blue-100/80 line-clamp-3">{ev.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setActive(ev)}
                  className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm shadow-md"
                >
                  View Details
                </button>
                <div className="inline-flex items-center gap-2 text-yellow-300">
                  <Award size={16} />
                  <span className="text-sm">{ev.prizes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 24 }}
              className="relative max-w-2xl w-full rounded-2xl border border-white/10 bg-[#0b1224] p-6 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-3 top-3 rounded-full bg-white/10 p-2 hover:bg-white/20"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="flex items-center justify-between pr-8">
                <h3 className="text-2xl font-bold">{active.title}</h3>
                <span className="rounded-full bg-blue-600/20 text-blue-200 text-xs px-3 py-1">{active.category}</span>
              </div>
              <p className="mt-3 text-blue-100/90">{active.description}</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-1">Rules</h4>
                  <ul className="list-disc ml-5 text-blue-100/80 text-sm space-y-1">
                    {active.rules.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Eligibility</h4>
                  <p className="text-blue-100/80 text-sm">{active.eligibility}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Prizes</h4>
                  <p className="text-yellow-300 text-sm">{active.prizes}</p>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <a href="#register" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-sm">Register</a>
                <button onClick={() => setActive(null)} className="rounded-full bg-white/10 px-5 py-2 text-sm">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;
