import { useEffect, useState } from "react";

export function useTypewriterStatic(text: string, speed = 100) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (index >= text.length) {
      setDone(true);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed((prev) => prev + text.charAt(index));
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return { displayed, done };
}
