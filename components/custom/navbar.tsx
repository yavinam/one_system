"use client";
import Image from "next/image";
import icon from "@/public/logo.png"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollVisibility from "@/hooks/useScrollVisibility";
import { scrollToSection } from "@/lib/utils";

import { MenuIcon } from "lucide-react";
import { menuItems } from "@/lib/data";
import Link from "next/link";

const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const itemVariants = {
  closed: { x: 20, opacity: 0 },
  open: { x: 0, opacity: 1 },
};

const Navbar = () => {
  const isVisible = useScrollVisibility();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.1 }}
        className={`fixed w-full top-0 left-0 bg-blend-color-dodge z-50 ${
          isVisible ? "bg-yellow-500/50" : "bg-transparent"
        } backdrop-blur-md duration-300`}
      >
        <div className="max-w-full flex justify-between items-center py-2 px-4 sm:px-6 lg:px-12">
          <Link href={"/"} className="flex items-center gap-2 md:p-2">
            <Image
              src={icon.src}
              alt="OneSystem Icon"
              width={64} // w-16 = 64px
              height={64} // h-16 = 64px
              className="w-14 h-14 md:w-13 md:h-13 lg:w-16 lg:h-16"
              onClick={() => router.push("/")}
              priority
            />
            <p
              className={`text-[20px] md:text-[35px] font-extrabold  ${
                isVisible ? "text-slate-900" : "text-white"
              }  tracking-tighter`}
            >
              OneSystem
            </p>
          </Link>

          <div className="hidden md:flex w-full justify-end items-center h-16 gap-4 md:gap-8">
            {menuItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`${
                  isVisible ? "text-slate-900" : "text-white"
                } hover:underline decoration-yellow-500 px-3 py-2 rounded-md text-[20px] md:text-[20px] font-extrabold transition-colors focus:outline-none`}
                aria-label={item.ariaLabel}
                tabIndex={0}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <MenuIcon className="w-6 h-6 text-yellow-500" />
            </motion.button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="absolute top-[72px] right-0 w-full h-screen bg-black backdrop-blur-md p-4 shadow-lg"
                >
                  <motion.div
                    className="flex flex-col gap-2"
                    variants={{
                      open: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                  >
                    {menuItems.map((item, index) => (
                      <motion.button
                        key={index}
                        variants={itemVariants}
                        onClick={() => {
                          scrollToSection(item.section);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full text-left text-white hover:bg-slate-900 px-4 py-3 rounded-md text-sm font-medium transition-colors focus:outline-none`}
                        aria-label={item.ariaLabel}
                        tabIndex={0}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
