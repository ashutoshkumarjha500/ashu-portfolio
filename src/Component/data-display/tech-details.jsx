"use client";

import Typography from "../general/typography";
import Link from "../navigation/link";
import ImageWrapper from "../data-display/image-wrapper";

const TechDetailItem = ({ url, logo, darkModeLogo, label }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={url} externalLink>
        {/* <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          className="transition-transform duration-300 md:hover:scale-110"
        /> */}
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          // themes={theme} // Pass your current theme here (e.g., 'dark' or 'light')
          className="transition-transform duration-300 md:hover:scale-110"
        />
      </Link>
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetailItem;

// 1st update

// 'use client';

// import { TechDetails } from '../lib/types'; // You may need to adjust or remove this import depending on how you handle types in JavaScript
// import Typography from '../general/typography';
// import Link from '../navigation/link';
// import ImageWrapper from '../data-display/image-wrapper';

// const TechDetails = ({ url, logo, darkModeLogo, label }) => {
//   return (
//     <div className="flex flex-col items-center gap-2">
//       <Link noCustomization href={url} externalLink>
//         <ImageWrapper
//           src={logo}
//           srcForDarkMode={darkModeLogo}
//           alt={label}
//           className="transition-transform duration-300 md:hover:scale-110"
//         />
//       </Link>
//       <Typography variant="body1">{label}</Typography>
//     </div>
//   );
// };

// export default TechDetails;

// 'use client';

// import { TechDetails } from '@/lib/types';
// import Typography from '../general/typography';
// import Link from '../navigation/link';
// import ImageWrapper from '../data-display/image-wrapper';

// const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
//   return (
//     <div className="flex flex-col items-center gap-2">
//       <Link noCustomization href={url} externalLink>
//         <ImageWrapper
//           src={logo}
//           srcForDarkMode={darkModeLogo}
//           alt={label}
//           className="transition-transform duration-300 md:hover:scale-110"
//         />
//       </Link>
//       <Typography variant="body1">{label}</Typography>
//     </div>
//   );
// };

// export default TechDetails;
