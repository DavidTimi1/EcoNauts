const ContactUs = () => {
    return (
      <div className="bg-green-500 text-white py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <p className="mt-2 text-lg md:text-xl">
              We’d love to hear from you! Whether you have a question or want to book an appointment, we’re here to help.
            </p>
          </div>
  
          {/* Form */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
  
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
  
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  