import React from "react";

const ContactSection = () => {
  return (
    <div
      id="contact" // 🔹 Yeh line add ki gayi hai for internal linking
      className="min-h-screen bg-[#f7f6fc] flex flex-col justify-between"
    >
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 py-12 gap-x-10">
        {/* Left Text */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-base text-black leading-relaxed">
            if you have any questions that you'd like to ask us,<br />
            feel free to get in touch or book a consultation
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 w-full bg-[#eae7f3] rounded-xl p-8 shadow-md">
          <div className="flex flex-col items-center mb-6">
            <div className="text-4xl mb-2">💰</div>
            <h3 className="text-xl font-bold">Get Started</h3>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                placeholder="Type your message here"
                rows={4}
                className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-400 hover:bg-green-500 text-white py-3 rounded-md font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-black px-6 pb-4">
        ©2024 docport all rights reserved
      </footer>
    </div>
  );
};

export default ContactSection;
