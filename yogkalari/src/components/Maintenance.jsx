import { useEffect, useState } from "react";

const Maintenance = ({ launchDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        setIsLive(true);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  if (isLive) {
    return null; // Allow main app to load
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-4">🚧 We’re preparing to launch!</h1>
      <p className="text-lg text-gray-600 mb-6">Our site will open soon:</p>

      <div className="flex gap-4 text-2xl font-mono">
        <div>
          <span className="font-bold">{timeLeft.days ?? 0}</span> d
        </div>
        <div>
          <span className="font-bold">{timeLeft.hours ?? 0}</span> h
        </div>
        <div>
          <span className="font-bold">{timeLeft.minutes ?? 0}</span> m
        </div>
        <div>
          <span className="font-bold">{timeLeft.seconds ?? 0}</span> s
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
