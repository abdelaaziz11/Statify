import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import morroco from '../../Assests/maroc-logo.png';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-12 px-6 md:px-[10%] bg-[#131b2f] border-t border-white/10 mt-auto gap-12 md:gap-0 text-center md:text-left">
      <div className="flex flex-col gap-6 items-center md:items-start">
        <h1 className="text-slate-50 text-3xl font-heading font-bold bg-gradient-to-r from-indigo-400 to-sky-400 text-transparent bg-clip-text m-0">
          Statify
        </h1>
        <ul className="list-none p-0 flex flex-col items-center md:items-start gap-4 m-0">
          <li>
            <a href="mailto:Bouayadihamid@gmail.com" className="group text-slate-400 text-[15px] flex items-center gap-3 transition-all duration-300 hover:text-slate-50 hover:-translate-y-1 md:hover:translate-y-0 md:hover:translate-x-1">
              <Mail className="text-[18px] text-sky-500 transition-transform duration-300 group-hover:scale-125" />
              Gmail
            </a>
          </li>
          <li>
            <a href="linkedin.com/in/mounim-nadir-b6575b27a" className="group text-slate-400 text-[15px] flex items-center gap-3 transition-all duration-300 hover:text-slate-50 hover:-translate-y-1 md:hover:translate-y-0 md:hover:translate-x-1">
              <FaLinkedin className="text-[18px] text-sky-500 transition-transform duration-300 group-hover:scale-125" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://x.com/AbdelKhouda" className="group text-slate-400 text-[15px] flex items-center gap-3 transition-all duration-300 hover:text-slate-50 hover:-translate-y-1 md:hover:translate-y-0 md:hover:translate-x-1">
              <FaTwitter className="text-[18px] text-sky-500 transition-transform duration-300 group-hover:scale-125" />
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img
          src={morroco}
          alt="logomoroccoimage"
          className="h-[60px] w-auto opacity-80 transition-opacity duration-300 hover:opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
        />
        <p className="text-slate-400 text-[13px] text-center m-0 max-w-[250px] leading-relaxed">
          Copyright © 2024 Statify Team.<br />All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
