import { cn } from "@/lib/utils";
import { ChangeEvent, forwardRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface TextareaAutosizeProps {
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

const CustomTextareaAutosize = forwardRef<
  HTMLTextAreaElement,
  TextareaAutosizeProps
>(
  (
    {
      className,
      onFocus,
      onBlur,
      value,
      onChange,
      onKeyDown,
      placeholder,
      disabled,
    },
    ref,
  ) => {
    const handleFocus = () => {
      onFocus?.();
    };

    const handleBlur = () => {
      onBlur?.();
    };

    return (
      <TextareaAutosize
        className={cn(
          className,
          `flex h-fit max-h-[100px] w-full resize-none rounded-xl border border-input bg-background px-3 py-2 text-sm  ring-offset-background scrollbar-none placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={ref}
        placeholder={placeholder}
        disabled={disabled}
      />
    );
  },
);

export default CustomTextareaAutosize;
