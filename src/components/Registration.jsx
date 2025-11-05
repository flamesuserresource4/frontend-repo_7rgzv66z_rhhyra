import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const EVENTS = [
  { id: 'debate', title: 'Debate', category: 'Creative' },
  { id: 'hackathon', title: 'Hackathon', category: 'Technical' },
  { id: 'quiz', title: 'Quiz', category: 'Technical' },
  { id: 'art', title: 'Art Attack', category: 'Cultural' },
  { id: 'music', title: 'Music Jam', category: 'Cultural' },
];

const Registration = () => {
  const [form, setForm] = useState({
    name: '',
    school: '',
    contact: '',
    category: '',
    eventId: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(() => {
    const total = 5;
    const complete = Object.values(form).filter(Boolean).length;
    return Math.round((complete / total) * 100);
  }, [form]);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Simulate async submit
    setTimeout(() => setSubmitted(true), 400);
  };

  return (
    <section id="register" className="relative bg-[#0b1224] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Registration</h2>
          <p className="mt-2 text-blue-200/80">Fill in your details to participate. You can register for multiple events individually.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-6">
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-blue-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 text-sm text-blue-200">Progress: {progress}%</div>
          </div>

          <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="mb-1 block text-sm text-blue-200">Full Name</label>
              <input
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-sm text-blue-200">School</label>
              <input
                value={form.school}
                onChange={(e) => update('school', e.target.value)}
                required
                placeholder="School name"
                className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-sm text-blue-200">Contact (Email or Phone)</label>
              <input
                value={form.contact}
                onChange={(e) => update('contact', e.target.value)}
                required
                placeholder="you@example.com / 98xxxxxx"
                className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-sm text-blue-200">Category</label>
              <select
                value={form.category}
                onChange={(e) => update('category', e.target.value)}
                required
                className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" className="bg-[#0b1224]">Select</option>
                <option value="Technical" className="bg-[#0b1224]">Technical</option>
                <option value="Cultural" className="bg-[#0b1224]">Cultural</option>
                <option value="Creative" className="bg-[#0b1224]">Creative</option>
              </select>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="mb-1 block text-sm text-blue-200">Event</label>
              <select
                value={form.eventId}
                onChange={(e) => update('eventId', e.target.value)}
                required
                className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" className="bg-[#0b1224]">Select an event</option>
                {EVENTS.map((e) => (
                  <option key={e.id} value={e.id} className="bg-[#0b1224]">
                    {e.title} • {e.category}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-1 sm:col-span-2 mt-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-medium shadow-lg shadow-blue-700/30 hover:shadow-blue-700/40"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6"
            onClick={() => setSubmitted(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b1224] p-6 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400" size={28} />
                <h3 className="text-xl font-bold">Registration Received!</h3>
              </div>
              <p className="mt-2 text-blue-100/90">
                Thank you for registering for Synergia 2025. We will contact you with further details and confirmations shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 w-full rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Registration;
