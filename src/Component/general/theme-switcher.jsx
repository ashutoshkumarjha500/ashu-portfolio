import { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react';
import IconButton from './icon-button';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light'); // Default theme
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage or default to light
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(storedTheme); // Apply the theme class to the root element
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme); // Apply the new theme class to the root element
  };

  // Until the component is mounted, display a placeholder icon
  if (!mounted) {
    return (
      <IconButton>
        <Sun />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={toggleTheme}>
      {theme === 'dark' ? <Sun /> : <MoonStar />}
    </IconButton>
  );
};

export default ThemeSwitcher;



// import { useState, useEffect } from 'react';
// import { MoonStar, Sun } from 'lucide-react';

// import IconButton from './icon-button';

// const ThemeSwitcher = () => {
//   const [theme, setTheme] = useState('light'); // Default theme
//   const [mounted, setMounted] = useState(false);

//   // Load theme from localStorage or default to light
//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(storedTheme);
//     document.documentElement.className = storedTheme; // Apply theme to the root element
//     setMounted(true);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'dark' ? 'light' : 'dark';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme); // Save theme to localStorage
//     document.documentElement.className = newTheme; // Apply the new theme to the root element
//   };

//   // Until the component is mounted, display a placeholder icon
//   if (!mounted) {
//     return (
//       <IconButton>
//         <Sun />
//       </IconButton>
//     );
//   }

//   return (
//     <IconButton onClick={toggleTheme}>
//       {theme === 'dark' ? <Sun /> : <MoonStar />}
//     </IconButton>
//   );
// };

// export default ThemeSwitcher;







// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { MoonStar, Sun } from 'lucide-react';
// // import { useTheme } from 'next-themes';

// // import IconButton from './icon-button';

// // const ThemeSwitcher = () => {
// //   const [mounted, setMounted] = useState(false);
// //   const { theme, setTheme } = useTheme();

// //   const toggleTheme = () => {
// //     setTheme(theme === 'dark' ? 'light' : 'dark');
// //   };

// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   // until the UI is mounted, display a dummy icon
// //   if (!mounted) {
// //     return (
// //       <IconButton>
// //         <Sun />
// //       </IconButton>
// //     );
// //   }

// //   return (
// //     <IconButton onClick={toggleTheme}>
// //       {theme === 'dark' ? <Sun /> : <MoonStar />}
// //     </IconButton>
// //   );
// // };

// // export default ThemeSwitcher;

// // // Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
