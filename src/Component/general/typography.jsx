import * as React from 'react';
import { mergeClasses } from '../lib/utils';

// Define your typography variants as an object
const typographyVariants = {
  h1: 'text-4xl dark:text-gray-50 font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900',
  h2: 'text-lg dark:text-gray-200 md:text-4xl font-semibold tracking-[-0.02em] text-gray-900',
  h3: 'text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900 dark:text-gray-200',
  subtitle: 'text-lg md:text-xl dark:text-gray-200 ',
  body1: 'text-base md:text-lg  dark:text-gray-200',
  body2: 'text-base dark:text-gray-200 ',
  body3: 'text-sm dark:text-gray-200',
};

// Map variants to elements
const elementMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p',
};

const Typography = React.forwardRef(({
  component,
  className = '',
  variant = 'body2', // Default variant
  children,
  ...props
}, ref) => {
  // Determine the correct component to render
  const Comp = component || elementMapping[variant] || 'p';

  // Get the classes for the specified variant
  const variantClasses = typographyVariants[variant] || typographyVariants.body2; // Fallback to body2 if variant is not found

  return (
    <Comp
      className={mergeClasses(variantClasses, className)}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  );
});

Typography.displayName = 'Typography';

export default Typography;



// 1st update 

// import * as React from 'react';
// import { cva } from 'class-variance-authority'; // Importing cva without type definitions

// import { mergeClasses } from '../lib/utils';

// const typographyVariants = cva('text-gray-600 text-normal', {
//   variants: {
//     variant: {
//       h1: 'text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900',
//       h2: 'text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900',
//       h3: 'text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900',
//       subtitle: 'text-lg md:text-xl',
//       body1: 'text-base md:text-lg',
//       body2: 'text-base',
//       body3: 'text-sm',
//     },
//   },
//   defaultVariants: {
//     variant: 'body2',
//   },
// });

// // Remove TypeScript interfaces
// const elementMapping = {
//   h1: 'h1',
//   h2: 'h2',
//   h3: 'h3',
//   subtitle: 'p',
//   body1: 'p',
//   body2: 'p',
//   body3: 'p',
// };

// const Typography = React.forwardRef(({
//   component,
//   className = '',
//   variant,
//   children,
//   ...props
// }, ref) => {
//   const Comp = (
//     component || (variant && elementMapping[variant]) || 'p'
//   );

//   return (
//     <Comp
//       className={mergeClasses(typographyVariants({ variant }), className)}
//       ref={ref}
//       {...props}
//     >
//       {children}
//     </Comp>
//   );
// });

// Typography.displayName = 'Typography';

// export default Typography;




// import * as React from 'react';
// import { cva, type VariantProps } from 'class-variance-authority';

// import { mergeClasses } from '../lib/utils';

// const typographyVariants = cva('text-gray-600 text-normal', {
//   variants: {
//     variant: {
//       h1: 'text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900',
//       h2: 'text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900',
//       h3: 'text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900',
//       subtitle: 'text-lg md:text-xl',
//       body1: 'text-base md:text-lg',
//       body2: 'text-base',
//       body3: 'text-sm',
//     },
//   },
//   defaultVariants: {
//     variant: 'body2',
//   },
// });

// interface TypographyProps
//   extends React.DetailedHTMLProps<
//       React.HTMLAttributes<HTMLHeadingElement>,
//       HTMLHeadingElement
//     >,
//     VariantProps<typeof typographyVariants> {
//   component?: React.ElementType;
// }

// let elementMapping = {
//   h1: 'h1',
//   h2: 'h2',
//   h3: 'h3',
//   subtitle: 'p',
//   body1: 'p',
//   body2: 'p',
//   body3: 'p',
// };

// type ComponentElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

// const Typography = React.forwardRef<
//   HTMLHeadingElement | HTMLParagraphElement,
//   TypographyProps
// >(
//   (
//     { component, className = '', variant, children, ...props }: TypographyProps,
//     ref
//   ) => {
//     const Comp = (
//       component ? component : variant ? elementMapping[variant] : 'p'
//     ) as ComponentElement;

//     return (
//       <Comp
//         className={mergeClasses(typographyVariants({ variant }), className)}
//         ref={ref}
//         {...props}
//       >
//         {children}
//       </Comp>
//     );
//   }
// );

// Typography.displayName = 'Typography';

// export default Typography;
