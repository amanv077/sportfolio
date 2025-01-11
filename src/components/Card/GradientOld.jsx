const buttonVariants = clsx(
  "relative flex flex-row justify-center items-center p-[1px] isolate rounded-[12px] w-[192px] h-[56px] overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-900",
        light: "",
        dark: "bg-[rgba(102,179,255,0.1)] shadow-[0px_43px_17px_rgba(10,8,140,0.01),0px_24px_14px_rgba(10,8,140,0.05),0px_11px_11px_rgba(10,8,140,0.09),0px_3px_6px_rgba(10,8,140,0.1)]",
      },
      size: {
        sm: "w-[144px] h-[42px] text-sm",
        md: "w-[192px] h-[56px] text-base",
        lg: "w-[240px] h-[70px] text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export const Button = ({
  className,
  variant,
  size,
  fullWidth,
  children,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, size, fullWidth, className })}
      {...props}
    >
      {(variant === "default" || variant === "light") && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#041526] via-[#3F8DE8] to-[#041526] opacity-80" />
          <div
            className="flex justify-center items-center w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-[12px] z-[1]"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%), radial-gradient(117.84% 418.8% at 101.41% 0%, #CCE6FF 0%, #1588FF 44.94%, #0076FF 100%)",
            }}
          >
            <span
              className="font-semibold"
              style={{
                background: "linear-gradient(0deg, #1DA1F2 -30%, #03111A 85%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {children}
            </span>
          </div>
        </>
      )}
      {variant === "dark" && (
        <div
          className="flex justify-center items-center w-full h-full rounded-[12px]"
          style={{
            background:
              "linear-gradient(0deg, rgba(102, 179, 255, 0.1), rgba(102, 179, 255, 0.1)), radial-gradient(107.04% 380% at 101.41% 0%, rgba(23, 126, 230, 0.3) 0%, rgba(8, 52, 96, 0.3) 44.94%, rgba(0, 12, 26, 0.3) 100%)",
          }}
        >
          <span className="font-medium text-[#E5F2FF]">{children}</span>
        </div>
      )}
      {variant === "ghost" && <span>{children}</span>}
    </button>
  );
};
