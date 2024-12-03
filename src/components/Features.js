import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">WHATS THE FUNCTION</span>
      <h2 className="title text-center">Meet the feature of product</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Fast Performance"
          desc="Our components are crafted to ensure high-speed efficiency and seamless operation, meeting the dynamic demands of the automotive industry."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Strategic Partnerships"
          desc="We collaborate with industry leaders to deliver innovative solutions, ensuring mutual growth and sustained success."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Pro Manufacturing Standards"
          desc="We adhere to advanced production techniques and quality control measures, guaranteeing top-notch products for our clients."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="You can contact us anytime for assistance with orders or support. We are always ready to help ensure your needs are met promptly and efficiently."
        />
      </div>
    </section>
  );
};

export default Features;
