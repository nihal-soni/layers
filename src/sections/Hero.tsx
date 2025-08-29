import Image from "next/image";
import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import designeExample1Image from "@/assets/images/design-example-1.png";
import designeExample2Image from "@/assets/images/design-example-2.png";

export const Hero = () => {
  return (
    <section className="overflow-x-clip py-24">
      <div className="relative container mx-auto max-w-5xl">
        <div className="absolute top-16 -left-68 hidden lg:block">
          <Image src={designeExample1Image} alt="" />
        </div>
        <div className="absolute -top-16 -right-100 hidden lg:block">
          <Image src={designeExample2Image} alt="" />
        </div>
        <div className="absolute left-36 top-96 hidden lg:block">
          <Pointer name="Andria" />
        </div>
        <div className=" absolute -top-4 right-50 hidden lg:block">
          <Pointer name="Bryan" color="red" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex rounded-full border bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-900">
            $7.5M seed round raised
          </div>
        </div>
        <h1 className="mt-6 text-center text-6xl font-medium md:text-7xl lg:text-8xl">
          Impactful design, created effortlessly
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-center text-xl text-gray-400">
          Design tools shouldn&apos;t slow you down . Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="mx-auto mt-8 flex max-w-lg rounded-full border border-white/20  p-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent px-4 text-white placeholder-gray-500 focus:bg-transparent focus:outline-none md:flex-1"
          />

          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};
