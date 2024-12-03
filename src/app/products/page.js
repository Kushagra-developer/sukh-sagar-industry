"use client";

import React from "react";

const products = [
  { name: "Locating Pin", image: "/images/product1.jpg" },
  { name: "Product 2", image: "/images/product2.jpg" },
  { name: "Product 3", image: "/images/product3.jpg" },
  { name: "Product 4", image: "/images/product4.jpg" },
  { name: "Product 5", image: "/images/product5.jpg" },
  { name: "Product 6", image: "/images/product6.jpg" },
  { name: "Product 6", image: "/images/product6.jpg" },
  { name: "Product 6", image: "/images/product6.jpg" },
  { name: "Product 6", image: "/images/product6.jpg" },
];

const ProductCard = ({ name, image }) => {
  return (
    <div className="group perspective">
      <div className="relative h-48 w-48 transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
 
        <div className="absolute inset-0 bg-white rounded-2xl shadow-lg backface-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
       
        <div className="absolute inset-0 bg-rose-600 text-white flex items-center justify-center rounded-2xl shadow-lg rotate-y-180 backface-hidden">
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section
      className="container mx-auto px-5 md:px-16 py-10 flex flex-col gap-5"
      id="products"
    >
      <div>
        <span className="service-name text-center block uppercase tracking-wider text-rose-600">
          Our Products
        </span>
        <h2 className="title text-center text-2xl font-bold mt-2">
          Discover Our Range
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} image={product.image} />
        ))}
      </div>
    </section>
  );
};

export default Products;