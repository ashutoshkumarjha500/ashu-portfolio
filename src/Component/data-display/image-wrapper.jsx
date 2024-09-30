import React, { useEffect, useState } from 'react';

const ImageWrapper = ({
  srcForDarkMode, // Image for dark mode
  src, // Image for light mode
  alt,
  theme: propTheme, // Optional: theme passed as a prop
  ...props
}) => {
  const [theme, setTheme] = useState(propTheme || 'light'); // Internal theme state
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // If theme is not provided via props, detect it from the document class
    if (!propTheme) {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      setTheme(currentTheme);
    }
  }, [propTheme]);

  if (!mounted) {
    return null; // Prevents rendering before hydration is complete
  }

  // Determine the final source based on the theme
  const finalSrc = theme === 'dark' ? srcForDarkMode || src : src;

  return <img src={finalSrc} alt={alt} {...props} />;
};

export default ImageWrapper;




// import React, { useEffect, useState } from 'react';

// const ImageWrapper = ({
//   srcForDarkMode,
//   src,
//   alt,
//   theme, // Accept theme as a prop
//   ...props
// }) => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   // Determine the final source based on the theme prop
//   const finalSrc = theme === 'dark' ? srcForDarkMode || src : src;

//   return <img src={finalSrc} alt={alt} {...props} />;
// };

// export default ImageWrapper;




{/* <ImageWrapper
  src={logo}
  srcForDarkMode={darkModeLogo}
  alt={label}
  theme={currentTheme} // Pass your current theme here (e.g., 'dark' or 'light')
  className="transition-transform duration-300 md:hover:scale-110"
/> */}


// 1st update 

// 'use client';

// import { useEffect, useState } from 'react';
// // import Image from 'next/image';
// import { useTheme } from 'next-themes';

// const ImageWrapper = ({
//   srcForDarkMode,
//   src,
//   alt,
//   ...props
// }) => {
//   // Ref :: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
//   const [mounted, setMounted] = useState(false);
//   const { theme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   const finalSrc = theme === 'dark' ? srcForDarkMode || src : src;

//   return <img src={finalSrc} alt={alt} {...props} />;
// };

// export default ImageWrapper;



// 'use client';

// import { useEffect, useState } from 'react';
// import Image, { ImageProps, StaticImageData } from 'next/image';
// import { useTheme } from 'next-themes';

// type ImageWrapperProps = ImageProps & {
//   srcForDarkMode?: string | StaticImageData;
// };

// const ImageWrapper = ({
//   srcForDarkMode,
//   src,
//   alt,
//   ...props
// }: ImageWrapperProps) => {
//   // Ref :: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
//   const [mounted, setMounted] = useState(false);
//   const { theme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   const finalSrc = theme === 'dark' ? srcForDarkMode || src : src;

//   return <Image src={finalSrc!} alt={alt} {...props} />;
// };

// export default ImageWrapper;
