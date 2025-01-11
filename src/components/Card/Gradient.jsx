import { cva } from "class-variance-authority";

const cardVariants = cva(
  "relative rounded-[24px] overflow-hidden backdrop-blur-[17px]",
  {
    variants: {
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      size: "md",
      fullWidth: false,
    },
  }
);

const Card = ({
  className,
  size,
  fullWidth,
  isLinearGradient = false,
  radialGradientPosition = "5.47% 5.47%",
  children,
  ...props
}) => {
  return (
    <div className={cardVariants({ size, fullWidth })} {...props}>
      <div
        className="absolute inset-0"
        style={{
          background: isLinearGradient
            ? "linear-gradient(180deg, #000B1A 10%, #001E59 50%, #000B1A 90%)"
            : `radial-gradient(150% 150% at ${radialGradientPosition}, rgba(23, 126, 230, 0.4) 0%, rgba(8, 52, 96, 0.4) 55.06%, rgba(0, 12, 26, 0.4) 100%)`,
        }}
      />
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
};

export default Card;
