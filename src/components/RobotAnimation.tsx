// import React, { useEffect, useState } from 'react';
// export function RobotAnimation() {
//   const [position, setPosition] = useState(0);
//   const [hasLaunchText, setHasLaunchText] = useState(false);
//   useEffect(() => {
//     // Animate the robot moving across the screen
//     const interval = setInterval(() => {
//       setPosition(prev => {
//         if (prev >= 40) {
//           clearInterval(interval);
//           setHasLaunchText(true);
//           return prev;
//         }
//         return prev + 5;
//       });
//     }, 100);
//     return () => clearInterval(interval);
//   }, []);
//   return <div className="relative w-full h-full">
//       <div className="absolute transition-all duration-100 flex items-center" style={{
//       left: `${position}%`
//     }}>
//         <div className="relative">
//           <div className="h-16 w-16 text-blue-500 animate-bounce" />
//           {hasLaunchText && <div className="absolute -top-10 -left-4 whitespace-nowrap bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold text-xl animate-pulse flex items-center">
//               <div className="bg-gray-800/70 rounded-lg px-3 py-1 border border-blue-400/30">
//                 Launched Now!
//               </div>
//             </div>}
//         </div>
//       </div>
//       {!hasLaunchText && <div className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold text-xl">
//           <div className="bg-gray-800/70 rounded-lg px-3 py-1 border border-blue-400/30">
//             Launched Now!
//           </div>
//         </div>}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30"></div>
//     </div>;
// }


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react"; // icon for spark effects

export function RobotAnimation() {
  const [position, setPosition] = useState(0);
  const [hasLaunchText, setHasLaunchText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 40) {
          clearInterval(interval);
          setHasLaunchText(true);
          return prev;
        }
        return prev + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 flex items-center overflow-hidden">
      {/* Robot */}
      <motion.div
        className="absolute flex items-center"
        style={{ left: `${position}%` }}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
      >
        <div className="relative">
          {/* Robot body */}
          <div className="h-16 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg" />
        </div>
      </motion.div>

      {/* Celebration Text */}
      {hasLaunchText && (
        <motion.div
          className="absolute left-1/2 top-12 -translate-x-1/2 flex flex-col items-center space-y-2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.3, 1], opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="bg-gray-900/80 rounded-lg px-4 py-2 border border-blue-400/40 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
              🚀 Launched Now!
            </div>
            {/* Sparkle effects */}
            <motion.div
              className="absolute -top-6 -left-6 text-blue-400"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <motion.div
              className="absolute -top-6 -right-6 text-purple-400"
              animate={{ rotate: [360, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Progress bar line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/40 to-purple-500/40"></div>
    </div>
  );
}
