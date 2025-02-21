// "use client";
// import Image from "next/image";
// import { blurhashToBase64 } from "blurhash-base64";
// import { motion } from "framer-motion";

// interface TestimonialAvatarProps {
//   src: string;
//   alt: string;
//   className?: string;
// }

// const TestimonialAvatar: React.FC<TestimonialAvatarProps> = ({
//   src,
//   alt,
//   className = "",
// }) => (
//   <motion.div
//     whileHover={{ scale: 1.1, rotate: 5 }}
//     className={`rounded-full overflow-hidden border-2 border-white ${className}`}
//   >
//     <Image
//       src={src}
//       alt={alt}
//       width={50}
//       height={50}
//       className="w-12 h-12 object-cover"
//       placeholder="blur"
//       blurDataURL={blurhashToBase64("LQJ@LFJnp{-Uxuf6RjWVK5s:xGRj")}
//     />
//   </motion.div>
// );

// const TestimonialsHero = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="flex items-center gap-2 p-2 pl-6 pr-4 z-20 bg-[#F8FAFC]/70 backdrop-blur-sm rounded-full"
//     >
//       <div className="flex flex-col">
//         <span className="font-bold text-sm">4.5 Ratings+</span>
//         <span className="text-xs">Trusted by over 150 Customers</span>
//       </div>
//       {/* Avatars Stack */}
//       <div className="flex -space-x-3">
//         <TestimonialAvatar
//           src="https://randomuser.me/api/portraits/men/91.jpg"
//           alt="Customer testimonial avatar 1"
//         />
//         <TestimonialAvatar
//           src="https://randomuser.me/api/portraits/women/23.jpg"
//           alt="Customer testimonial avatar 2"
//         />
//         <TestimonialAvatar
//           src="https://randomuser.me/api/portraits/men/69.jpg"
//           alt="Customer testimonial avatar 3"
//         />
//         <TestimonialAvatar
//           src="https://randomuser.me/api/portraits/women/44.jpg"
//           alt="Customer testimonial avatar 4"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default TestimonialsHero;
