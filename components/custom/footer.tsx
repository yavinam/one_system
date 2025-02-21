"use client";

import { scrollToSection } from "@/lib/utils";
import { menuItems } from "@/lib/data";

import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaTelegram
} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <motion.footer
      className="flex flex-col items-center justify-center py-6 md:py-12 bg-zinc-900 relative overflow-hidden text-center"
      aria-label="Footer"
    >
      <h2 className=" text-[40px] md:text-[140px] font-extrabold tracking-tight bg-gradient-to-r from-zinc-800 to-yellow-500 bg-clip-text text-transparent">
        OneSystem
      </h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-slate-50 mt-4 font-extrabold">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.section)}
            className="text-sm md:text-base text-slate-50 hover:text-yellow-500 hover:underline decoration-yellow-500 transition-all duration-150 cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-6 md:gap-8 mt-6">
        <a href="https://www.instagram.com/onesystem.uz?igsh=MXM2dnVzN2Vqdm8yMQ==" target="_blank" rel="noopener noreferrer">
          <RiInstagramFill className="w-8 h-8 text-slate-50 hover:text-yellow-500 transition-all duration-150 cursor-pointer" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="w-8 h-8 text-slate-50 hover:text-yellow-500 transition-all duration-150 cursor-pointer" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <IoLogoYoutube className="w-8 h-8 text-slate-50 hover:text-yellow-500 transition-all duration-150 cursor-pointer" />
        </a>
        <a href="https://t.me/OneSystem_uz" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="w-8 h-8 text-slate-50 hover:text-yellow-500 transition-all duration-150 cursor-pointer" />
        </a>
      </div>

      <p className="mt-6 text-sm text-slate-400">
        © {currentYear} OneSystem. Barcha huquqlar himoyalangan.
      </p>
    </motion.footer>
  );
};

export default Footer;
