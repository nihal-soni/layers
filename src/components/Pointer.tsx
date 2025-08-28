import mousePointer from "@/assets/images/mouse-pointer.svg";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function Pointer(props: {
  name: string;
  color?: "red" | "blue";
}) {
  const { name, color } = props;

  return (
    <div className="relative inline-flex items-center">
      <div className="">
        <Image
          src={mousePointer.src}
          alt="mouse pointer"
          className="size-5 invert"
        />
      </div>
      <div
        className={twMerge(
          "inline-flex rounded-full font-bold text-sm px-2 rounded-tl-none",
          color === "red" ? "bg-red-500" : "bg-blue-400"
        )}
      >
        {name}
      </div>
    </div>
  );
}
