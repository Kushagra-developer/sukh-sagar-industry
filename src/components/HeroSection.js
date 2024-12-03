import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
          <p>Top-Quality Components</p>
          <p>to Drive Performance</p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
         Explore precision-crafted turned parts designed for excellence and reliability in the automotive industry✨✨
        </p>
        <button className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-transparent hover:text-rose-600 rounded-full">
          <Link href="https://sukhsagarindustries.blogspot.com/2024/12/sukh-sagar-industries.html" target="_blank">
            About Us
          </Link>
        </button>
      </div>
      <div className="w-full relative">
  <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
    <Image
      src={"/myhero.png"}
      width={800}
      height={500}
      alt="hero Image"
      className="object-contain mx-auto rounded-lg"/>
  </div>
      </div>
    </section>
  );
};

export default HeroSection;
