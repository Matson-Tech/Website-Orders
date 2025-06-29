
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h3 className="text-xl md:text-2xl font-serif text-center mb-4">Countdown to Our Special Day</h3>
      <div className="flex justify-center space-x-4 md:space-x-8">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg bg-white shadow flex items-center justify-center border border-gold/20">
              <span className="text-2xl md:text-4xl font-bold text-gold">{unit.value}</span>
            </div>
            <span className="mt-2 text-sm md:text-base text-muted-foreground">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
