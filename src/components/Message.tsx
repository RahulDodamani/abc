import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import music from './song.mp3'; // ✅ Import your audio file

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; duration: number; size: string }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 10 }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}vw`,
      duration: 4 + Math.random() * 4,
      size: `${Math.random() * 30 + 20}px`,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: heart.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute text-red-500"
          style={{ left: heart.left, fontSize: heart.size }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

const Message = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error("Audio play failed:", error));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4 relative">
      
      {/* 🎶 Background Music */}
      <audio ref={audioRef} src={music} autoPlay loop hidden></audio>

      {/* ❤️ Floating Hearts Effect */}
      <FloatingHearts />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear CHINMINII!!,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Sonumarrii, words cannot define how important you are for me and how much I like being with you.
          Just your presence makes me so calm and relaxed.
          It’s our third birthday together—yayy! 🎉🪅 That means we’ve completed two  years of this beautiful journey, and honestly, I wish I could turn back time to those golden days. The days when I’d see you daily with that smile, when we shared our joys and sorrows, fought like kids, and made countless unforgettable memories.
I miss those moments—the laughter, the silly fights, the late-night talks, and the warmth of having you by my side. 🥺 You’ve been my secret treasure of happiness, my safe haven, my home. 🏠✨ You made my engineering life so much more meaningful, filling it with love, laughter, and a bond that I’ll cherish forever.
Thank you for being YOU—for being my constant, my comfort, and my best part of life. 
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          Wishing you the happiest birthday 🎉
        </p>

        {/* ✅ Navigation Button */}
        <Link to="/message2" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
          Read More →
        </Link>
      </motion.div>
    </div>
  );
};

export default Message;
