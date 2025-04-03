import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
