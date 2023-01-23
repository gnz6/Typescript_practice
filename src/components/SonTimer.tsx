import { useEffect, useRef, useState } from "react";

type TimerArgs = {
  miliseconds: number;
};

export const SonTimer = ({ miliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSeconds((s) => s + 1), miliseconds);
  }, [miliseconds]);

  return (
    <div>
      <h2>Timer {seconds}</h2>
    </div>
  );
};
