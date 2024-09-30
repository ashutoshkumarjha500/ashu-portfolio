import * as React from 'react';
import { mergeClasses } from '../lib/utils'; // Make sure this utility exists

const Button = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  // Instead of using Slot, always render a button
  const Comp = 'button';
  return (
    <Comp
      className={mergeClasses(
        'inline-flex dark:bg-slate-100 dark:text-gray-800 items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export default Button;



// import * as React from 'react';
// import { Slot } from '@radix-ui/react-slot'; // You can remove this if not using radix-ui

// import { mergeClasses } from '@/lib/utils'; // Make sure you have this utility in your project

// const Button = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
//   const Comp = asChild ? Slot : 'button';
//   return (
//     <Comp
//       className={mergeClasses(
//         'inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800',
//         className
//       )}
//       ref={ref}
//       {...props}
//     />
//   );
// });

// Button.displayName = 'Button';

// export default Button;




// 'use client';

// import * as React from 'react';
// import { Slot } from '@radix-ui/react-slot';

// import { mergeClasses } from '@/lib/utils';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   asChild?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : 'button';
//     return (
//       <Comp
//         className={mergeClasses(
//           'inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800',
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );

// Button.displayName = 'Button';

// export default Button;
