// "use client";

// import { useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { containerVariants, itemVariants } from "@/lib/framer-variants";
// import { scrollToSection } from "@/lib/utils";
// import { useInView, motion } from "framer-motion";
// import { Flower2, ArrowRight, Phone } from "lucide-react";

// const CallToAction = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const stats = [
//     {
//       title: "Faster Build Time",
//       value: "30%",
//       gradient: "from-yellow-400 to-yellow-500",
//     },
//     {
//       title: "Energy Savings",
//       value: "40%",
//       gradient: "from-yellow-500 to-yellow-600",
//     },
//     {
//       title: "Less Waste",
//       value: "50%",
//       gradient: "from-yellow-400 to-yellow-500",
//     },
//     {
//       title: "Customizable",
//       value: "100%",
//       gradient: "from-yellow-500 to-yellow-600",
//     },
//   ];

//   return (
//     <motion.section
//       id="call-to-action"
//       ref={ref}
//       aria-label="Call to Action Section"
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={containerVariants}
//       className="relative flex flex-col min-h-[80vh] items-center justify-center py-4 md:py-10  bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"
//     >
//       <motion.div className="container mx-auto relative z-20">
//         <div className="flex flex-col items-center max-w-4xl mx-auto text-center space-y-4 md:space-y-8">
//           <motion.div
//             variants={itemVariants}
//             className="flex w-full items-center justify-center gap-2"
//           >
//             <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent to-slate-600" />
//             <Flower2 className="w-12 h-12 p-2 rounded-full bg-yellow-400 text-slate-900" />
//             <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-slate-600 to-transparent" />
//           </motion.div>

//           <motion.h2
//             variants={itemVariants}
//             className="text-2xl md:text-5xl md:pb-2 font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
//           >
//             {`Let's Build Your Dream Home Together`}
//           </motion.h2>

//           <motion.p
//             variants={itemVariants}
//             className="text-sm sm:text-base md:text-lg font-normal z-20 tracking-tight text-balance leading-relaxed text-slate-800"
//           >
//             {`Experience the future of home building with our innovative modular
//             solutions. From design to completion, we're committed to creating
//             your perfect space with efficiency, sustainability, and style.`}
//           </motion.p>

//           <motion.div
//             variants={containerVariants}
//             className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8"
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05 }}
//                 className={`p-2 cursor-default bg-slate-50 backdrop-blur-sm md:p-6 rounded-xl border border-[#FFFFFF] ${stat.gradient} text-white shadow-lg shadow-[rgba(255,255,255,0.2)] hover:shadow-[rgba(255,255,255,0.5)] transition-all duration-300`}
//               >
//                 <p className="text-xl text-slate-900 md:text-3xl font-bold md:mb-1">
//                   {stat.value}
//                 </p>
//                 <p className="text-xs text-slate-900 md:text-base font-medium opacity-90">
//                   {stat.title}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col sm:flex-row gap-4 mt-8"
//           >
//             <Button
//               onClick={() => scrollToSection("contact")}
//               size="lg"
//               variant="default"
//               className="w-auto md:w-[200px] bg-slate-50 text-slate-900 hover:bg-yellow-50 font-semibold p-6 text-sm sm:text-base flex items-center gap-2 transition-all duration-100 hover:scale-95 shadow-md"
//             >
//               Start Your Journey
//               <ArrowRight className="w-5 h-5" />
//             </Button>

//             <Button
//               onClick={() => scrollToSection("contact")}
//               variant="default"
//               size="lg"
//               className="w-auto md:w-[200px] bg-slate-50 text-slate-900 hover:bg-yellow-50 font-semibold p-6 text-sm sm:text-base flex items-center gap-2 transition-all duration-100 hover:scale-95 shadow-md"
//             >
//               <Phone className="w-5 h-5" />
//               Schedule a Call
//             </Button>
//           </motion.div>
//         </div>
//         <p className="text-xs text-center text-gray-500 mt-8">
//           Transparent pricing. No obligations. Clear, actionable outcomes.
//         </p>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default CallToAction;
