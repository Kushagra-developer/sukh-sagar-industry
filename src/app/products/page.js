"use client";

import React from "react";

const products = [
  { name: "14 Hex Nut", image: "/parts/14 Hex Nut.png" },
  { name: "Bush(10 x 18mm)", image: "/parts/Bush (10x18 mm).png" },
  { name: "Bush Male Female(26 mm)", image: "/parts/Bush Male Female (26 mm).png" },
  { name: "Bush(20 x 20mm)", image: "/parts/Bush(20 x 20mm).png" },
  { name: "Caster Bush(24 x 18) Tapper", image: "/parts/Caster Bush(24 x 18) Tapper.png" },
  { name: "Caster Bush(24 x 18)", image: "/parts/Caster Bush(24 x 18).png" },
  { name: "Insert Honda Bush(Het)", image: "/parts/Insert Honda Bush(Het).png" },
  { name: "Insert Honda Bush(N/M)", image: "/parts/Insert Honda Bush(N:M).png" },
  { name: "Insert Honda Bush(O/M)", image: "/parts/Insert Honda Bush(O:M).png" },
  { name: "Insert Roller Jupiter", image: "/parts/Insert Roller Jupiter .png" },
  { name: "Insert Suzuki Access(New)", image: "/parts/Insert Suzuki Access(New).png" },
  { name: "Jacket(19mm)", image: "/parts/Jacket(19 mm).png" },
  { name: "Key(10 x 40)", image: "/parts/Key(10 x 40).png" },
  { name: "Locating Pin", image: "/parts/Locating Pin.png" },
  { name: "M5 x 0.8 Hex Nut", image: "/parts/M5 x 0.8 Hex Nut.png" },
  { name: "Nalki(19 x 64)", image: "/parts/Nalki(19 x 64).png" },
  { name: "Nalki(19 x 92)", image: "/parts/Nalki(19 x 92).png" },
  { name: "Nut(26mm)", image: "/parts/Nut (26 mm).png" },
  { name: "Pin(10 x 57 mm)", image: "/parts/Pin(10 x 57 mm).png" },
  { name: "Thread Bush Twin Tube (16 x 38 mm)", image: "/parts/Thread Bush Twin Tube (16 x 38 mm).png" },
];

const ProductCard = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt={name || "Product"}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-2 text-center text-lg font-medium text-gray-800">
        {name || "Unnamed Product"}
      </h3>
    </div>
  );
};

const Products = () => {
  return (
    <section
      className="container mx-auto px-5 md:px-16 py-10 flex flex-col gap-8"
      id="products"
    >
      <div>
        <br />
        <br />
        <br />
        <span className="service-name text-center block uppercase tracking-wider text-rose-600">
          Our Products
        </span>
        <h2 className="title text-center text-2xl font-bold mt-2">
          Discover Our Range
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} image={product.image} />
        ))}
      </div>
      <h2 className="title text-center text-2xl font-bold mt-2">
          New parts coming soon......
          <br/>
          Contact us and send us the drawing if you need a custom part.
        </h2>
    </section>
  );
};

export default Products;
