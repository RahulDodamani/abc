import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react"; // ✅ Import Heart Icon from Lucide
import music from "./song.mp3"; // ✅ Import your audio file

const Message2 = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) =>
        console.error("Audio play failed:", error)
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center p-4 overflow-hidden">
      {/* 🎶 Background Music */}
      <audio ref={audioRef} src={music} autoPlay loop hidden></audio>

      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: "100vh", x: Math.random() * 100 + "vw" }} // Starts from bottom
            animate={{
              y: "-10vh", // Moves up beyond the top
              x: Math.random() * 100 + "vw", // Moves sideways randomly
              rotate: 360, // Rotates while moving
            }}
            transition={{
              duration: Math.random() * 10 + 10, // Moves up in 10-20 seconds
              repeat: Infinity, // Repeats forever
              ease: "linear", // Smooth movement
            }}
          >
            <Heart className="text-pink-300" size={24} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center relative z-10"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Another Special Message 💖
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Aaaahhaaa chinminnn!!! What more can I say about you? You're a small
          piece of affection that means the entire world to me.🫂💖 Here’s to many
          more birthdays, memories, and endless happiness together! ❤️💫
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          And chinminniii always do remember that I will be the first one to
          open my arms for you, and the last one to close for you.🫂
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          Wishing you endless joy and happiness! 🎉
        </p>

        {/* Navigation Buttons */}
        <div className="mt-4 flex justify-center gap-4">
          <Link
            to="/message"
            className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600"
          >
            ← Back
          </Link>

          {/* Next Button to Navigate to Message3 */}
          <Link
            to="/message3"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          >
           See Another Surprise 🎉 →
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Message2;
