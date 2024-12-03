"use client";
import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative container px-5 md:px-16 mx-auto">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        <div className="relative w-full flex-1">
          <Image
            src={"/banner.jpg"}
            width={500}
            height={500}
            alt="video banner"
            className="object-cover w-full"
          />
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">
            <span className="service-name text-center lg:text-left">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
              Business Goals Achieved with Design
            </h2>
          </div>
          <ServiceCard
            imgSrc={"/features/3.svg"}
            title="Smart Features"
            desc="Our components are designed with advanced technology to deliver superior performance and efficiency, helping your business stay ahead in the automotive sectors."
          />
          <ServiceCard
            imgSrc={"/features/2.svg"}
            title="Secure Contents"
            desc="We ensure every product is manufactured with strict quality control and precision, providing reliable solutions that meet industry standards for safety and performance."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
