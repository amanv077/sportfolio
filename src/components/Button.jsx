import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative flex justify-center items-center rounded-lg font-semibold transition-all overflow-hidden",
  {
    variants: {
      variant: {
        light: "",
        dark: "shadow-[0px_43px_17px_rgba(10,8,140,0.01),0px_24px_14px_rgba(10,8,140,0.05),0px_11px_11px_rgba(10,8,140,0.09),0px_3px_6px_rgba(10,8,140,0.1)]",
      },
      size: {
        sm: "text-xs py-2 px-4",
        md: "text-sm py-3 px-6 rounded-xl",
        lg: "text-md py-4 px-8",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "md",
      fullWidth: false,
    },
  }
);
const Button = ({
  className,
  variant,
  size,
  fullWidth,
  radialGradientPosition = "101.41% 0%",
  children,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, size, fullWidth, className })}
      {...props}
    >
      {variant === "light" && (
        <>
          <div
            className="absolute inset-0 pointer-events-none"
            role="presentation"
            style={{
              background:
                "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(315deg, #041526 20%, #3F8DE8 50%, #041526 80%)",
              backgroundBlendMode: "plus-darker, overlay, normal",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            role="presentation"
            style={{
              background: `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%), radial-gradient(117.84% 418.8% at ${radialGradientPosition}, #CCE6FF 0%, #1588FF 44.94%, #0076FF 100%)`,
            }}
          />
        </>
      )}
      {variant === "dark" && (
        <div
          className="absolute inset-0 pointer-events-none"
          role="presentation"
          style={{
            background: `linear-gradient(0deg, rgba(102, 179, 255, 0.1), rgba(102, 179, 255, 0.1)), radial-gradient(107.04% 380% at ${radialGradientPosition}, rgba(23, 126, 230, 0.3) 0%, rgba(8, 52, 96, 0.3) 44.94%, rgba(0, 12, 26, 0.3) 100%)`,
          }}
        />
      )}
      <span
        className="relative z-10 font-semibold"
        style={{
          background:
            variant === "light"
              ? "linear-gradient(0deg, #1DA1F2 -30%, #03111A 85%)"
              : "none",
          WebkitBackgroundClip: variant === "light" ? "text" : "unset",
          WebkitTextFillColor: variant === "light" ? "transparent" : "inherit",
          backgroundClip: variant === "light" ? "text" : "unset",
          color: variant === "dark" ? "#E5F2FF" : "inherit",
        }}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
