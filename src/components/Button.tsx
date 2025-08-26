import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-10 rounded-full px-4 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400 hover:text-white hover:bg-transparent",
      secondary: "border-white text-white bg-transparent hover:bg-lime-400 hover:text-black",
    },
    size : {
      sm: "h-10"
    },
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, ...otherProps } = props;

  return (
    <button
      className={`${classes({ variant, size })} ${className}`}
      {...otherProps}
      
    />
  );
}