import { cva } from "class-variance-authority";

const gradientTextStyles = cva(
  "font-bold tracking-[-0.01em] flex items-center font-onest",
  {
    variants: {
      size: {
        sm: "text-[28px] leading-[120%]",
        md: "text-[36px] leading-[115%]",
        lg: "text-[48px] leading-[105%]",
        xl: "text-[56px] leading-[125%]",
        "2xl": "text-[80px] leading-[125%]",
      },
      variant: {
        white: "text-white",
        lighterGradient:
          "bg-gradient-to-t from-[#66B3FF] to-[#E6F2FF] bg-clip-text text-transparent text-shadow",
        normalGradient:
          "bg-gradient-to-t from-[#66B3FF] to-[#E6F2FF] bg-clip-text text-transparent text-shadow",
        darkerGradient:
          "bg-gradient-to-t from-[#0073E6] to-[#B3D9FF] bg-clip-text text-transparent text-shadow",
      },
    },
    defaultVariants: {
      size: "lg",
      variant: "white",
    },
  }
);

const GradientText = ({
  children,
  size,
  variant,
  className,
  component = "span",
}) => {
  const Component = component;
  return (
    <Component className={gradientTextStyles({ size, variant, className })}>
      {children}
    </Component>
  );
};

export default GradientText;
