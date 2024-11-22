import { cn } from "@/lib/utils";

import { Icons } from "./icons";

export function EmptyPlaceHolder({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-1 items-center justify-center rounded-lg border border-dashed p-8 text-center shadow-md animate-in fade-in-50",
        className,
      )}
      {...props}
    >
      <div className="flex max-w-[420px] flex-col items-center text-center">
        {children}
      </div>
    </div>
  );
}

interface EmptyPlaceHolderIconProps
  extends Partial<React.SVGProps<SVGSVGElement>> {
  name: keyof typeof Icons;
  ref?: React.RefObject<SVGSVGElement> | null;
}

EmptyPlaceHolder.Icon = function EmptyPlaceHolderIcon({
  name,
  className,
  ...props
}: EmptyPlaceHolderIconProps) {
  const Icon = Icons[name];

  if (!Icon) {
    return null;
  }

  return (
    <div className="flex size-20 items-center justify-center rounded-full bg-muted">
      <Icon className={cn("size-10", className)} {...props} />
    </div>
  );
};

EmptyPlaceHolder.Title = function EmptyPlaceHolderTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("mt-5 font-heading text-2xl font-bold", className)}
      {...props}
    />
  );
};

// Other way of doing same thing
interface EmptyPlaceHolderDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

EmptyPlaceHolder.Description = function EmptyPlaceHolderDescription({
  className,
  ...props
}: EmptyPlaceHolderDescriptionProps) {
  return (
    <p
      className={cn(
        "mb-5 mt-1.5 text-center text-sm font-normal leading-6 text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
};
