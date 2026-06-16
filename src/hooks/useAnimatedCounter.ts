import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseAnimatedCounterProps {
  target: number;
  duration?: number;
  startOnView?: boolean;
}

export function useAnimatedCounter({ target, duration = 2000, startOnView = true }: UseAnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (startOnView && !inView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    // easeOutExpo function
    const easeOutExpo = (x: number): number => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const currentCount = Math.floor(easeOutExpo(percentage) * target);
      setCount(currentCount);

      if (progress < duration) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [target, duration, inView, startOnView]);

  return { count, ref };
}
