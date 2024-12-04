import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Team = () => {
  return (
  
    <section className="container mx-auto px-5 md:px-16 lg:px-24 py-16">
          <br />
          <br />
      <span className="service-name text-center text-lg font-semibold">OUR FOUNDER</span>
      <h2 className="title text-center md:w-1/2 mx-auto text-2xl font-medium mt-4">
        “Visionary founder leading a team of excellence.”
      </h2>
      <div className="mx-auto mt-12 flex flex-col items-center justify-center">
        <img
          src="/team/img-1.jpeg"
          alt="Founder"
          className="w-40 h-40 rounded-full object-cover mb-4 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        />
        <h3 className="text-xl font-semibold text-center">Dhiraj Sachdeva</h3>
        <p className="text-sm text-gray-500 text-center">Founder | Sukh Sagar Industries</p>

        <div className="mt-4 flex space-x-4 justify-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="mt-10 text-center mx-auto max-w-3xl">
  <p className="text-lg text-gray-700">
    Hi, I’m <strong>Dhiraj Sachdeva</strong>, the founder and visionary behind Sukh Sagar Industries. 
    With a passion for innovation and a drive for excellence, I lead a dedicated team towards delivering high-quality products and services. 
    Our goal is to continuously evolve and provide exceptional value to our customers and stakeholders.
  </p>
</div>

      </div>
    </section>
  );
};

export default Team;