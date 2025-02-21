"use client";
import ContactForm from "@/components/custom/contact-form";
import { motion } from "framer-motion";
import Image from "next/image";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      id="contact"
      aria-label="Contact"
      className="flex h-[80vh] w-full bg-zinc-900"
    >
      <motion.div
        className="hidden lg:block relative w-1/2 h-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/back-2.jpg"
          alt="image"
          layout="fill" 
          objectFit="cover" 
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/30 to-transparent" />
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 bg-zinc-900 p-8 flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="w-full">
          <ContactForm />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
