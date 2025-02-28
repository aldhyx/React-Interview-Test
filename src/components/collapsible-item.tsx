import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState, type ReactElement } from "react";

const CollapsibleItem = ({
  title,
  renderComponent,
}: {
  title: string;
  renderComponent: (props: { expanded: boolean }) => ReactElement;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          setExpanded((prevState) => !prevState);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setExpanded((prevState) => !prevState);
          }
        }}
        className="flex gap-12 bg-secondary rounded p-4 cursor-pointer justify-between"
      >
        <span className="truncate block">{title}</span>

        <span>
          <ChevronDown
            className={cn([
              "transition-transform duration-300",
              expanded && "rotate-180",
            ])}
          />
        </span>
      </div>

      <div
        className={cn([
          "transition-all duration-300 overflow-hidden",
          expanded ? "opacity-100 max-h-max" : "opacity-0 max-h-0",
        ])}
      >
        {renderComponent({ expanded })}
      </div>
    </>
  );
};

export default CollapsibleItem;
