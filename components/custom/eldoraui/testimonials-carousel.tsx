// "use client";

// import Image from "next/image";
// import { Marquee } from "@/components/custom/eldoraui/marquee";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";
// import { blurhashToBase64 } from "blurhash-base64";

// export function Highlight({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <span
//       className={cn(
//         "bg-gradient-to-r from-yellow-400 to-yellow-500 p-1 py-0.5 font-bold text-slate",
//         className
//       )}
//     >
//       {children}
//     </span>
//   );
// }

// export interface TestimonialCardProps
//   extends React.HTMLAttributes<HTMLDivElement> {
//   name: string;
//   role: string;
//   img?: string;
//   description: React.ReactNode;
//   className?: string;
// }

// export function TestimonialCard({
//   description,
//   name,
//   img,
//   role,
//   className,
//   ...props // Capture the rest of the props
// }: TestimonialCardProps) {
//   return (
//     <div
//       className={cn(
//         "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
//         // light styles
//         " border border-neutral-200 bg-white",
//         // dark styles
//         "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
//         className
//       )}
//       {...props}
//     >
//       <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
//         {description}
//         <div className="flex flex-row py-1">
//           <Star className="size-4 fill-yellow-500 text-yellow-500" />
//           <Star className="size-4 fill-yellow-500 text-yellow-500" />
//           <Star className="size-4 fill-yellow-500 text-yellow-500" />
//           <Star className="size-4 fill-yellow-500 text-yellow-500" />
//           <Star className="size-4 fill-yellow-500 text-yellow-500" />
//         </div>
//       </div>

//       <div className="flex w-full select-none items-center justify-start gap-5">
//         <Image
//           width={40}
//           height={40}
//           src={img || ""}
//           alt={name}
//           className="size-10 rounded-full ring-1 ring-border ring-offset-4"
//           placeholder="blur"
//           blurDataURL={blurhashToBase64("LQJ@LFJnp{-Uxuf6RjWVK5s:xGRj")}
//         />

//         <div>
//           <p className="font-medium text-neutral-500">{name}</p>
//           <p className="text-xs font-normal text-muted-foreground">{role}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// const testimonials = [
//   {
//     name: "Alex Rivera",
//     role: "Los Angeles, CA",
//     img: "https://randomuser.me/api/portraits/men/91.jpg",
//     description: (
//       <p>
//         The team made the entire process so simple, and the final result was
//         beyond our expectations.
//         <Highlight>We couldn&apos;t be happier!</Highlight>
//       </p>
//     ),
//   },
//   {
//     name: "Samantha Lee",
//     role: "Oslo, Norway",
//     img: "https://randomuser.me/api/portraits/women/12.jpg",
//     description: (
//       <p>
//         <Highlight>Fast, efficient, and beautiful.</Highlight> We&apos;re
//         thrilled with our new modular home!
//       </p>
//     ),
//   },
//   {
//     name: "Raj Patel",
//     role: "New York, NY",
//     img: "https://randomuser.me/api/portraits/men/45.jpg",
//     description: (
//       <p>
//         I couldn&apos;t believe{" "}
//         <Highlight>how quickly the home was completed!</Highlight> I&apos;m
//         recommending this company to all my friends!
//       </p>
//     ),
//   },
//   {
//     name: "Emily Chen",
//     role: "San Francisco, CA",
//     img: "https://randomuser.me/api/portraits/women/83.jpg",
//     description: (
//       <p>
//         The attention to <Highlight>detail and sustainable approach</Highlight>{" "}
//         really sets them apart. Highly recommend!
//       </p>
//     ),
//   },
//   {
//     name: "Michael Brown",
//     role: "Boston, MA",
//     img: "https://randomuser.me/api/portraits/men/1.jpg",
//     description: (
//       <p>
//         <Highlight>From the design phase to delivery</Highlight> the
//         professionalism and attention to detail were outstanding. We love our
//         new home!
//       </p>
//     ),
//   },
//   {
//     name: "Linda Wu",
//     role: "Chicago, IL",
//     img: "https://randomuser.me/api/portraits/women/5.jpg",
//     description: (
//       <p>
//         The team&apos;s commitment to <Highlight>sustainability</Highlight> and
//         eco-friendly materials is truly admirable.
//       </p>
//     ),
//   },
//   {
//     name: "Carlos Gomez",
//     role: "Miami, FL",
//     img: "https://randomuser.me/api/portraits/men/14.jpg",
//     description: (
//       <p>
//         This was our first time building a modular home,
//         <Highlight>
//           and the team made everything so easy to understand. The result is
//           stunning!
//         </Highlight>{" "}
//       </p>
//     ),
//   },
//   {
//     name: "Aisha Khan",
//     role: "Copenhagen, Denmark",
//     img: "https://randomuser.me/api/portraits/women/56.jpg",
//     description: (
//       <p>
//         <Highlight>
//           I couldn&apos;t believe how quickly the home was completed without
//           sacrificing quality.
//         </Highlight>{" "}
//         I&apos;m recommending this company to all my friends!
//       </p>
//     ),
//   },
//   {
//     name: "Tom Chen",
//     role: "Warsaw, Poland",
//     img: "https://randomuser.me/api/portraits/men/18.jpg",
//     description: (
//       <p>
//         The team&apos;s commitment to <Highlight>sustainability</Highlight> and
//         eco-friendly materials is truly admirable.
//       </p>
//     ),
//   },
//   {
//     name: "Sofia Patel",
//     role: "Stockholm, Sweden",
//     img: "https://randomuser.me/api/portraits/women/73.jpg",
//     description: (
//       <p>
//         This was our first time building a modular home, and the team made
//         everything so easy to understand
//         <Highlight>The result is stunning!</Highlight>{" "}
//       </p>
//     ),
//   },
// ];

// export function TestimonialsCarousel() {
//   return (
//     <section id="testimonials" className="container z-20">
//       <motion.h3
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="mx-auto max-w-lg my-4 text-balance text-center text-lg font-medium tracking-tight text-foreground/80"
//       >
//         Check what other customers say about Nordhaven
//       </motion.h3>
//       <div className="relative max-h-screen overflow-hidden">
//         <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
//           {Array(Math.ceil(testimonials.length / 3))
//             .fill(0)
//             .map((_, i) => (
//               <Marquee
//                 vertical
//                 key={i}
//                 className={cn({
//                   "[--duration:60s]": i === 1,
//                   "[--duration:30s]": i === 2,
//                   "[--duration:70s]": i === 3,
//                 })}
//               >
//                 {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       delay: Math.random() * 0.8,
//                       duration: 1.2,
//                     }}
//                   >
//                     <TestimonialCard {...card} />
//                   </motion.div>
//                 ))}
//               </Marquee>
//             ))}
//         </div>
//         <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-slate-50 from-20%"></div>
//         <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-slate-50 from-20%"></div>
//       </div>
//     </section>
//   );
// }
