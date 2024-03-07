import { classNames } from "primereact/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  outline?: boolean;
  secondary?: boolean;
  iconRight?: boolean;
  size?: "lg" | "md" | "sm";
  label?: string;
  icon?: string;
  loading?: boolean;
  customStyles?: string;
};

export const Button = ({
  outline,
  disabled,
  icon,
  iconRight,
  label,
  size,
  loading,
  secondary,
  customStyles,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={classNames(
        "flex justify-center rounded items-center",
        "disabled:opacity-30 disabled:cursor-auto",
        customStyles,
        "transition ease-in-out duration-300",
        {
          "bg-primary text-white enabled:hover:bg-secondary": !outline,
          "bg-transparent text-primary border border-primary enabled:hover:text-secondary enabled:hover:border-secondary":
            outline && !secondary,
          "bg-transparent text-secondary/50 border border-secondary/50 enabled:hover:text-primary enabled:hover:border-primary":
            outline && secondary,
          "flex-row-reverse": iconRight,
        },
        {
          "px-3 py-2 text-sm": !size,
          "px-3 py-2 text-base gap-2": size === "sm",
          "px-3 py-3 text-normal": size === "md",
          "px-4 py-3 text-normal leading-[140%]": size === "lg",
        }
      )}
    >
      {icon && (
        <i
          className={classNames({
            "!text-base leading-[100%]": !size,
            "animate-spin icon-loader-2": loading,
            [`${icon}`]: !loading,
          })}
        />
      )}
      {loading && !icon && <i className="animate-spin icon-loader-2" />}
      {(!loading || (loading && icon)) && (
        <span
          className={classNames("font-medium leading-[100%]", {
            "px-4 text-[12px]": !size,
            "px-2": size === "md",
            "text-lg leading-[22px]": size === "lg",
          })}
        >
          {label}
        </span>
      )}
    </button>
  );
};
