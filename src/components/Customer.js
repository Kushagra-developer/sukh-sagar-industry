"use client";

import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomerCard = ({ name, title, testimonial, image }) => {
  return (
    <div className="mx-2 md:mx-3 p-6 transition-all hover:shadow-lg flex flex-col gap-4 rounded-3xl border border-neutral-200">
      <h2 className="text-lg font-semibold text-center">{name}</h2>
      <p className="text-sm text-center text-neutral-500">{title}</p>
      <p className="text-sm text-center text-neutral-600">{testimonial}</p>
    </div>
  );
};

const Customers = () => {
  const customers = [
    {
      name: "Hinata Polymers",
    },
    {
      name: "Steel Well Engineering and Services",
    },
    {
      name: "Shrishti Engineering",
    },
    {
      name: "BPS Engineering",
    },
    {
      name: "Shubh Enterprises",
    },
    {
      name: "Jyoti Engineering",
    },
    {
      name: "RK Polymer",
    },
    {
      name: "Kirat International",
    },
    {
      name: "Plasteck",
    },
    {
      name: "SDM Auto Industry",
    },
    {
      name: "Toshani Auto Products",
    },
  ];

  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="customers"
    >
      <div>
        <span className="service-name text-center block uppercase tracking-wider text-rose-600">
          Our Customers
        </span>
        <h2 className="title text-center text-2xl font-bold mt-2">
          Trusted by Industry Leaders
        </h2>
      </div>

      <Carousel {...carouselParams}>
        {customers.map((customer, index) => (
          <CustomerCard
            key={index}
            name={customer.name}
            title={customer.title}
            testimonial={customer.testimonial}
            image={customer.image}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default Customers;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: true,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: false,
  responsive: responsive,
  showDots: true,
  sliderClass: "",
  slidesToSlide: 1,
};