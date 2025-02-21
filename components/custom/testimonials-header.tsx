// "use client";
// import Image from "next/image";
// import { containerVariants, itemVariants } from "@/lib/framer-variants";
// import { motion, useInView } from "framer-motion";
// import { FaAward } from "react-icons/fa";
// import { blurhashToBase64 } from "blurhash-base64";
// import { useRef } from "react";

// const HighlightedText = ({ children }: { children: React.ReactNode }) => (
//   <span className="inline-flex px-1 text-slate-900 bg-gradient-to-r from-yellow-400 to-yellow-500">
//     {children}
//   </span>
// );

// const TestimonialsHeader = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={containerVariants}
//       className="z-20"
//     >
//       <div className="container flex flex-col items-center mx-auto space-y-6">
//         <motion.div
//           variants={itemVariants}
//           className="flex w-full items-center justify-center gap-2 md:mb-4"
//         >
//           <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent to-yellow-400" />
//           <FaAward className="w-12 h-12 text-yellow-500" />
//           <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-yellow-400 to-transparent" />
//         </motion.div>

//         <motion.h2
//           variants={itemVariants}
//           className="flex flex-wrap tracking-tighter justify-center gap-1.5 text-xl md:text-3xl font-bold text-center text-slate-900 w-full lg:max-w-2xl xl:max-w-4xl"
//         >
//           <span>{`"From`}</span>
//           <HighlightedText>legal permits</HighlightedText>
//           <span>via</span>
//           <HighlightedText>planning and construction</HighlightedText>
//           <span>to</span>
//           <HighlightedText>ready to move in.</HighlightedText>
//           <span>Nordhaven is your</span>
//           <HighlightedText>all-in-one solution</HighlightedText>
//           <span>for building your</span>
//           <HighlightedText>dream home</HighlightedText>
//           <span>{`"`}</span>
//         </motion.h2>

//         <motion.div
//           variants={itemVariants}
//           className="flex justify-center items-center space-x-3"
//         >
//           <Image
//             src="https://randomuser.me/api/portraits/men/32.jpg"
//             alt="Leroy Jenkins"
//             width={80}
//             height={80}
//             className="w-10 h-10 md:w-14 md:h-14 bg-center bg-cover rounded-full shadow-xl"
//             placeholder="blur"
//             blurDataURL={blurhashToBase64("LQJ@LFJnp{-Uxuf6RjWVK5s:xGRj")}
//           />
//           <div>
//             <p className="leading-tight text-slate-900">Leroy Jenkins</p>
//             <p className="text-xs md:text-sm leading-tight text-muted-foreground">
//               {`One of Nordhaven's first customers`}
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default TestimonialsHeader;
