// "use client";
// import { useState, useCallback, useEffect, useMemo, memo } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";
// import { ToastAction } from "@/components/ui/toast";
// import { motion } from "framer-motion";
// import { Mail } from "lucide-react";

// interface TimeState {
//   days: string;
//   hours: string;
//   minutes: string;
//   seconds: string;
// }

// interface TimeBlockProps {
//   value: string;
//   label: string;
// }

// const initialTimeState: TimeState = {
//   days: "00",
//   hours: "00",
//   minutes: "00",
//   seconds: "00",
// };

// // Memoized constants
// const TIME_CONSTANTS = {
//   DAY: 24 * 60 * 60 * 1000,
//   HOUR: 60 * 60 * 1000,
//   MINUTE: 60 * 1000,
//   SECOND: 1000,
// };

// // Memoized TimeBlock component
// const TimeBlock = memo(({ value, label }: TimeBlockProps) => (
//   <div className="flex flex-col gap-2 relative">
//     <motion.div
//       className="h-16 w-16 lg:w-20 lg:h-20 flex justify-between items-center bg-slate-50 rounded-lg  shadow-md"
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.2 }}
//     >
//       <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-transparent" />
//       <span className="lg:text-4xl text-3xl font-semibold text-slate-900">
//         {value}
//       </span>
//       <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-transparent" />
//     </motion.div>
//     <span className="text-sm md:text-md font-normal z-20 tracking-tight text-balance leading-relaxed text-slate-800 text-center capitalize">
//       {parseInt(value) === 1 ? label.slice(0, -1) : label}
//     </span>
//   </div>
// ));

// TimeBlock.displayName = "TimeBlock";

// const Timer3 = () => {
//   const { toast } = useToast();
//   const [countDownTime, setCountDownTime] =
//     useState<TimeState>(initialTimeState);
//   const [email, setEmail] = useState("");

//   const formatNumber = useCallback(
//     (num: number): string => (num >= 10 ? num.toString() : `0${num}`),
//     []
//   );

//   const calculateTime = useCallback(
//     (timeDifference: number): TimeState => {
//       if (timeDifference < 0) return initialTimeState;

//       return {
//         days: formatNumber(Math.floor(timeDifference / TIME_CONSTANTS.DAY)),
//         hours: formatNumber(
//           Math.floor(
//             (timeDifference % TIME_CONSTANTS.DAY) / TIME_CONSTANTS.HOUR
//           )
//         ),
//         minutes: formatNumber(
//           Math.floor(
//             (timeDifference % TIME_CONSTANTS.HOUR) / TIME_CONSTANTS.MINUTE
//           )
//         ),
//         seconds: formatNumber(
//           Math.floor(
//             (timeDifference % TIME_CONSTANTS.MINUTE) / TIME_CONSTANTS.SECOND
//           )
//         ),
//       };
//     },
//     [formatNumber]
//   );

//   const targetDate = useMemo(() => {
//     const today = new Date();
//     const target = new Date(
//       today.getFullYear(),
//       today.getMonth(),
//       today.getDate() + 6 // Add 6 days
//     );
//     // Set to 12:00 PM (noon)
//     target.setHours(12, 0, 0, 0);

//     return target.getTime();
//   }, []);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const currentTime = new Date().getTime();
//       const timeDifference = targetDate - currentTime;
//       setCountDownTime(calculateTime(timeDifference));
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [targetDate, calculateTime]);

//   const handleEmail = () => {
//     console.log(email);
//     if (!email || email.trim() === "") {
//       toast({
//         title: "Please enter your email first",
//         description: "Without an email, we cannot send you a discount code",
//       });
//     } else {
//       toast({
//         title: "✅ You have signed up for newsletter",
//         description: "Check your email for a discount code",
//         action: (
//           <ToastAction altText="Undo" onClick={() => {}}>
//             Undo
//           </ToastAction>
//         ),
//       });
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 0.5 }}
//       aria-label="Limited Time Offer"
//       className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 py-10 z-10 md:my-10 shadow-inner"
//     >
//       <div className="flex flex-col items-center justify-center w-full h-full">
//         <motion.span
//           className="text-3xl font-[900] tracking-tighter sm:text-4xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           LIMITED TIME OFFER
//         </motion.span>
//         <p className="text-sm sm:text-base md:text-lg font-normal z-20 tracking-tight text-balance leading-relaxed text-slate-800 mb-8">
//           Get 20% off house design by signing up for our newsletter.
//         </p>
//         <div className="flex justify-center items-center gap-2 sm:gap-5">
//           <TimeBlock value={countDownTime.days} label="days" />
//           <p className="text-slate-950 text-xl md:text-4xl mt-[-2rem] font-[900]">
//             :
//           </p>
//           <TimeBlock value={countDownTime.hours} label="hours" />
//           <p className="text-slate-950 text-xl md:text-4xl mt-[-2rem] font-[900]">
//             :
//           </p>
//           <TimeBlock value={countDownTime.minutes} label="minutes" />
//           <p className="text-slate-950 text-xl md:text-4xl mt-[-2rem] font-[900]">
//             :
//           </p>
//           <TimeBlock value={countDownTime.seconds} label="seconds" />
//         </div>
//         <div className="flex flex-col items-center justify-center w-full h-full my-4 md:mt-8 space-y-6">
//           <Input
//             placeholder="Enter your email"
//             type="email"
//             className="w-[200px] md:w-[300px] text-slate-900 bg-slate-50 shadow-inner"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Button
//             type="submit"
//             onClick={handleEmail}
//             variant="default"
//             size="lg"
//             className="w-auto md:w-[150px] bg-slate-50 text-slate-900 hover:bg-yellow-50 font-semibold p-6 text-sm sm:text-base flex items-center gap-2 transition-all duration-100 hover:scale-95 shadow-md"
//           >
//             <Mail className="w-5 h-5" />
//             Sign up
//           </Button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default memo(Timer3);
