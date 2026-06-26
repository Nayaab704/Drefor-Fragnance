import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type LinkButtonProps = BaseButtonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseButtonProps>;

type NativeButtonProps = BaseButtonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseButtonProps | "href"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;
type LinkButtonRestProps = Omit<LinkButtonProps, keyof BaseButtonProps>;
type NativeButtonRestProps = Omit<NativeButtonProps, keyof BaseButtonProps>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-champagne bg-champagne text-obsidian shadow-[0_14px_40px_rgba(216,181,109,0.18)] hover:bg-soft-gold focus-visible:outline-champagne",
  secondary:
    "border border-ivory/50 bg-ivory/10 text-ivory hover:border-champagne hover:text-champagne focus-visible:outline-ivory",
  ghost:
    "border border-transparent bg-transparent text-ivory hover:text-champagne focus-visible:outline-champagne",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-6 text-base",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...restProps
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in restProps) {
    const linkProps = restProps as LinkButtonRestProps;

    return (
      <Link className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = restProps as NativeButtonRestProps;

  return (
    <button
      className={classes}
      {...buttonProps}
      type={buttonProps.type ?? "button"}
    >
      {children}
    </button>
  );
}
