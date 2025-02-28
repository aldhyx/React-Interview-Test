import { useState, type PropsWithChildren } from "react";
import { ChevronDown, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const CollapsibleItem = ({
  title,
  children,
}: PropsWithChildren<{
  title: string;
}>) => {
  const [open, setIsOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          // @todo
          console.log("Click");
          setIsOpen((prevState) => !prevState);
        }}
        onKeyDown={(e) => {
          // @todo
          if (e.key === "Enter") {
            console.log("Click");
            setIsOpen((prevState) => !prevState);
          }
        }}
        className="flex gap-12 bg-secondary rounded p-4 cursor-pointer justify-between"
      >
        <span className="truncate block">{title}</span>

        <span>
          <ChevronDown
            className={cn(["transition-all", open && "rotate-180"])}
          />
        </span>
      </div>

      {open && <div>{children}</div>}
    </>
  );
};

export default CollapsibleItem;
