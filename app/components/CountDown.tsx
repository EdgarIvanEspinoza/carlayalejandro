'use client';

import { useState, useEffect } from 'react';

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date('2025-12-13T13:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center p-4 gap-8 bg-white/80 rounded-xl shadow-sm">
      <span className="text-3xl font-bold text-[#6b7d57]">
        {timeLeft.days} <span className="text-sm text-zinc-600">días</span>
      </span>
      <span className="text-3xl font-bold text-[#6b7d57]">
        {timeLeft.hours} <span className="text-sm text-zinc-600">horas</span>
      </span>
      <span className="text-3xl font-bold text-[#6b7d57]">
        {timeLeft.minutes} <span className="text-sm text-zinc-600">min</span>
      </span>
      <span className="text-3xl font-bold text-[#6b7d57]">
        {timeLeft.seconds} <span className="text-sm text-zinc-600">seg</span>
      </span>
    </div>
  );
}
