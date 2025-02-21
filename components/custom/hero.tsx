"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { RiTelegram2Fill } from "react-icons/ri";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-1 w-full h-screen min-h-screen items-center justify-center"
      role="banner"
      aria-label="Hero section"
      id="hero"
    >
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div
        className="relative flex flex-col justify-center w-full h-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-xs md:text-base font-bold z-20 tracking-[0.2em] uppercase
            text-[#F8FAFC] max-w-full md:max-w-[80%] lg:max-w-[60%]"
        >
          IT yechimlar orqali biznesingizni rivojlantiring!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6rem] 
            font-bold text-[#F8FAFC] z-20 tracking-tight leading-[1.1] sm:leading-[1] 
            mt-3 sm:mt-4 mb-8 sm:mb-12 drop-shadow-2xl"
        >
          Biznesingiz <br className="hidden sm:block" /> Uchun{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">
            IT Yechimlar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg font-normal z-20 tracking-tight 
            max-w-[95%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] xl:max-w-[30%]
            leading-relaxed text-[#F8FAFC]/90"
        >
          Telegram botlar, veb-saytlar va mobil ilovalar yaratish – barchasi bitta joyda. Biznesingizni avtomatlashtirish va onlayn ko‘rinishingizni kuchaytirish uchun mutaxassislar jamoasi!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center 
            justify-between mt-8 sm:mt-12 z-20 w-full"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              onClick={() => (window.location.href = "tel:+998901234567")} 
              variant="default"
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-yellow-500 text-slate-900 
                font-semibold px-4 sm:px-6 py-5 sm:py-6 text-sm sm:text-base
                transition-all duration-100 hover:scale-95"
            >
              Biz bilan bog&apos;lanish
              <PhoneCall/>
            </Button>

            <Button
              variant="default"
              className="w-full sm:w-auto bg-[#F8FAFC] hover:bg-[#F8FAFC]/90 text-slate-900 
                font-semibold px-4 sm:px-6 py-5 sm:py-6 text-sm sm:text-base
                transition-all duration-100 hover:scale-95"
              onClick={() => window.open("https://t.me/OneSystem_uz", "_blank")}
            >
              Batafsil
              <RiTelegram2Fill/>
            </Button>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
