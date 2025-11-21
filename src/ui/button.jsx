import React from "react";

// VARIANT STYLES (Tailwind only)
const variantStyles = {
  default:
    "bg-black text-white hover:bg-black/85",
  destructive:
    "bg-red-600 text-white hover:bg-red-700",
  outline:
    "border border-black bg-white hover:bg-gray-100",
  secondary:
    "bg-gray-200 text-black hover:bg-gray-300",
  ghost:
    "bg-transparent hover:bg-gray-100",
  link:
    "text-black underline-offset-4 hover:underline bg-transparent",
};

// SIZE STYLES
const sizeStyles = {
  default: "h-10 px-4 py-2",
  sm: "h-8 px-3 text-sm",
  lg: "h-12 px-6 text-lg",
  icon: "h-10 w-10 p-0 flex items-center justify-center",
};

const Button = React.forwardRef(
  (
    {
      children,
      className = "",
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    const variantClass = variantStyles[variant] || variantStyles.default;
    const sizeClass = sizeStyles[size] || sizeStyles.default;

    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantClass} ${sizeClass} ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
