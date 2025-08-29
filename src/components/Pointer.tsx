import mousePointer from "@/assets/images/mouse-pointer.svg";
import { twMerge } from "tailwind-merge";

export default function Pointer(props: {
  name: string;
  color?: "red" | "blue";
}) {
  const { name, color } = props;

  return (
    <div className="relative inline-flex items-center">
      <div className="">
        <img
          src={mousePointer.src}
          alt="mouse pointer"
          className="size-5 invert"
        />
      </div>
      <div
        className={twMerge(
          "inline-flex rounded-full rounded-tl-none px-2 text-sm font-bold",
          color === "red" ? "bg-red-500" : "bg-blue-400",
        )}
      >
        {name}
      </div>
    </div>
  );
}
