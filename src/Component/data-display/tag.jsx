import * as React from 'react';
import { mergeClasses } from '../lib/utils';
import Typography from '../general/typography';

const Tag = React.forwardRef(({ label, className, ...props }, ref) => {
  return (
    <div
      className={mergeClasses(
        'flex dark:bg-gray-700 items-center justify-center rounded-xl bg-gray-200 px-5 py-1',
        className
      )}
      ref={ref} // Added ref prop for forwarded ref
      {...props}
    >
      <Typography variant="body3" className="font-medium ">
        {label}
      </Typography>
    </div>
  );
});

Tag.displayName = 'Tag';

export default Tag;



// import * as React from 'react';

// import { mergeClasses } from '../lib/utils';
// import Typography from '../general/typography';

// interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
//   label?: string;
// }

// const Tag = React.forwardRef<HTMLDivElement, TagProps>(
//   ({ label, className, ...props }: TagProps, ref) => {
//     return (
//       <div
//         className={mergeClasses(
//           'flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1',
//           className
//         )}
//         {...props}
//       >
//         <Typography variant="body3" className="font-medium">
//           {label}
//         </Typography>
//       </div>
//     );
//   }
// );

// Tag.displayName = 'Tag';

// export default Tag;
