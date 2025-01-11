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
  radialGradientPosition = "5.47% 5.47%",
  children,
  ...props
}) => {
  return (
    <div className={cardVariants({ size, fullWidth, className })} {...props}>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(94.53% 121.41% at ${radialGradientPosition}, rgba(0, 12, 26, 0.4) 0%, rgba(8, 52, 96, 0.4) 55.06%, rgba(23, 126, 230, 0.4) 100%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card;
