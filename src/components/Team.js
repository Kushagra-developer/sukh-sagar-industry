import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Team = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 lg:px-24 relative"> {/* Add relative positioning here */}
      <span className="service-name text-center">OUR FOUNDER</span>
      <h2 className="title text-center md:w-1/2 mx-auto">
      “Visionary founder leading a team of excellence.""
      </h2>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-8 mt-16 relative">
        <div className="absolute left-[450px] top-0 flex flex-col items-center justify-center">
          {/* Team Card */}
          <img
            src="/team/img-1.jpeg"
            alt="Founder"
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-center">Dhiraj Sachdeva</h3>
          <p className="text-sm text-gray-500 text-center">Founder</p>
          

          {/* Social Media Icons */}
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
        </div>
      </div>
    </section>
  );
};

export default Team;
