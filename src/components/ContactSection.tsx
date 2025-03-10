import { useState } from 'react';

const ContactSection = () => {
    const [isCopied, setIsCopied] = useState(false);
    const phoneNumber = '+971 50 440 6565';

    const handleCopy = () => {
        navigator.clipboard.writeText(phoneNumber).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset copy state after 2 seconds
        });
    };

    return (
        <div className="container px-8 py-16 mx-auto max-w-7xl">
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-semibold text-white">Get In Touch</h2>
                <p className="mt-4 text-lg text-gray-300">
                    Our support team will get back to you ASAP via email.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="text-white">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold">Address</h3>
                        <p className="mt-4 text-lg">
                            Alfutaim Office Tower, Day to Day Building, 1st Floor - Office 102 Smart Hub HQ
                        </p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold">Call Us</h3>
                        <div className="flex items-center mt-4 text-lg group">
                            <p className="mr-2">{phoneNumber}</p>
                            <button
                                onClick={handleCopy}
                                className="ml-2 text-lg text-gray-400 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                aria-label="Copy phone number"
                            >
                                📋 {/* Unicode clipboard icon */}
                            </button>
                            {isCopied && (
                                <span className="ml-2 text-sm text-blue-300">Copied!</span>
                            )}
                        </div>
                    </div>


                    <div>
                        <h3 className="text-2xl font-semibold">Email Us</h3>
                        <p className="mt-4 text-lg">
                            <a href="mailto:ibrahim@smartclassic.ae" className="hover:text-blue-400">
                                ibrahim@smartclassic.ae
                            </a>
                        </p>
                    </div>

                    <div className="w-full mt-6">
                        <iframe
                            className="w-full h-64 rounded-lg shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28864.80774685473!2d55.27227151083985!3d25.267188700000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4336045107df%3A0x593226eab5a9c553!2sAl%20Futtaim%20Tower!5e0!3m2!1sen!2sae!4v1741345788978!5m2!1sen!2sae"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="mb-6 text-2xl font-semibold text-white">Contact Form</h3>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="text-lg text-white">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 mt-2 text-white bg-gray-700 rounded-lg focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="text-lg text-white">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 mt-2 text-white bg-gray-700 rounded-lg focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="subject" className="text-lg text-white">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                                className="w-full px-4 py-2 mt-2 text-white bg-gray-700 rounded-lg focus:outline-none"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="text-lg text-white">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                rows={4}
                                className="w-full px-4 py-2 mt-2 text-white bg-gray-700 rounded-lg focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 text-lg font-semibold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
