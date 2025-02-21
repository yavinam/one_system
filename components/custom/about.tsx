"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { containerVariants, itemVariants } from "@/lib/framer-variants";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CgWebsite } from "react-icons/cg";
import { SiVorondesign } from "react-icons/si";
import { blurhashToBase64 } from "blurhash-base64";
import { RiTelegram2Fill } from "react-icons/ri";
import { TbDeviceMobileSearch } from "react-icons/tb";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Telegram bot",
      description: "Biz siz uchun maxsus Telegram botlar yaratamiz!",
      icon: <RiTelegram2Fill className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Web sayt",
      description: "Biznesingiz uchun zamonaviy va tezkor web saytlar yaratamiz.",
      icon: <CgWebsite className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Mobil ilova",
      description: "Android va iOS uchun moslashuvchan mobil ilovalar ishlab chiqamiz.",
      icon: <TbDeviceMobileSearch className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "Dizayn",
      description: "Professional UX/UI dizayn xizmatlari taklif qilamiz.",
      icon: <SiVorondesign className="w-10 h-10 text-yellow-400" />,
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Us"
      ref={ref}
      className="relative flex flex-col flex-1 min-h-screen items-center justify-center py-12 lg:py-0 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/back-1.jpg"
          alt="About background"
          fill
          className="object-cover object-center opacity-10"
          priority
          placeholder="blur"
          blurDataURL={blurhashToBase64("LQJ@LFJnp{-Uxuf6RjWVK5s:xGRj")}
        />
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center z-20 w-[90%] lg:w-[70%]"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="relative group hidden lg:block"
        >
          <Image
            src="/back-1.jpg"
            alt="Background image"
            width={800}
            height={800}
            placeholder="blur"
            blurDataURL={blurhashToBase64("LQJ@LFJnp{-Uxuf6RjWVK5s:xGRj")}
            className="w-[600px] h-[600px] hidden lg:block object-cover object-center rounded-[28px] absolute top-0 left-0 shadow-xl transition-transform duration-500"
          />
          <video
            src="/video/bag.mp4"
            width={800}
            height={800}
            autoPlay
            loop
            muted
            playsInline
            className="w-[600px] h-[600px] object-cover object-center rounded-[28px] relative shadow-xl transition-transform duration-500"
          ></video>
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-6">
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-3 py-1 text-sm text-white font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Biz haqimizda
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent"
          >
            Biz bilan biznesingizni keyingi bosqichga olib chiqing!
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg font-normal z-20 tracking-tight text-balance leading-relaxed text-muted-foreground"
          >
            Bizning IT yechimlarimiz orqali kompaniyangizni yangi bosqichga olib chiqing. Dasturiy ta&apos;minot ishlab chiqish, veb-sayt yaratish va avtomatlashtirish xizmatlarimiz sizga samaradorlikni oshirishga yordam beradi.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid gap-4 md:grid-cols-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-2 p-4 rounded-lg border border-transparent hover:border-yellow-400 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-yellow-500 flex flex-col items-center gap-2">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    {feature.icon}
                  </motion.div>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}

            <Button
              variant="default"
              className="w-auto md:w-[200px] bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-yellow-500 text-slate-900 
              font-semibold p-6 text-sm sm:text-base transition-all duration-100 hover:scale-95"
              onClick={() => window.location.href = "tel:+998911219015"}
            >
              Hoziroq bog&apos;laning!
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
