"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { RiTelegram2Fill } from "react-icons/ri";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    action: "",
    notes: "",
  });

  const BOT_TOKEN = "6925559864:AAG5RERmJmYYhUphhDoI1jk2OtYAi0IvwfE"; 
  const CHAT_ID = "892568030"; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
      📩 *Yangi Murojaat!*\n
      🏷 *Ismi:* ${formData.name}
      ✉️ *Email:* ${formData.email}
      🏠 *Maqsadi:* ${formData.action}
      📝 *Izoh:* ${formData.notes}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      alert("Muvaffaqiyatli jo‘natildi!");
      setFormData({ name: "", email: "", action: "", notes: "" });
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      alert("Xabar jo‘natishda xatolik yuz berdi!");
    }
  };

  return (
   <div className="flex flex-col w-full h-full pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16">
      <motion.h2
        className="mt-6 mb-4 text-xl sm:text-2xl xl:text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 via-yellow-500 to-gray-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
       Biznesingizni raqamlashtirishga tayyormisiz?
      </motion.h2>
      <motion.p
        className="text-xs sm:text-sm text-zinc-400 mb-4 sm:mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
          Bizning IT yechimlarimiz orqali kompaniyangizni yangi bosqichga olib chiqing. Dasturiy ta&apos;minot ishlab chiqish, veb-sayt yaratish va avtomatlashtirish xizmatlarimiz sizga samaradorlikni oshirishga yordam beradi.

      </motion.p>

      <motion.form
        className="flex flex-col gap-3 sm:gap-4"
        onSubmit={handleSubmit} 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="name" className="text-sm text-yellow-500">
              Ismingiz
            </Label>
            <Input
              id="name"
              placeholder="Ism va familiyangizni kiriting"
              value={formData.name}
              onChange={handleChange} 
              required
              className="bg-zinc-800 text-slate-50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700 placeholder:text-zinc-600"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="email" className="text-sm text-yellow-500">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Emailingizni kiriting"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-zinc-800 text-slate-50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700 placeholder:text-zinc-600"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="action" className="text-sm text-yellow-500">
            Sizga qanday xizmat kerak?
          </Label>
          <Input
            id="action"
            placeholder="Veb-sayt yaratish, CRM tizimi, Mobil ilova..."
            value={formData.action}
            onChange={handleChange}
            required
            className="bg-zinc-800 text-slate-50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700 placeholder:text-zinc-600"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="notes" className="text-sm text-yellow-500">
            Qo&apos;shimcha ma&apos;lumot
          </Label>
          <Textarea
            id="notes"
            placeholder="Biznesingiz uchun qanday IT yechim kerakligini yozing..."
            value={formData.notes}
            onChange={handleChange}
            required
            className="bg-zinc-800 text-slate-50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700 h-24 sm:h-32 md:h-40 resize-none placeholder:text-zinc-600"
          />
        </div>

        <Button
          type="submit"
          className="mb-6 w-full sm:w-1/3 bg-yellow-500 text-zinc-900 hover:bg-yellow-400 font-medium p-4 text-sm rounded-md transition-all duration-200 mt-4"
        > 
          Yuborish
          <RiTelegram2Fill className="w-4 h-4 sm:w-5 sm:h-5 mr-2 " />
        </Button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
