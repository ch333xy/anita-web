import React, { useState } from "react";
import { GrMicrophone } from "react-icons/gr";
import { GrRaspberry } from "react-icons/gr";
import { GrUser } from "react-icons/gr";
import { GrOptimize } from "react-icons/gr";

const Work = () => {
  // State to control the modal visibility and content
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // Function to open the modal and set the content
  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    setModalContent("");
  };

  return (
    <div className="bg-black min-h-screen p-4">
      <div
        id="work"
        className="bg-gray-900 text-gray-300 min-h-screen p-4 font-mono rounded-lg w-full md:w-auto"
      >
        <div className="mb-4">
          <span className="text-green-500">guest</span>
          <span>@</span>
          <span className="text-blue-500">term.m4tt72.com</span>
          <span>:~$</span>
          <span className="text-yellow-500"> banner</span>
        </div>
        <div className="text-yellow-500 mb-4">
          <pre className="whitespace-pre-wrap">
            {`
    _   _  _ ___ _____ _   
   /_\\ | \\| |_ _|_   _/_\\  
  / _ \\| .\` || |  | |/ _ \\ 
 /_/ \\_\\_|\\_|___| |_/_/ \\_\\
          `}
          </pre>
          <div className="text-right">v3.3.1</div>
        </div>
        <div>
          <span className="text-green-500">guest</span>
          <span>@</span>
          <span className="text-blue-500">term.m4tt72.com</span>
          <span>:~$</span>
        </div>

        <div className="h-10"></div>

        <div className="mb-4 space-y-4 text-justify">
          <p>
            Welcome to ANITA, your cutting-edge virtual assistant designed to
            revolutionize human-computer interaction within organizational
            settings. ANITA stands for Advanced Natural Interaction Technology
            Assistant, a project developed by a team of passionate computer
            science students from ICCT Colleges.
          </p>

          <p>
            <strong>What is ANITA?</strong>
          </p>

          <p>
            ANITA is an AI-powered virtual assistant built on the robust
            capabilities of GPT-3.5-Turbo-0125, finely tuned to operate
            efficiently on the Raspberry Pi 4 platform. This integration of
            advanced AI with cost-effective hardware makes ANITA a powerful yet
            accessible tool for enhancing productivity and user satisfaction in
            various organizational processes.
          </p>

          <div className="bg-gray-800 text-white p-4 my-6 rounded-lg shadow-lg">
            <div className="flex justify-center my-4">
              <img
                src="https://i.ibb.co/PD3yN74/image.webp"
                alt="image"
                className="rounded-lg shadow-lg"
                style={{ width: "420px", height: "auto" }}
              />
            </div>
            <p className="text-center">ANITA ver 4.0.0</p>
          </div>

          <p>
            <strong>Why Choose ANITA?</strong>
          </p>

          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Enhanced Efficiency:</strong> ANITA is designed to
              streamline administrative and academic functions, providing
              real-time information on document processing, service
              availability, and answers to frequently asked questions.
            </li>
            <li>
              <strong>User-Centric Design:</strong> With a high level of user
              interaction in mind, ANITA supports voice command interactions,
              making it a convenient and engaging assistant for students and
              staff alike.
            </li>
            <li>
              <strong>Cost-Effective Solution:</strong> Utilizing the affordable
              and scalable Raspberry Pi 4 platform, ANITA offers advanced AI
              capabilities without the need for significant financial and
              infrastructure investments.
            </li>
          </ul>

          <p>
            <strong>Key Features</strong>
          </p>

          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              <strong>Natural Language Processing (NLP):</strong> Leveraging the
              power of GPT-3.5-Turbo-0125, ANITA understands and generates
              human-like responses, ensuring smooth and intuitive interactions.
            </li>
            <li>
              <strong>Voice Command Support:</strong> Responding to user
              preferences, ANITA facilitates hands-free operation through
              efficient speech-to-text and text-to-speech functionalities.
            </li>
            <li>
              <strong>Real-Time Information Access:</strong> ANITA provides
              up-to-date information on various organizational aspects,
              enhancing accessibility and operational efficiency.
            </li>
          </ul>

          <p>
            <strong>Join the Future of Organizational Interaction</strong>
          </p>

          <p>
            ANITA is more than just a virtual assistant; it is a step towards a
            future where AI seamlessly integrates into daily operations,
            enhancing productivity and user satisfaction. Explore the
            possibilities with ANITA and transform the way your organization
            interacts with technology.
          </p>
        </div>
      </div>

      <div className="py-4 ">
        {/* Grid of boxes */}
        <div className="flex space-x-4 justify-center ">
          <div
            onClick={() =>
              openModal(
                "By integrating a microphone for voice input and a touch screen for additional input, ANITA ensures a versatile and intuitive interaction method, aligning with the objective of  improving human-computer interaction."
              )
            }
            className="p-10 w-60 bg-white rounded-lg shadow-md cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
          >
            <h2>
              <GrMicrophone size={40} />
            </h2>
            <p className="mt-2 text-gray-600">Enhanced Interaction</p>
          </div>
          <div
            onClick={() =>
              openModal(
                "The use of Raspberry Pi 4 as the core processing unit with the integration of Open AI API provides sufficient computational power to handle complex AI tasks, meeting the objective of leveraging advanced AI capabilities."
              )
            }
            className="p-10 w-60 bg-white rounded-lg shadow-md cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
          >
            <h2>
              <GrRaspberry size={40} />
            </h2>
            <p className="mt-2 text-gray-600">Efficient Processing</p>
          </div>
          <div
            onClick={() =>
              openModal(
                "The design phase for ANITA focused on collecting user data to create an appealing interface, ensuring that the end product is aligned with user needs and preferences."
              )
            }
            className="p-10 w-60 bg-white rounded-lg shadow-md cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
          >
            <h2>
              <GrUser size={40} />
            </h2>
            <p className="mt-2 text-gray-600">User-Centric Design</p>
          </div>
          <div
            onClick={() =>
              openModal(
                "By incorporating feedback loops and iterative testing, the design ensures that ANITA evolves based on real-world usage and feedback, maintaining alignment with the objective of continuous enhancement and adaptability."
              )
            }
            className="p-10 w-60 bg-white rounded-lg shadow-md cursor-pointer hover:bg-blue-500 hover:text-white hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
          >
            <h2>
              <GrOptimize size={40} />
            </h2>
            <p className="mt-2 text-gray-600">Continuous Improvement:</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4"></h2>
            <p>{modalContent}</p>
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
  );
};

export default Work;
