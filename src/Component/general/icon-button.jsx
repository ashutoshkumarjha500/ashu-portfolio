import * as React from 'react';
import { mergeClasses } from '../lib/utils'; // Assuming this utility is defined in your project

const IconButton = React.forwardRef(
  (
    {
      className,
      size = 'lg', // Default size
      asChild = false,
      showTooltip = false,
      tooltipText = '',
      children,
      ...props
    },
    ref
  ) => {
    // Determine button size classes based on size prop
    const sizeClasses = size === 'lg' ? 'w-10 h-10' : 'w-6 h-6';

    return (
      <button
        className={mergeClasses(
          `flex justify-center items-center dark:hover:bg-gray-600 hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 
           ${sizeClasses} [&_svg]:stroke-gray-600 dark:[&_svg]:stroke-gray-200 [&_svg]:hover:stroke-gray-700`,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {showTooltip && tooltipText.length > 0 && (
          <span className="absolute -top-8 rounded-lg bg-gray-200 px-2 py-1 text-sm">
            {tooltipText}
          </span>
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;



// import * as React from 'react';
// import { cva, type VariantProps } from 'class-variance-authority';

// import { mergeClasses } from '@/lib/utils';

// const iconButtonVariants = cva(
//   'flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700',
//   {
//     variants: {
//       size: {
//         md: '[&_svg]:w-6 [&_svg]:h-6',
//         lg: '[&_svg]:w-8 [&_svg]:h-8',
//       },
//     },
//     defaultVariants: {
//       size: 'md',
//     },
//   }
// );

// export interface IconButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof iconButtonVariants> {
//   asChild?: boolean;
//   showTooltip?: boolean;
//   tooltipText?: string;
// }

// const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
//   (
//     {
//       className,
//       size,
//       asChild = false,
//       showTooltip = false,
//       tooltipText = '',
//       children,
//       ...props
//     },
//     ref
//   ) => {
//     return (
//       <button
//         className={mergeClasses(
//           'relative',
//           iconButtonVariants({ size }),
//           className
//         )}
//         ref={ref}
//         {...props}
//       >
//         {children}
//         {showTooltip && tooltipText.length > 0 && (
//           <span className="absolute -top-8 rounded-lg bg-gray-200 px-2 py-1 text-sm">
//             {tooltipText}
//           </span>
//         )}
//       </button>
//     );
//   }
// );

// IconButton.displayName = 'IconButton';

// export default IconButton;
