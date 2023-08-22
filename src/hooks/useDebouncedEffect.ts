import { useEffect, useState } from 'react';

export const useDebouncedEffect = (
  effect: () => void,
  deps: unknown[],
  delay: number
) => {
  // Detect when user performs action
  const [isIdle, setIsIdle] = useState(true);

  useEffect(() => {
    setIsIdle(false);
    const handler = setTimeout(() => {
      effect();
      setIsIdle(true);
    }, delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);

  return {
    isIdle,
  };
};
