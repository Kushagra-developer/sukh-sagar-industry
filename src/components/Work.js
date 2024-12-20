import Image from "next/image";

const WorkCard = ({ num, title, description }) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
      <p className="leading-loose">{description}</p>
    </div>
  );
};

const Work = () => {
  return (
    <section className="w-full bg-rose-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <span className="uppercase block font-semibold text-sm tracking-widest text-center text-rose-200">
            WHAT'S THE FUNCTION
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center ">
            Let's see how it works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <div className="relative">
            <WorkCard
              num="01"
              title="Set Production Requirements"
              description="Define the production specifications for your custom product and place an order for manufacturing."
            />
            <Image
              src={"/work/arrow.svg"}
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
          </div>

          <div className="relative">
            <WorkCard
              num="02"
              title="Assembly Receives Order & Materials"
              description="Our assembly line prepares the necessary materials based on your order and begins initial processing."
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
          </div>
          
          <div className="relative">
            <WorkCard
              num="03"
              title="Assembly Initiates Production"
              description="The production process begins with high-quality standards and optimized efficiency to meet your product needs."
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
          </div>
          
          <div className="relative">
            <WorkCard
              num="04"
              title="Customer Receives Products"
              description="Once the production is complete, we ensure timely delivery of your finished product, meeting the highest quality standards."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;