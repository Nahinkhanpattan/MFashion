import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Map Section */}
      <div className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111551.9926412813!2d-90.27317134641879!3d38.606612219170856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1597926938024!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Info Text */}
            <div className="w-full md:w-1/2 px-4">
              <div className="mb-10">
                <span className="text-[#e53637] font-bold text-sm uppercase tracking-widest">Information</span>
                <h2 className="text-3xl font-bold text-[#111111] my-3">Contact Us</h2>
                <p className="text-[#777777] text-sm mb-6">
                  As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
                </p>
                <ul className="space-y-6 text-[#111111]">
                  <li>
                    <h4 className="font-bold mb-1">America</h4>
                    <p className="text-sm">195 E Parker Square Dr, Parker, CO 801 <br />+43 982-314-0958</p>
                  </li>
                  <li>
                    <h4 className="font-bold mb-1">France</h4>
                    <p className="text-sm">109 Avenue Léon, 63 Clermont-Ferrand <br />+12 345-423-9893</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2 px-4">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-300 px-4 py-3 w-full rounded text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 px-4 py-3 w-full rounded text-sm"
                  />
                </div>
                <textarea
                  rows="6"
                  placeholder="Message"
                  className="border border-gray-300 px-4 py-3 w-full rounded text-sm"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#111111] text-white py-3 px-6 rounded font-semibold uppercase hover:bg-[#e53637] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
