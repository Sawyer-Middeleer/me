import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * BentoGrid is a responsive grid container that arranges its children in a bento-style layout.
 * It uses CSS Grid and is configured to adapt to different screen sizes.
 */
const BentoGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
BentoGrid.displayName = "BentoGrid";

/**
 * BentoGridItem is a flexible component designed to be a child of BentoGrid.
 * It provides a consistent structure with a header, title, and description,
 * and now includes a subtle scaling effect on hover.
 */
interface BentoGridItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = React.forwardRef<HTMLDivElement, BentoGridItemProps>(
  ({ className, title, description, header, size = 'medium', ...props }, ref) => {
    const sizeClasses = {
      small: "col-span-1 row-span-1",
      medium: "col-span-1 md:col-span-2 row-span-1",
      large: "col-span-1 md:col-span-3 row-span-1"
    };

    return (
      <div
        ref={ref}
        className={cn(
          "group flex flex-col justify-between space-y-4 overflow-hidden rounded-md border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {/* Header content, now perfect for images */}
        <div className="flex h-full min-h-[6rem] flex-1 overflow-hidden rounded-md bg-muted">
            {header}
        </div>

        {/* Title and description */}
        <div className="transition-transform duration-200 group-hover:translate-x-1">
          <div className="font-sans text-sm font-bold text-card-foreground">
            {title}
          </div>
          <p className="font-sans text-xs text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    );
  }
);
BentoGridItem.displayName = "BentoGridItem";

export { BentoGrid, BentoGridItem };
