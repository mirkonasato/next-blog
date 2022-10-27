import { useState } from 'react';

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  console.log('[ThemeSwitch] darkMode:', darkMode);
  const text = darkMode ? 'Light Mode' : 'Dark Mode';
  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default ThemeSwitch;
