import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-[1230px] mx-auto flex items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
