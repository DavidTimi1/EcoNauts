

import mainBg from "../assets/tree.png"


const Mission = () => {
  return (
    <div className="bg-gray-50 p-6 md:p-12">
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Our mission is to create and provide{" "}
          <span className="text-green-600">innovative, eco-friendly solutions</span> that
          promote recycling and green living.
        </h2>
        <p className="text-gray-600 mt-4">
          We believe in a future where style and sustainability coexist harmoniously.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800">
          About GreenPark
        </button>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative h-40 md:h-48 lg:h-56">
          <img
            src={mainBg}
            alt="Forest"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative h-40 md:h-48 lg:h-56">
          <img
            src={mainBg}
            alt="Solar Panels"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative h-40 md:h-48 lg:h-56">
          <img
            src={mainBg}
            alt="Stairs with Greenery"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="relative h-40 md:h-48 lg:h-56">
          <img
            src={mainBg}
            alt="Wind Turbines"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-xl md:text-3xl font-semibold text-gray-800 text-center">
          Eco-friendly designs & recycling innovations.
        </h3>
        <p className="text-gray-600 text-center mt-2">
          Our commitment to a greener future is reflected in every product we create and service we provide.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h4 className="text-lg font-medium text-gray-800">
              Our people are the heart of our mission.
            </h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h4 className="text-lg font-medium text-gray-800">
              Comprehensive solutions to promote sustainability.
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
