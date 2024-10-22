import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div>
      {/* Section 1: Background Image */}
      <div
        className="flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: 'url("search.png")', height: '300px' }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-white mb-6" >Contact Us</h1>
        </div>
      </div>

      {/* Section 2: Title and Paragraph */}
      <div className="bg-gray-100 py-16 my-8 mb-8 mt-8 " style={{marginTop:'100px'}}> 
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Get In Touch With Us</h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              For More Information About Our Product & Services. <br />Please Feel Free To Drop Us
              An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Two-column section */}
      <div className="bg-gray-100 py-16" style={{marginTop:'100px'}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-row p-4 my-11 md:flex-row justify-center items-stretch gap-12">
            {/* Column 1: Contact Info */}
            <div className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-lg flex-grow">
              <div className="mb-6">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 mr-3" />
                <span className="font-bold">Address:</span>
                <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
              </div>

              <div className="mb-6">
                <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-3" />
                <span className="font-bold">Phone:</span>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>

              <div>
                <FontAwesomeIcon icon={faClock} className="text-gray-500 mr-3" />
                <span className="font-bold">Working Time:</span>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>

            {/* Column 2: Contact Form */}
            <div className="w-full md:w-1/2 p-8 bg-white shadow-lg rounded-lg flex-grow">
              <form className="space-y-10">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
          
                <div className="text-center">
                  <button
                    type="submit"
                    className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: "#B88E2F" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
