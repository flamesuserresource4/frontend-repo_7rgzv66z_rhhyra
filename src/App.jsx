import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { CalendarDays, MapPin, Star } from 'lucide-react';
import Hero from './components/Hero';
import Events from './components/Events';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 20));
    return () => unsub();
  }, [scrollY]);

  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white">
      {/* Animated Navbar */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(10,15,31,0.75)' : 'rgba(10,15,31,0)',
          backdropFilter: scrolled ? 'blur(8px)' : 'blur(0px)',
          paddingTop: scrolled ? 8 : 16,
          paddingBottom: scrolled ? 8 : 16,
        }}
        className="fixed inset-x-0 top-0 z-40"
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold">
            <Star className="text-yellow-300" size={18} /> SFS Synergia 2025
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#events" className="hover:text-blue-200">Events</a>
            <a href="#schedule" className="hover:text-blue-200">Schedule</a>
            <a href="#gallery" className="hover:text-blue-200">Gallery</a>
            <a href="#sponsors" className="hover:text-blue-200">Sponsors</a>
            <a href="#register" className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2">Register</a>
          </div>
        </div>
      </motion.nav>

      <main>
        <Hero />
        <AboutSection />
        <Events />
        <ScheduleVenue />
        <GallerySection />
        <SponsorsSection />
        <Registration />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}

const AboutSection = () => (
  <section id="about" className="bg-[#0b1224] py-16">
    <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight">About Synergia</h2>
        <p className="mt-3 text-blue-200/90">
          SFS Synergia is a two-day celebration of student potential — where innovation, creativity, and collaboration take center stage. Hosted by St. Francis De Sales School, Guwahati, the festival brings together young minds to learn, compete, and grow.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white/5 p-4 border border-white/10">
            <CalendarDays className="text-blue-300" />
            <p className="mt-2 text-sm text-blue-200/80">Two immersive days of action and learning.</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4 border border-white/10">
            <p className="font-semibold">Mission</p>
            <p className="mt-2 text-sm text-blue-200/80">Inspire curiosity, spark collaboration, celebrate excellence.</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4 border border-white/10">
            <p className="font-semibold">Theme</p>
            <p className="mt-2 text-sm text-blue-200/80">Together We Think | Together We Thrive</p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-yellow-300/10 p-1">
        <div className="rounded-2xl bg-[#0a0f1f] p-6 border border-white/10">
          <ol className="relative border-l border-blue-500/40 ml-3 space-y-6">
            <li className="ml-4">
              <div className="absolute -left-2.5 h-5 w-5 rounded-full border-2 border-blue-400 bg-[#0a0f1f]" />
              <p className="text-sm text-blue-200">Kickoff & Opening Ceremony</p>
            </li>
            <li className="ml-4">
              <div className="absolute -left-2.5 h-5 w-5 rounded-full border-2 border-indigo-400 bg-[#0a0f1f]" />
              <p className="text-sm text-blue-200">Competitions & Workshops</p>
            </li>
            <li className="ml-4">
              <div className="absolute -left-2.5 h-5 w-5 rounded-full border-2 border-yellow-300 bg-[#0a0f1f]" />
              <p className="text-sm text-blue-200">Showcase & Awards</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
);

const ScheduleVenue = () => (
  <section id="schedule" className="bg-[#0a0f1f] py-16">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight">Schedule</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">Day 1 • 11 Nov</p>
              <ul className="mt-3 space-y-2 text-sm text-blue-200/90">
                <li>09:00 — Inauguration</li>
                <li>10:00 — Hackathon Begins</li>
                <li>11:00 — Debate Qualifiers</li>
                <li>13:00 — Quiz Prelims</li>
                <li>16:00 — Art Attack</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">Day 2 • 12 Nov</p>
              <ul className="mt-3 space-y-2 text-sm text-blue-200/90">
                <li>09:00 — Hackathon Finals</li>
                <li>10:30 — Debate Finals</li>
                <li>12:00 — Quiz Finals</li>
                <li>14:00 — Music Jam</li>
                <li>17:00 — Awards & Closing</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-blue-200/90">
            Travel & Stay: Nearby hotels and transit are available around Christian Basti, Guwahati. Assistance desk on campus for outstation schools.
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold flex items-center gap-2"><MapPin className="text-yellow-300" /> Venue</h3>
          <p className="text-blue-200/90 mt-1">St. Francis De Sales School, Guwahati</p>
          <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="SFS Map"
              className="h-full w-full"
              src="https://www.google.com/maps?q=St.+Francis+De+Sales+School,+Guwahati&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GallerySection = () => (
  <section id="gallery" className="bg-[#0b1224] py-16">
    <div className="mx-auto max-w-7xl px-6">
      <h2 className="text-3xl font-extrabold tracking-tight">Gallery & Highlights</h2>
      <p className="mt-2 text-blue-200/80">Snapshots from previous editions</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {[1,2,3,4,5,6,7,8].map((i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10">
            <img
              src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=60&sat=-50&ixid=${i}`}
              alt="Festival highlight"
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SponsorsSection = () => (
  <section id="sponsors" className="bg-[#0a0f1f] py-16">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Sponsors & Prizes</h2>
          <p className="mt-2 text-blue-200/80">Prize Pool: ₹1.25 Lakh+</p>
        </div>
        <a href="#contact" className="rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-4 py-2 text-black font-medium">Become a Sponsor</a>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="flex items-center gap-10 animate-[sponsor_16s_linear_infinite] will-change-transform">
          {['TechNova','EduSpark','CodeVerse','PixelArt','InnoLabs','DataWave','SoundBeat'].map((name, idx) => (
            <div key={idx} className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-blue-100">
              {name}
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes sponsor { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  </section>
);

const FAQSection = () => (
  <section id="faq" className="bg-[#0b1224] py-16">
    <div className="mx-auto max-w-4xl px-6">
      <h2 className="text-3xl font-extrabold tracking-tight">FAQ</h2>
      <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
        {[
          { q: 'Who can participate?', a: 'Students from classes 6–12 from any recognized school can participate.' },
          { q: 'How to register for multiple events?', a: 'Submit the form separately for each event. Team events require team details at the venue.' },
          { q: 'Is accommodation available?', a: 'Assistance will be provided for outstation schools. Contact us for details.' },
        ].map((item, idx) => (
          <details key={idx} className="group p-5">
            <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
              {item.q}
              <span className="text-blue-200 group-open:rotate-180 transition">⌄</span>
            </summary>
            <p className="mt-2 text-sm text-blue-200/90">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default App;
