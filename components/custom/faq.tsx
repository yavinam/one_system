// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { containerVariants, itemVariants } from "@/lib/framer-variants";

// const Faq = () => {
//   const [openItem, setOpenItem] = useState<number | null>(null);

//   const faqItems = [
//     {
//       question: "How customizable are your modular homes?",
//       answer:
//         "Our modular homes are highly customizable. You can choose from different layouts, sizes, and interior finishes to suit your lifestyle and preferences. We also offer additional options like energy-efficient upgrades, outdoor living spaces, and customizable façades.",
//     },
//     {
//       question: "What materials do you use for your homes?",
//       answer:
//         "We use sustainable, high-quality materials, such as FSC-certified Nordic timber, energy-efficient glass, and eco-friendly insulation. Every material is chosen to ensure durability, sustainability, and harmony with nature.",
//     },
//     {
//       question: "How long does it take to build and deliver a modular home?",
//       answer:
//         "On average, our modular homes take 8–12 weeks to manufacture, with an additional 2–4 weeks for on-site assembly and installation. Timelines may vary depending on your chosen customization options and location.",
//     },
//     {
//       question:
//         "Are your homes designed to withstand harsh weather conditions?",
//       answer:
//         "Absolutely. Our homes are engineered to handle Nordic climates, including snow loads, strong winds, and extreme temperatures. They meet or exceed local building codes for durability and safety.",
//     },
//     {
//       question: "Do you offer financing or payment plans?",
//       answer:
//         "Yes, we work with trusted financing partners to make your dream home affordable. Flexible payment plans are available, and we can assist you in finding the best financing option for your needs.",
//     },
//   ];

//   const handleToggle = (index: number) => {
//     setOpenItem(openItem === index ? null : index);
//   };

//   return (
//     <section
//       id="faq"
//       aria-label="Frequently Asked Questions"
//       className="py-20 lg:py-10 relative flex flex-col flex-1 w-full items-center justify-center"
//     >
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={containerVariants}
//         className="container flex flex-col justify-center items-center p-4 mx-auto md:p-8 space-y-8"
//       >
//         <motion.div
//           variants={itemVariants}
//           className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-1.5 text-sm text-white font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
//         >
//           Everything You Need to Know
//         </motion.div>

//         <motion.div
//           variants={itemVariants}
//           className="text-center space-y-4 mb-8"
//         >
//           <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//             Frequently Asked Questions
//           </h2>
//           <h3 className="text-base sm:text-lg md:text-xl font-normal z-20 tracking-tight text-balance leading-relaxed text-muted-foreground max-w-2xl mx-auto">
//             Answers to Your Questions About Our Modular Nordic Homes
//           </h3>
//         </motion.div>

//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col gap-4 sm:px-8 lg:px-12 xl:px-32 w-full max-w-4xl"
//         >
//           {faqItems.map((item, index) => (
//             <motion.div
//               key={index}
//               className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
//               initial={false}
//             >
//               <button
//                 onClick={() => handleToggle(index)}
//                 className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg"
//                 aria-expanded={openItem === index}
//               >
//                 <span className="font-medium text-gray-900">
//                   {item.question}
//                 </span>
//                 <motion.span
//                   animate={{ rotate: openItem === index ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="text-gray-500"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </motion.span>
//               </button>
//               <AnimatePresence>
//                 {openItem === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                   >
//                     <div className="px-6 py-4 text-gray-600">{item.answer}</div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Faq;
