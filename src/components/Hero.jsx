import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, CalendarDays } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 40]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85]);

  const handleRegisterClick = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0f1f] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1fcc] via-[#0a0f1fa6] to-[#0a0f1f]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36">
        <motion.div style={{ y, opacity }} className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <CalendarDays size={16} className="text-blue-300" />
            <span className="text-blue-200">11–12 November 2025 • Guwahati</span>
          </div>
          <h1 className="font-black tracking-tight text-4xl sm:text-6xl md:text-7xl leading-tight">
            <span className="bg-gradient-to-r from-blue-300 via-sky-300 to-yellow-300 bg-clip-text text-transparent">Synergia 2025</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100/90 max-w-2xl">
            Together We Think | Together We Thrive. A two-day inter-school festival by St. Francis De Sales School, Guwahati — celebrating innovation, creativity, and collaboration.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={handleRegisterClick}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.02] hover:shadow-blue-600/40"
            >
              <Rocket size={18} />
              Register Now
            </button>
            <a href="#events" className="text-blue-200 hover:text-white">Explore Events →</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
