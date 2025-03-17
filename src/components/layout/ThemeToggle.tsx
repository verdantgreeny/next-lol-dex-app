"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-3 right-3 p-3 rounded-full bg-[var(--gray-3)] border-2 border-[var(--gold)] text-white hover:bg-[var(--gray-1-5)] transition hover:cursor-pointer"
    >
      {theme === "dark" ? (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636"
          />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={2} />
        </svg>
      ) : (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 116.707 2.707a8.001 8.001 0 0010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
