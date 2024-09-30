import React from 'react';

const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <div className={`${isOpen ? 'fixed inset-0 z-50 ' : 'hidden'}`}>
      {/* Overlay */}
      <div
        className="fixed inset-0 h-screen bg-gray-900/10 opacity-100 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 w-80 bg-gray-100 dark:bg-gray-950  h-screen shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export const DrawerTrigger = ({ onOpen, children }) => (
  <div onClick={onOpen}>
    {children}
  </div>
);

export const DrawerContent = ({ children }) => {
  return (
    <div className="p-4">
      {children}
    </div>
  );
};

export const DrawerClose = ({ onClose, children }) => (
  <div onClick={onClose}>
    {children}
  </div>
);

export default Drawer;



// import React, { useState } from 'react';

// const Drawer = ({ isOpen, onClose, children }) => {
//   return (
//     <div className={`${isOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
//       {/* Overlay */}
//       <div 
//         className="fixed inset-0 bg-black bg-opacity-50" 
//         onClick={onClose}
//       ></div>

//       {/* Drawer Panel */}
//       <div
//         className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg transform transition-transform ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <button
//           className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
//           onClick={onClose}
//         >
//           Close
//         </button>
//         <div className="p-4">{children}</div>
//       </div>
//     </div>
//   );
// };

// const DrawerTrigger = ({ onOpen }) => (
//   <button
//     onClick={onOpen}
//     className="p-2 bg-blue-500 text-white rounded-md"
//   >
//     Open Drawer
//   </button>
// );

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="p-4">
//       <DrawerTrigger onOpen={toggleDrawer} />
//       <Drawer isOpen={isOpen} onClose={toggleDrawer}>
//         <h2 className="text-xl font-semibold">Drawer Content</h2>
//         <p>This is the content inside the drawer.</p>
//       </Drawer>
//     </div>
//   );
// };

// export default App;




// import * as React from 'react';
// import * as DrawerPrimitive from '@radix-ui/react-dialog';

// import { mergeClasses } from '../lib/utils';

// const Drawer = DrawerPrimitive.Root;

// const DrawerTrigger = DrawerPrimitive.Trigger;

// const DrawerClose = DrawerPrimitive.Close;

// const DrawerPortal = ({ className, ...props }) => (
//   <DrawerPrimitive.Portal className={mergeClasses(className)} {...props} />
// );
// DrawerPortal.displayName = DrawerPrimitive.Portal.displayName;

// const DrawerOverlay = React.forwardRef((props, ref) => {
//   const { className, ...rest } = props;
//   return (
//     <DrawerPrimitive.Overlay
//       className={mergeClasses(
//         'fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm',
//         className
//       )}
//       {...rest}
//       ref={ref}
//     />
//   );
// });
// DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

// const drawerVariants = (side) => {
//   return `fixed z-50 shadow-2xl bg-gray ring-1 ring-black/10 transition-all ease-in-out duration-100 ${
//     side === 'right' ? 'inset-y-0 right-0 h-full max-w-xs w-full' : ''
//   }`;
// };

// const DrawerContent = React.forwardRef((props, ref) => {
//   const { side = 'right', className, children, ...rest } = props;
//   return (
//     <DrawerPortal>
//       <DrawerOverlay />
//       <DrawerPrimitive.Content
//         ref={ref}
//         className={mergeClasses(drawerVariants(side), className)}
//         {...rest}
//       >
//         {children}
//       </DrawerPrimitive.Content>
//     </DrawerPortal>
//   );
// });
// DrawerContent.displayName = DrawerPrimitive.Content.displayName;

// export { Drawer, DrawerTrigger, DrawerClose, DrawerContent };







// import * as React from 'react';
// import * as DrawerPrimitive from '@radix-ui/react-dialog';
// // import { cva } from 'class-variance-authority';

// import { mergeClasses } from '../lib/utils';

// const Drawer = DrawerPrimitive.Root;

// const DrawerTrigger = DrawerPrimitive.Trigger;

// const DrawerClose = DrawerPrimitive.Close;

// const DrawerPortal = ({ className, ...props }) => (
//   <DrawerPrimitive.Portal className={mergeClasses(className)} {...props} />
// );
// DrawerPortal.displayName = DrawerPrimitive.Portal.displayName;

// const DrawerOverlay = React.forwardRef(
//   ({ className, ...props }, ref) => (
//     <DrawerPrimitive.Overlay
//       className={mergeClasses(
//         'fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm',
//         className
//       )}
//       {...props}
//       ref={ref}
//     />
//   )
// );
// DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

// const drawerVariants = cva(
//   'fixed z-50 shadow-2xl bg-gray ring-1 ring-black/10 transition-all ease-in-out duration-100',
//   {
//     variants: {
//       side: {
//         right:
//           'inset-y-0 right-0 h-full max-w-xs w-full data-[state=open]:animate-drawer-open data-[state=closed]:animate-drawer-close',
//       },
//     },
//     defaultVariants: {
//       side: 'right',
//     },
//   }
// );

// const DrawerContent = React.forwardRef(
//   ({ side = 'right', className, children, ...props }, ref) => (
//     <DrawerPortal>
//       <DrawerOverlay />
//       <DrawerPrimitive.Content
//         ref={ref}
//         className={mergeClasses(drawerVariants({ side }), className)}
//         {...props}
//       >
//         {children}
//       </DrawerPrimitive.Content>
//     </DrawerPortal>
//   )
// );
// DrawerContent.displayName = DrawerPrimitive.Content.displayName;

// export { Drawer, DrawerTrigger, DrawerClose, DrawerContent };




// import * as React from 'react';
// import * as DrawerPrimitive from '@radix-ui/react-dialog';
// import { cva, type VariantProps } from 'class-variance-authority';

// import { mergeClasses } from '@/lib/utils';

// const Drawer = DrawerPrimitive.Root;

// const DrawerTrigger = DrawerPrimitive.Trigger;

// const DrawerClose = DrawerPrimitive.Close;

// const DrawerPortal = ({
//   className,
//   ...props
// }: DrawerPrimitive.DialogPortalProps) => (
//   <DrawerPrimitive.Portal className={mergeClasses(className)} {...props} />
// );
// DrawerPortal.displayName = DrawerPrimitive.Portal.displayName;

// const DrawerOverlay = React.forwardRef<
//   React.ElementRef<typeof DrawerPrimitive.Overlay>,
//   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
// >(({ className, ...props }, ref) => (
//   <DrawerPrimitive.Overlay
//     className={mergeClasses(
//       'fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm',
//       className
//     )}
//     {...props}
//     ref={ref}
//   />
// ));
// DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

// const drawerVariants = cva(
//   'fixed z-50 shadow-2xl bg-gray ring-1 ring-black/10 transition-all ease-in-out duration-100',
//   {
//     variants: {
//       side: {
//         right:
//           'inset-y-0 right-0 h-full max-w-xs w-full data-[state=open]:animate-drawer-open data-[state=closed]:animate-drawer-close',
//       },
//     },
//     defaultVariants: {
//       side: 'right',
//     },
//   }
// );

// interface DrawerContentProps
//   extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
//     VariantProps<typeof drawerVariants> {}

// const DrawerContent = React.forwardRef<
//   React.ElementRef<typeof DrawerPrimitive.Content>,
//   DrawerContentProps
// >(({ side = 'right', className, children, ...props }, ref) => (
//   <DrawerPortal>
//     <DrawerOverlay />
//     <DrawerPrimitive.Content
//       ref={ref}
//       className={mergeClasses(drawerVariants({ side }), className)}
//       {...props}
//     >
//       {children}
//     </DrawerPrimitive.Content>
//   </DrawerPortal>
// ));
// DrawerContent.displayName = DrawerPrimitive.Content.displayName;

// export { Drawer, DrawerTrigger, DrawerClose, DrawerContent };
