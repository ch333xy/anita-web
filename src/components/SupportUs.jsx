import React, { useState } from "react";

const SupportUs = () => {
  return (
    <div
      id="support"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Support Us ☕︎</h1>

      <p className="text-lg text-center mb-4">
        Thank you for supporting us! You can contribute to our cause by scanning
        the GCash QR code below or contacting us via email or Facebook.
      </p>

      {/* GCash QR Code */}
      <div className="mb-6">
        <img
          src="https://i.ibb.co/Yy8DfLr/IMG-3300-600x600.webp"
          alt="GCash QR Code"
          className="w-48 h-48 rounded-md shadow-lg"
        />
      </div>

      {/* Contact Info */}
      <div className="text-center">
        <p className="text-xl font-semibold mb-2">Contact Us</p>

        {/* Hyperlinked Email */}
        <a
          href="mailto:support@example.com"
          className="text-blue-500 hover:underline"
        >
          cheeexy1@gmail.com
        </a>

        <div className="mt-4">
          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit our Facebook page
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportUs;
