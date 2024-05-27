import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const faqs = [
  { question: "What is AUCA?", answer: "AUCA is an online learning platform offering a wide range of courses to help you achieve your educational goals." },
  { question: "How can I join AUCA?", answer: "You can join AUCA by signing up on our website and choosing the courses you are interested in." },
  { question: "What courses are available?", answer: "AUCA offers courses in various fields including technology, business, art, and more." },
  { question: "What is the pricing for the courses?", answer: "Pricing varies depending on the course. Some are free, while others require a fee." },
  { question: "Can I get a certificate?", answer: "Yes, you can earn certificates for completing courses." },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleQuestionClick = (index) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const newChat = {
        question: faqs[index].question,
        answer: faqs[index].answer,
      };
      setChatHistory([...chatHistory, newChat]);
    }, 2000); // Simulate a 2-second delay for loading
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div
        className="bg-blue-600 text-white p-3 rounded-full cursor-pointer flex items-center justify-center"
        onClick={toggleChatbot}
      >
        <FaComments size={20} />
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-3xl h-128 border border-gray-300 rounded-lg shadow-lg flex flex-col">
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h2 className="text-lg font-semibold">Hi, how can we help you?</h2>
            </div>
            <div className="p-4 overflow-y-auto flex-grow">
              {chatHistory.map((chat, index) => (
                <div key={index} className="mb-4">
                  <div className="bg-gray-200 p-2 rounded-lg mb-1">
                    <span className="font-semibold">You:</span> {chat.question}
                  </div>
                  <div className="bg-gray-100 p-2 rounded-lg ml-4">
                    <span className="font-semibold">AUCA:</span> {chat.answer}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="italic text-gray-500">AUCA is typing...</div>
              )}
              {!loading &&
                faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="cursor-pointer hover:text-blue-600 text-lg font-medium border-b border-gray-300 py-2"
                    onClick={() => handleQuestionClick(index)}
                  >
                    {faq.question}
                  </div>
                ))}
            </div>
            <div className="flex justify-end p-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={toggleChatbot}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;



