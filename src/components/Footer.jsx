import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#091026] text-blue-100">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold text-lg">SFS Synergia 2025</h4>
          <p className="mt-2 text-sm text-blue-200/80 max-w-sm">
            Hosted by St. Francis De Sales School, Guwahati. Together we think, together we thrive.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href="https://instagram.com/sfssynergia" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 hover:bg-white/20">
              <Instagram size={16} /> @sfssynergia
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-white font-medium mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white" href="#home">Home</a></li>
            <li><a className="hover:text-white" href="#events">Events</a></li>
            <li><a className="hover:text-white" href="#register">Register</a></li>
            <li><a className="hover:text-white" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div id="contact">
          <h5 className="text-white font-medium mb-3">Contact</h5>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2"><Mail size={16} /> synergia@sfs.edu</div>
            <div className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 space-y-2">
            <input placeholder="Your email" className="w-full rounded-lg bg-white/10 px-3 py-2 placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Message" rows={3} className="w-full rounded-lg bg-white/10 px-3 py-2 placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2">Send</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm flex flex-col sm:flex-row items-center justify-between">
          <div>© 2025 St. Francis De Sales School. All rights reserved.</div>
          <div className="text-blue-200/80">Prize Pool: ₹1.25 Lakh+</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
