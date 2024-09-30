import React from "react";
import { mergeClasses } from "../lib/utils";

const Link = React.forwardRef(
  (
    {
      noCustomization,
      children = null,
      className = '',
      externalLink = false,
      withUnderline = false,
      ...props
    },
    ref
  ) => {
    const target = externalLink ? "_blank" : "_self";
    const rel = externalLink ? "noopener noreferrer" : undefined;

    return (
      <a
        {...props}
        target={target}
        rel={rel}
        ref={ref}
        className={mergeClasses(
          noCustomization ??
            'text-base font-medium dark:text-gray-200  text-gray-950 transition-all hover:text-gray-900 active:text-gray-600',
          withUnderline
            ? 'underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600'
            : '',
          className
        )}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

export default Link;


// 1st update 

// import * as React from 'react';
// import NextLink from 'next/link'; // Removed type-specific imports from 'next/link'

// import { mergeClasses } from '../lib/utils'; // Assuming this is a utility function you have

// const Link = React.forwardRef(
//   (
//     {
//       noCustomization,
//       children = null,
//       className = '',
//       externalLink = false,
//       withUnderline = false,
//       ...props
//     },
//     ref
//   ) => {
//     return (
//       <NextLink
//         {...props}
//         target={externalLink ? '_blank' : '_self'}
//         ref={ref}
//         className={mergeClasses(
//           noCustomization ??
//             'text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600',
//           withUnderline
//             ? 'underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600'
//             : '',
//           className
//         )}
//       >
//         {children}
//       </NextLink>
//     );
//   }
// );

// Link.displayName = 'Link';

// export default Link;

// ORIGINAL

// import * as React from 'react';
// import NextLink, { LinkProps as NextLinkProps } from 'next/link';

// import { mergeClasses } from '@/lib/utils';

// interface LinkProps extends NextLinkProps {
//   className?: string;
//   children?: React.ReactNode;
//   noCustomization?: boolean;
//   externalLink?: boolean;
//   withUnderline?: boolean;
// }

// const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
//   (
//     {
//       noCustomization,
//       children = null,
//       className = '',
//       externalLink = false,
//       withUnderline = false,
//       ...props
//     }: LinkProps,
//     ref
//   ) => {
//     return (
//       <NextLink
//         {...props}
//         target={externalLink ? '_blank' : '_self'}
//         ref={ref}
//         className={mergeClasses(
//           noCustomization ??
//             'text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600',
//           withUnderline
//             ? 'underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600'
//             : '',
//           className
//         )}
//       >
//         {children}
//       </NextLink>
//     );
//   }
// );

// Link.displayName = 'Link';

// export default Link;
