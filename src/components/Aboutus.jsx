import React, { useState } from "react";
const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      name: "John Paul Kevin T. Aviñante",
      role: "Frontend Developer",
      image: "https://via.placeholder.com/150",
      description: "Nigguh.",
    },
    {
      name: "Francis David G. Escobar",
      role: "Backend Developer",
      image: "https://via.placeholder.com/150",
      description:
        "Build a man a fire, and he'll be warm for a day. Set a man on fire, and he'll be warm for the rest of his life.",
    },
    {
      name: "Kurt Toledo",
      role: "Project Engineer",
      image: "https://via.placeholder.com/150",
      description: "Charlie oversees the daily operations and processes.",
    },
    {
      name: "Nathaniel Hernandez",
      role: "Database Administrator",
      image: "https://via.placeholder.com/150",
      description: "No one can make you feel inferior without your consent",
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedMember(null);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed p-8 scroll-smooth"
      style={{
        backgroundImage: `url(https://i.ibb.co/Fsy9ybY/449305141-1186634686028619-4768944960582721562-n.jpg)`,
      }} // Background image
    >
      {/* Translucent overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content container to ensure text is on top of the translucent layer */}
      <div className="relative z-10 text-white">
        {/* Organization Description */}
        <div id="aboutus" className="text-center mb-12">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            We are a dynamic team dedicated to bringing innovation and
            excellence in every aspect of our work. Our team is composed of
            hardworking comupter science students who are passionate about
            delivering impactful and sustainable solutions.
          </p>
        </div>

        {/* Team Members Section */}
        <div className="flex justify-center space-x-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="cursor-pointer text-center"
              onClick={() => openModal(member)}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="mt-4 text-lg font-semibold">{member.name}</h2>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isOpen && selectedMember && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
              <h2 className="text-xl font-bold mb-4">{selectedMember.name}</h2>
              <p className="text-gray-600 mb-4">{selectedMember.role}</p>
              <p>{selectedMember.description}</p>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
