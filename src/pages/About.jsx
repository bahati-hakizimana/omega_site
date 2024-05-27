import React, { useState } from 'react';
import aboutImg from "../components/assets/images/AUCA3.jpg";
import aboutImgBanner from "../components/assets/images/AUCA_RWANDA.jpg";
import imgs from "../components/assets/images/join1.png";
import { FaBookDead } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { Instructor } from './Instructor';

export const About = () => {
  return (
    <>
      <section className='about py-16'>
        <div className='container'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>Get Our story</h1>
            <span className='text-sm mt-2 block'>Our story started in the 19th century when AUCA started at Rubavu District.</span>
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  );
};

const faqs = [
  { question: "What is Educal?", answer: "Educal is an online learning platform offering a wide range of courses to help you achieve your educational goals." },
  { question: "How can I join Educal?", answer: "You can join Educal by signing up on our website and choosing the courses you are interested in." },
  { question: "What courses are available?", answer: "Educal offers courses in various fields including technology, business, art, and more." },
  { question: "What is the pricing for the courses?", answer: "Pricing varies depending on the course. Some are free, while others require a fee." },
  { question: "Can I get a certificate?", answer: "Yes, you can earn certificates for completing courses." },
];

export const AboutContent = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setActiveIndex(index);
      }, 4000); // Simulate a 4-second loading time
    }
  };

  return (
    <section className='mb-16'>
      <div className='container flex gap-4 md:flex-col'>
        <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
          <img src={aboutImg} alt='aboutImg' className='rounded-xl' />
          <img src={aboutImgBanner} alt='aboutImg' className='rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80' />
          <div className='img-group ml-24 mt-3'>
            <div>
              <img src={imgs} alt='' />
              <span className='text-[14px] flex justify-center items-center'>
                <div>
                  Join over <label className='text-black text-sm'>4,000+</label> students
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className='right w-2/3 md:w-full md:mt-16'>
          <div className='heading w-4/5 md:w-full'>
            <h1 className='text-3xl font-semibold text-black'>Achieve Your Goals With Educal</h1>
            <span className='text-sm mt-2 block leading-6'>
              The Adventist University of Central Africa (AUCA), known as MUDENDE, is a Seventh-day Adventist Institution of Higher Learning which operates on the basis of the Seventh-day Adventist worldview: "God is the Creator and Sustainer of the universe and the source of true knowledge. The entrance of sin caused man’s alienation from God, therefore the restoration of the relation between man and his God is the main aim of Adventist Christian Education that leads students to discover and understand the truth through critical thinking."
            </span>
            <button className='px-5 py-2 border border-gray-300 bg-blue-600 text-white rounded-md text-sm'>Apply Now</button>
          </div>
        </div>

        {/* <div className='faq mt-10 w-full'>
          <h2 className='text-2xl font-semibold'>Hi, how can we help you?</h2>
          <div className='faq-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='faq-item p-4 border border-gray-200 rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300'
                onClick={() => toggleAnswer(index)}
              >
                <div className='question text-lg font-medium'>
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div className='answer mt-2 text-sm'>
                    {loading ? (
                      <div className='loading'>Loading...</div>
                    ) : (
                      <div>
                        {faq.answer}
                        <button
                          className='ml-2 px-2 py-1 border border-gray-300 bg-blue-600 text-white rounded-md text-xs mt-2'
                          onClick={() => toggleAnswer(index)}
                        >
                          Close
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <Instructor />
    </section>
  );
};
