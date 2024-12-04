"use client";

import React from "react";

const certificates = [
    
   
  {
    title: "ISO 9001:2015",
    link: "./SUKH SAGAR INDUSTRIES FINAL REWISE.pdf",
  },
  {
    title: "MSME Certificate",
    link: "./MSME CERTIFICATE.pdf",
  },
  {
    title: "GST Registration",
    link: "./GST Register.pdf",
  },
];

const CertificatePage = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 py-10 flex flex-col gap-10" id="certificates">
      <div>
      < br/>
     < br/>
     < br/>
        <h2 className="text-center text-2xl font-bold text-rose-600">Certificates</h2>
        <p className="text-center mt-2 text-gray-700 dark:text-gray-300">
          View and download our official certificates below.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 flex flex-col items-center justify-between"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              {certificate.title}
            </h3>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="capitalize text-sm sm:text-base border-2 hover:border-2 font-semibold sm:py-3 py-2 px-3 sm:px-6 text-rose-600 border-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:text-white rounded-full"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
     < br/>
     < br/>
     < br/>
     < br/>
     < br/>
     < br/>
     < br/>
     < br/>
   
    </section>
  );
};

export default CertificatePage;
