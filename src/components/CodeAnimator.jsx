import React, { useEffect, useState, useRef } from "react";

/**
 * CodeAnimator
 * - Types a sequence of lines (you can customize `LINES`)
 * - Shows line numbers and a blinking cursor
 * - Simple glow + rounded card styling (Tailwind classes used; plain CSS also provided)
 *
 * Usage:
 * <CodeAnimator className="w-full h-64" />
 *
 * Paste this file into src/components and import it into Hero.jsx
 */

const LINES = [
  "import React from 'react';",
  "import CTAButon from './Button';",
  "import TypeAnimation from 'react-type-animation';",
  "import { FaArrowRight } from 'react-icons/fa';",
  "",
  "function App() {",
  "  return <div>Hello World</div>;",
  "}",
  "export default App;",
];

export default function CodeAnimator({ className = "" , typingSpeed = 30 }) {
  const [content, setContent] = useState(Array(LINES.length).fill(""));
  const [cursorPos, setCursorPos] = useState({ line: 0, char: 0 });
  const idxRef = useRef({ line: 0, char: 0 });
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    const tick = () => {
      const { line, char } = idxRef.current;
      // finished all lines? loop after a pause
      if (line >= LINES.length) {
        // small pause then restart
        setTimeout(() => {
          if (!mounted.current) return;
          idxRef.current = { line: 0, char: 0 };
          setContent(Array(LINES.length).fill(""));
          setCursorPos({ line: 0, char: 0 });
          startTyping();
        }, 1200);
        return;
      }

      const current = LINES[line];
      // if at end of line -> advance to next line after short pause
      if (char > current.length) {
        idxRef.current = { line: line + 1, char: 0 };
        setCursorPos({ line: line + 1, char: 0 });
        setTimeout(() => {
          if (!mounted.current) return;
          tick();
        }, 220);
        return;
      }

      // add next char
      const nextText = current.slice(0, char);
      setContent((prev) => {
        const copy = prev.slice();
        copy[line] = nextText;
        return copy;
      });

      idxRef.current.char = char + 1;
      setCursorPos({ line, char: char + 1 });

      // schedule next char
      setTimeout(() => {
        if (!mounted.current) return;
        tick();
      }, Math.max(10, typingSpeed + Math.round((Math.random() - 0.5) * 30)));
    };

    const startTyping = () => {
      setTimeout(() => {
        if (!mounted.current) return;
        tick();
      }, 300);
    };

    startTyping();
    return () => { mounted.current = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typingSpeed]);

  return (
    <div
  className={`relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-4 ${className}`}
  aria-hidden
>
      <div className="absolute -inset-1 rounded-2xl pointer-events-none"
           style={{ boxShadow: "0 30px 60px rgba(2,6,23,0.45), inset 0 1px 0 rgba(255,255,255,0.02)" }} />
      <div className="relative z-10 flex gap-4">
        {/* line numbers */}
        <div className="select-none text-gray-600 text-xs leading-6 pr-3 border-r border-gray-800">
          {Array.from({ length: LINES.length }).map((_, i) => (
            <div key={i} className="h-6">{i + 1}</div>
          ))}
        </div>

        {/* code area */}
        <pre className="text-sm text-[#cfefff] leading-6 m-0 flex-1 min-w-0">
          {content.map((lineText, i) => {
            const isCursor = cursorPos.line === i;
            return (
              <div key={i} className="h-6 flex items-center">
                <code
  className="whitespace-pre-wrap break-words bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-300 bg-clip-text text-transparent"
>
  {lineText}
</code>
                {isCursor ? (
                  <span
                    className="ml-1 w-1 h-5 bg-[#cfefff] inline-block animate-blink"
                    style={{ borderRadius: 2 }}
                  />
                ) : null}
              </div>
            );
          })}
        </pre>
      </div>

      {/* small CSS for blink animation when Tailwind isn't available */}
      <style>{`
        @keyframes blink { 0% { opacity: 1 } 50% { opacity: 0 } 100% { opacity: 1 } }
        .animate-blink { animation: blink 1s step-end infinite; }
      `}</style>
    </div>
  );
}
