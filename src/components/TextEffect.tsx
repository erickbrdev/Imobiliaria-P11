import { useEffect, useState } from "react";

type Props = {
  text: string;
};

export default function TextWrite({ text }: Props) {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const updateDisplayText = () => {
      setDisplayText(text.slice(0, charIndex));
      setCharIndex(charIndex + 1);
    };

    const interval = setTimeout(updateDisplayText, 100);

    return () => clearTimeout(interval);
  }, [charIndex, text]);

  return (
    <h1 className="flex text-yellow-950 py-1 px-2 rounded-lg opacity-90">
      {displayText}
    </h1>
  );
}
